from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
from sqlalchemy.engine import reflection

from data.models.base import db


class Database:
    db = db
    migrate = Migrate(db=db)
    manager = Manager()

    def __init__(self, app=None):
        """Initializes the  object."""
        self.app = app

    def init_app(self, app):
        self.app = app
        with self.app.app_context():
            # 应用上下文__enter__()和__exit__()
            self.db.init_app(self.app)
            self.migrate.init_app(self.app)
            self.manager.app = self.app

    def reset_all(self):
        # 删除数据表
        self.db.drop_all()

        insp = reflection.Inspector.from_engine(self.db.engine)
        for name in insp.get_table_names():
            for index in insp.get_indexes(name):
                self.db.engine.execute(f"DROP INDEX IF EXISTS {index['name']}")
        self.app.logger.warning("!!! Attention !!! FLUSHED the main database.")

        # Create the database from all model definitions.
        self.db.create_all()

        self.db.session.commit()

    @property
    def session(self):
        return self.db.session

    def query(self, *args, **kwargs):
        return self.db.session.query(*args, **kwargs)


Database.manager.add_command("db", MigrateCommand)

DEFAULT_DATABASE = Database()


def init_app(app):
    DEFAULT_DATABASE.init_app(app)
