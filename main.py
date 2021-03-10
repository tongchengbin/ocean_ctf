
import sys

import alembic.runtime.environment
import alembic.script
from data.database import DEFAULT_DATABASE
from lib.app_factory import app, register_blueprints

db = DEFAULT_DATABASE.db
register_blueprints(app)
'''
    shell context processor 注册一个shell上下文函数 不然使用shell 时不会加载对应的模块
'''


@app.shell_context_processor
def auto_import():
    from data import models
    from data.database import db

    ctx = {m: getattr(models, m) for m in models.__all__}
    ctx['session'] = db.session
    ctx['db'] = db
    return ctx


def check_db_state():
    with app.app_context():
        config = app.extensions["migrate"].migrate.get_config()
        script = alembic.script.ScriptDirectory.from_config(config)

        heads = script.get_revisions(script.get_heads())
        head_revs = frozenset(rev.revision for rev in heads)

        def check(rev, context):
            db_revs = frozenset(rev.revision
                                for rev in script.get_all_current(rev))
            if db_revs ^ head_revs:
                config.print_stdout(
                    "Current revision(s) for %s %s do not match the heads %s!\n"
                    "Run ./docker/docker-admin.sh upgrade\n"
                    "(Outside of docker you can directly run: ./manage.sh db"
                    " upgrade)",
                    alembic.util.obfuscate_url_pw(
                        context.connection.engine.url),
                    tuple(db_revs),
                    tuple(head_revs),
                )
                sys.exit(1)
            return []

        with alembic.runtime.environment.EnvironmentContext(config,
                                                            script,
                                                            fn=check):
            script.run_env()


def main():
    app.run(host='0.0.0.0', port=8080, debug=True)


if __name__ == "__main__":
    main()
