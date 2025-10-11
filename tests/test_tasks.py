from app.tasks.ctf import sync_ctf_question_repo
from app.tasks.vulnerability import sync_remote_vulnerability_repo


def test_sync_vulnerability_repo(app_context):
    """测试同步漏洞库"""
    sync_remote_vulnerability_repo("https://gitee.com/tong1995/vuldb.git", admin_id=1)


def test_sync_ctf_repo(app_context):
    """测试同步CTF题库"""
    sync_ctf_question_repo("https://gitee.com/tong1995/ctfdb.git", admin_id=1)
