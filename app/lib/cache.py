import redis


class Cache(object):
    """
        缓存  代理模式避免循环引入
    """
    INIT_OK = False

    def __init__(self):
        self._cache = None

    def init_app(self, app):
        _cache = redis.Redis.from_url(app.config["REDIS_URL"], health_check_interval=30)
        self._cache = _cache

    def __getattribute__(self, item):
        try:
            return object.__getattribute__(self, item)
        except AttributeError:
            return object.__getattribute__(self._cache, item)

    def ping(self):
        try:
            self._cache.ping()
            return True
        except:
            return False


cache = Cache()


class ConstCacheKey:
    IP_DAY_SET = "ip-%s"
    REQ_DAY_COUNT = "req-%s"
    # tar包编译日志存储 1 day
    TASK_BUILD_LOG = "task-build-%s"
