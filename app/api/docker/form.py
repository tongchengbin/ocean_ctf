from pydantic import BaseModel


class PageForm(BaseModel):
    page = 1
    page_size = 10


class ComposeDBForm(BaseModel):
    path: str
    name: str
