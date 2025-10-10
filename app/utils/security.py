import base64
import hashlib
import os
from random import Random


# Helper function to hash a password
def hash_password(password: str) -> str:
    # Create a new salt
    salt = os.urandom(16)
    # Hash the password with the salt
    pwd_hash = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt, 100000)
    # Return the salt and hash
    return base64.b64encode(salt + pwd_hash).decode("utf-8")


def check_password(stored_password: str, provided_password: str) -> bool:
    # Decode the stored password from Base64
    stored_password_bytes = base64.b64decode(stored_password)
    # Extract the salt from the stored password
    salt = stored_password_bytes[:16]
    # Extract the hash from the stored password
    stored_hash = stored_password_bytes[16:]
    # Hash the provided password with the extracted salt
    pwd_hash = hashlib.pbkdf2_hmac("sha256", provided_password.encode("utf-8"), salt, 100000)
    # Compare the hashes
    return pwd_hash == stored_hash


def create_token():
    """
    生成token
    :return: token
    """
    length_r = 32
    token = ""
    random = Random()
    for i in range(length_r):
        token += random.choice("abcdefghijklmnopqrstuvwxyz0123456789")
    return token
