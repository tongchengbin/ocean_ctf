from typing import Optional

from pydantic import BaseModel


class PageForm(BaseModel):
    page: int = 1
    page_size: int = 10


class ComposeDBForm(BaseModel):
    path: str
    name: str


class DockerResourceForm(BaseModel):
    resource_type: str
    docker_type: int
    image: str
    name: str
    description: Optional[str]


class DockerResourceEditForm(BaseModel):
    docker_type: int
    image: str
    name: str
    description: Optional[str]
