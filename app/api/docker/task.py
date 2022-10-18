import os
from compose.cli.command import project_from_options

from app.api.docker.service import user_compose_down
from app.models.docker import ComposeDB
from app import create_app
from app.extensions import scheduler


def compose_build(compose_id):
    scheduler.app.app_context().push()
    instance = ComposeDB.get_by_id(compose_id)
    project_dir = instance.path
    project = project_from_options(project_dir, {})
    project.build()
    instance.status = ComposeDB.STATUS_BUILD
    instance.save()


def delay_compose_down(*args):
    scheduler.app.app_context().push()
    user_compose_down(*args)
