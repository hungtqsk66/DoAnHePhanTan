from datetime import  timedelta
from fastapi.security import OAuth2PasswordBearer
from fastapi import  HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.requests import Request
from .utils import Auth_utils
from .configs import Auth_Configs
from dbs.db import Database
from models.models import UserInDB
from models.db_queries.sql_server_queries import SQL_Server_Query


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class Auth():


    @staticmethod
    async def handle_login(username:str,password:str):
        
        user = Auth_utils.authenticate_user(db=Database,username=username,password=password)
        if not user:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect username or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
                
        user = {"username": user.username,"uid":user.uid}
        access_token_expires = timedelta(minutes=Auth_Configs.ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = Auth_utils.create_access_token(
                data=user, expires_delta=access_token_expires
            )
        response = JSONResponse(content={"message": "user login successful"})
        response.set_cookie(key="token", value=access_token,httponly=True,max_age=Auth_Configs.ACCESS_TOKEN_EXPIRE_MINUTES*60)
        return response
    
    
    @staticmethod
    async def handle_signup(user:UserInDB):
        query = SQL_Server_Query.Get_User_Query(username=user.username)
        user_InDB = Database.executeQuery(query,get_type='one') 
        if user_InDB :raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Người dùng đã tồn tại",
        )
        user.password = Auth_utils.get_password_hash(password = user.password)
        query = SQL_Server_Query.Insert_User_Query(
            username=user.username,
            password=user.password,
            full_name=user.full_name
        )
        Database.executeQuery(query)
        return {"message":"user created successfully"}
    
    
    @staticmethod
    async def handle_logout():
        return JSONResponse(content={"message":"logout successfully"}).delete_cookie("token")
    
    @staticmethod
    async def get_current_user(request: Request):
        return await Auth_utils.current_user(request)




