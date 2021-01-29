from random import Random


def create_token():
    """
        生成token
        :param key:用户id
        :return: token
    """
    length_r = 32
    token = ''
    random = Random()
    for i in range(length_r):
        token += random.choice("abcdefghijklmnopqrstuvwxyz0123456789")
    return token
