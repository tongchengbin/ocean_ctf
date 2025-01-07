import re


def check_image_name(name: str) -> bool:
    if re.search(
            r'^[a-z0-9]+(?:[._-][a-z0-9]+)*(?:\/[a-z0-9]+(?:[._-][a-z0-9]+)*)?(?::[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*)?$',
            name):
        return True
    return False
