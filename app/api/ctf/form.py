from typing import Optional

from pydantic import BaseModel


class QuestionForm(BaseModel):
    name: str
    active: bool
    active_flag: bool
    flag: Optional[str]
    desc: str
    type: str
    score: int
    resource_id: Optional[int]
