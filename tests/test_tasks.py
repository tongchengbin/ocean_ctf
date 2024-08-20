import unittest
from docker import APIClient

from app import create_app
from app.vulnerability import tasks
from app.ctf.tasks import sync_ctf_question_repo


class TestValidator(unittest.TestCase):

    def setUp(self) -> None:
        create_app().app_context().push()

    def test_sync_vulnerability_repo(self):
        tasks.sync_remote_vulnerability_repo("https://gitee.com/tong1995/vuldb.git")

    def test_sync_ctf_repo(self):
        sync_ctf_question_repo("https://gitee.com/tong1995/ctfdb.git")
