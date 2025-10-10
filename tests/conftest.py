import docker
import pytest
from docker import APIClient

from app import create_app


@pytest.fixture(scope="session")
def app():
    """创建测试应用实例"""
    app = create_app()
    app.config["TESTING"] = True
    app.config["DEBUG"] = False
    return app


@pytest.fixture(scope="session")
def app_context(app):
    """创建应用上下文"""
    with app.app_context() as ctx:
        yield ctx


@pytest.fixture(scope="session")
def client(app):
    """创建测试客户端"""
    with app.test_client() as client:
        yield client


@pytest.fixture(scope="session")
def docker_api_client():
    """创建Docker API客户端"""
    return APIClient("unix:///var/run/docker.sock")


@pytest.fixture(scope="session")
def docker_client():
    """创建Docker客户端"""
    return docker.DockerClient("unix:///var/run/docker.sock")
