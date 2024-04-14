import unittest
from docker import APIClient

from app import create_app
from app.vulnerability import tasks


class TestValidator(unittest.TestCase):

    def setUp(self) -> None:
        create_app().app_context().push()

    def test_sync_vulnerability_repo(self):
        tasks.sync_remote_vulnerability_repo("https://github.com/tongchengbin/vuldb.git")
