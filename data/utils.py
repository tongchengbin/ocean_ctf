import inspect
import sys

from data.models.base import db


def populate_models(modname):
    mod = sys.modules.get(modname)
    names = []
    if not mod:
        return names

    for name, clazz in inspect.getmembers(mod, inspect.isclass):
        # 不引入模板模型
        is_abstract = clazz.__dict__.get("__abstract__", False)
        if issubclass(clazz, (db.Model,)) and not is_abstract:
            names.append(name)
    return names
