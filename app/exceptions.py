from werkzeug.exceptions import HTTPException


class ServerUnableError(HTTPException):
    def get_body(
            self,
            environ: t.Optional["WSGIEnvironment"] = None,
            scope: t.Optional[dict] = None,
    ) -> str:
        """Get the HTML body."""
        return (
            '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">\n'
            f"<title>{self.code} {escape(self.name)}</title>\n"
            f"<h1>{escape(self.name)}</h1>\n"
            f"{self.get_description(environ)}\n"
        )