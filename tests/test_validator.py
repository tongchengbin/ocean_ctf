import unittest

from app.lib.validator import check_image_name


class TestValidator(unittest.TestCase):

    def setUp(self) -> None:
        pass

    def test_check_image_name(self):
        self.assertTrue(check_image_name("tongchengbin:latest"))
        self.assertTrue(check_image_name("tongchengbin/ctf:latest"))
        self.assertTrue(check_image_name("tongchengbin"))
        self.assertTrue(check_image_name("tongchengbin/ctf"))
        self.assertFalse(check_image_name("tongchengbin|"))
