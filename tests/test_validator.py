from app.utils.validator import check_image_name


def test_check_image_name():
    """测试镜像名称验证函数"""
    assert check_image_name("tongchengbin:latest") is True
    assert check_image_name("tongchengbin/ctf:latest") is True
    assert check_image_name("tongchengbin") is True
    assert check_image_name("tongchengbin/ctf") is True
    assert check_image_name("tongchengbin|") is False
