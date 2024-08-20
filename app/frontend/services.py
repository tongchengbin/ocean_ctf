import logging

from sqlalchemy import func, desc

from app.extensions import db
from app.models.ctf import Question, Answer, CtfResource
from app.models.user import User

logger = logging.getLogger(__name__)


def submit(question, flag, user, ip=None):
    instance = db.session.query(Question).get(question)
    answer = Answer(question_id=instance.id, user_id=user.id, flag=flag, ip=ip)
    # 判断是否有正确的提交记录
    is_answer = db.session.query(Answer).filter(Answer.question_id == instance.id, Answer.user_id == user.id,
                                                Answer.status == Answer.status_ok).count()

    if instance.active_flag:
        # 获取镜像资源
        resource = db.session.query(CtfResource).filter(CtfResource.question_id == instance.id,
                                                        CtfResource.user_id == user.id).first()
        if not resource:
            answer.status = answer.status_error
            db.session.commit()
            return 1, "题库无效，请联系管理员或重新生成!"
        # 判断是否是作弊
        ok_container = db.session.query(CtfResource).filter(CtfResource.question_id == instance.id,
                                                            CtfResource.flag == flag).first()
        if ok_container and ok_container != resource:
            # 作弊
            answer.status = answer.status_cheat
            db.session.add(answer)
            db.session.commit()
            return 1, "请勿作弊"

        if resource.flag == flag:
            answer.score = instance.score
            # 判断是否作弊
            answer.status = answer.status_repeat if is_answer else answer.status_ok
            answer.rank = db.session.query(Answer.id).filter(Answer.question_id == question,
                                                             Answer.status == Answer.status_ok).count() + 1

            return 0, "提交成功"
        else:
            answer.status = answer.status_error
            answer.rank = db.session.query(Answer.id).filter(Answer.question_id == question,
                                                             Answer.status == Answer.status_ok).count() + 1
            db.session.add(answer)
            db.session.commit()
            return 1, "Flag错误!"
    elif instance.flag == flag:
        answer.score = instance.score
        answer.status = answer.status_repeat if is_answer else answer.status_ok
        answer.rank = db.session.query(Answer.id).filter(Answer.question_id == question,
                                                         Answer.status == Answer.status_ok).count() + 1
        db.session.add(answer)
        db.session.commit()
        return 0, "提交成功"
    else:
        answer.status = answer.status_error
        db.session.add(answer)
        db.session.commit()
        return 1, "flag错误!"


def score_rank(username=None, page=1, page_size=20):
    page = int(page)
    page_size = int(page_size)
    # 第一步查询只需要获取排名即可 和过滤条件即可
    base_arg_query = db.session.query(Answer.user_id, func.sum(Answer.score).label("sum_score"),
                                      func.count(Answer.id).label("cnt"),
                                      func.max(Answer.date_created).label("last_time"),
                                      func.aggregate_strings(Question.type, ",").label("strong")).join(Question,
                                                                                                Question.id == Answer.question_id).filter(
        Answer.status == Answer.status_ok)
    logger.info(base_arg_query)
    arg_query = base_arg_query.group_by(Answer.user_id).subquery("slr")
    sub_query = db.session.query(arg_query.c.user_id, arg_query.c.sum_score.label("sum_score"), arg_query.c.cnt,
                                 arg_query.c.last_time, arg_query.c.strong).select_from(
        arg_query).add_columns(
        db.func.rank().over(order_by=desc(arg_query.c.sum_score)).label(
            "rank")).subquery("rl")
    query = db.session.query(User, sub_query.c.user_id, sub_query.c.sum_score,
                             sub_query.c.cnt, sub_query.c.rank, sub_query.c.last_time,
                             sub_query.c.strong).select_from(
        sub_query).filter().join(
        User, User.id == sub_query.c.user_id)
    if username:
        query = query.filter(User.username.ilike("%{}%".format(username)))
    page = query.order_by((desc(sub_query.c.sum_score)), ).paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        types = item.strong.split(",")
        strong = max([i for i in tuple(types)], key=lambda x: types.count(x))
        data.append({
            "strong": strong,
            "last_time": item.last_time.strftime("%Y-%m-%d %H:%M:%S"),
            "username": item.User.username,
            "score": float(item.sum_score),
            "rank": item.rank,
            "cnt": item.cnt
        })
    return True, {
        "total": page.total,
        "data": data
    }
