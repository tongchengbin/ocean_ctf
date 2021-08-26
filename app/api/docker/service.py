import docker


def fetch_system_info_by_docker_api(docker_api):
    try:
        client = docker.DockerClient(docker_api,timeout=1)
    except docker.errors.DockerException:
        return {}
    info = client.info()
    os = info["OperatingSystem"]
    info = client.info()
    data = {
        "os": os,
        "cpu": info["NCPU"],
        "memory": round(info["MemTotal"] / 1024 / 1024 / 1024, 2)
    }
    return data
