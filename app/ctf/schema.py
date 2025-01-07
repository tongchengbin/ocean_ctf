from typing import Optional

from pydantic import BaseModel


class QuestionForm(BaseModel):
    name: str
    active: Optional[bool]
    active_flag: Optional[bool]
    flag: Optional[str] = None  # Set default to None
    desc: str
    type: str
    score: int
    resource_id: Optional[int]
