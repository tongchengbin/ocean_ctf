import os
import time

import pymysql
import redis
from flask import Blueprint, jsonify

from app.extensions import cache, db

health_bp = Blueprint("health", __name__, url_prefix="/api/health")


@health_bp.route("/ping", methods=["GET"])
def ping():
    """简单的 ping 接口，用于检查 API 是否在线"""
    return jsonify({"status": "success", "message": "pong", "timestamp": int(time.time())}), 200


@health_bp.route("/status", methods=["GET"])
def status():
    """检查所有服务的状态"""
    try:
        # 初始化结果对象
        result = {
            "status": "success",
            "timestamp": int(time.time()),
            "services": {
                "api": {"status": "up"},
            },
        }
        
        # 检查数据库连接
        try:
            db.session.execute("SELECT 1")
            result["services"]["database"] = {
                "status": "up",
                "type": "mysql",
                "host": os.environ.get("DB_HOST", "db"),
            }
        except Exception as e:
            result["services"]["database"] = {
                "status": "down",
                "error": str(e),
                "type": "mysql",
                "host": os.environ.get("DB_HOST", "db"),
            }
            result["status"] = "partial_outage"

        # 检查 Redis 连接
        try:
            cache.ping()
            result["services"]["redis"] = {
                "status": "up",
                "host": os.environ.get("REDIS_HOST", "redis"),
            }
        except Exception as e:
            result["services"]["redis"] = {
                "status": "down",
                "error": str(e),
                "host": os.environ.get("REDIS_HOST", "redis"),
            }
            result["status"] = "partial_outage"

        # 检查 Celery Worker
        try:
            # 在导入时可能出现问题，使用更安全的方式
            try:
                from app.extensions import celery
                i = celery.control.inspect()
                stats = i.stats()
                if stats:
                    result["services"]["celery_worker"] = {"status": "up", "workers": list(stats.keys())}
                else:
                    result["services"]["celery_worker"] = {"status": "down", "error": "No workers found"}
                    result["status"] = "partial_outage"
            except ImportError:
                # 如果无法导入 celery，返回更安全的错误信息
                result["services"]["celery_worker"] = {"status": "unknown", "error": "Celery module not available"}
                result["status"] = "partial_outage"
        except Exception as e:
            # 确保错误消息是字符串，避免 JSON 序列化问题
            error_msg = str(e)
            result["services"]["celery_worker"] = {"status": "down", "error": error_msg}
            result["status"] = "partial_outage"

        # 返回结果
        status_code = 200 if result["status"] == "success" else 500
        return jsonify(result), status_code
        
    except Exception as e:
        # 最外层异常处理，确保始终返回有效的 JSON
        error_response = {
            "status": "error",
            "timestamp": int(time.time()),
            "message": "Health check failed",
            "error": str(e),
            "services": {"api": {"status": "up"}}
        }
        return jsonify(error_response), 500
