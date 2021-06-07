import pathlib


def read_env(directory):
    env_path = pathlib.Path(directory) / '.env'
    d = {}
    with env_path.open('r') as f:
        for line in f:
            if '=' in line and not line.startswith('#'):
                # 2nd check allows for files with commented lines, but if you
                # want to have keys starting with a literal '#', just have the
                # 1st part of the if.
                key, value = line.split('=', 1)
                d[key] = value.strip("'").strip()
    return d
