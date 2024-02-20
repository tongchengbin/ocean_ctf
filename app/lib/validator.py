import re


def contains_special_characters(input_string):
    # 定义正则表达式模式，匹配除了字母、数字和下划线之外的任何字符
    pattern = r'[^A-Za-z0-9_]'

    # 使用 re 模块的 search 函数在字符串中搜索模式
    if re.search(pattern, input_string):
        return True
    else:
        return False
