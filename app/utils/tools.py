import os
import random
import string


def generate_flag():
    """
    生成flag
    return generate flag
    """
    rd_str = "".join(random.sample(string.ascii_letters + string.digits, 32))
    return "flag{ocean%s}" % rd_str


def find_directories_with_filename(directory, filename="Dockerfile"):
    directories_with_dockerfile = []
    for root, dirs, files in os.walk(directory):
        if filename in files:
            directories_with_dockerfile.append(root)
    return directories_with_dockerfile
