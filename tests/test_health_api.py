import json

import pytest


def test_ping_endpoint(client):
    """测试 ping 接口是否正常工作"""
    response = client.get("/api/health/ping")
    assert response.status_code == 200

    data = json.loads(response.data)
    assert data["status"] == "success"
    assert data["message"] == "pong"
    assert "timestamp" in data


def test_status_endpoint(client):
    """测试状态检查接口是否正常工作"""
    response = client.get("/api/health/status")

    # 即使某些服务可能不可用，API 本身应该正常响应
    assert response.status_code in [200, 500]

    data = json.loads(response.data)
    assert "status" in data
    assert "services" in data
    assert "api" in data["services"]
    assert data["services"]["api"]["status"] == "up"

    # 检查是否包含数据库状态
    assert "database" in data["services"]

    # 检查是否包含 Redis 状态
    assert "redis" in data["services"]
