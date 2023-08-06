from models.models import UserInDB
from models.auth.auth_handlers import Auth
from fastapi import APIRouter
from fastapi import  Form
from fastapi.requests import Request





router = APIRouter(
    prefix="/auth",
    tags=["auth"],
)

@router.post("/login")
async def login_for_access_token(
    username:str = Form(...),
    password:str =  Form(...), 
): return await Auth.handle_login(username=username, password=password)



@router.post("/signup")
async def signup(user:UserInDB): return await Auth.handle_signup(user)

@router.post("/logout")
async def remove_token(): return await Auth.handle_logout()

@router.get("/user/me")
async def get_current_user(request: Request): return await Auth.get_current_user(request)
    