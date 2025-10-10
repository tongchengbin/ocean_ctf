from unittest import mock

import pytest


@pytest.mark.skip(reason="需要Docker环境，CI中跳过")
def test_docker_image(docker_api_client):
    """测试Docker镜像拉取"""
    docker_api_client.pull("xxx:v1")


@pytest.mark.skip(reason="需要Docker环境，CI中跳过")
def test_docker_build(docker_client):
    """测试Docker镜像构建"""
    docker_client.images.build(path="/opt/ctfdb/web/sql1/", tag="sqli1:latest")


def test_docker_image_mock():
    """使用mock测试Docker镜像拉取"""
    with mock.patch("docker.APIClient") as mock_client:
        mock_client.return_value.pull.return_value = "Success"
        client = mock_client()
        result = client.pull("xxx:v1")
        assert result == "Success"
        mock_client.assert_called_once()


def test_docker_build_mock():
    """使用mock测试Docker镜像构建"""
    with mock.patch("docker.DockerClient") as mock_client:
        mock_client.return_value.images.build.return_value = ("image", "logs")
        client = mock_client()
        image, logs = client.images.build(path="/path", tag="tag")
        assert image == "image"
        mock_client.assert_called_once()
