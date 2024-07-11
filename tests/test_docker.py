import unittest

import docker
from docker import APIClient


class TestValidator(unittest.TestCase):

    def setUp(self) -> None:
        pass

    def test_docker_image(self):
        client = APIClient("unix:///var/run/docker.sock")
        client.pull("xxx:v1")

    def test_docker_build(self):
        client = docker.DockerClient("unix:///var/run/docker.sock")
        client.images.build(path="/opt/ctfdb/web/sql1/", tag="sqli1:latest")
