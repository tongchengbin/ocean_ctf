import redis


class Cache(object):
    """
        缓存  代理模式避免循环引入
    """

    def __init__(self):
        self._cache = None

    def init_app(self, app):
        _cache = redis.Redis(**app.config["REDIS_CONFIG"])
        self._cache = _cache

    def __getattribute__(self, item):
        try:
            return object.__getattribute__(self, item)
        except AttributeError:
            return object.__getattribute__(self._cache, item)


cache = Cache()


class ConstCacheKey:
    IP_DAY_SET = "ip-%s"
    REQ_DAY_COUNT = "req-%s"
