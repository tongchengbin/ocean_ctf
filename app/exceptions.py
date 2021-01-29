from markupsafe import text_type
from werkzeug.exceptions import HTTPException


class APIForbidden(HTTPException):
    """*403* `Forbidden`

    Raise if the user doesn't have the permission for the requested resource
    but was authenticated.
    """

    code = 403
    description = (
        "You don't have the permission to access the requested"
        " resource. It is either read-protected or not readable by the"
        " server."
    )

    def get_body(self, environ=None):
        """Get the HTML body."""
        return text_type(
            (
                u'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">\n'
                u"<title>%(code)s %(name)s</title>\n"
                u"<h1>%(name)s</h1>\n"
                u"%(description)s\n"
            )
            % {
                "code": self.code,
                "name": self.name,
                "description": self.get_description(environ),
            }
        )
