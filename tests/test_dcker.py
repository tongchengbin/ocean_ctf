import unittest
from docker import APIClient


class TestValidator(unittest.TestCase):

    def setUp(self) -> None:
        pass

    def test_docker_image(self):
        client = APIClient("unix:///var/run/docker.sock")
        client.pull("xxx:v1")

