from passlib.context import CryptContext
from datetime import datetime, timedelta
from fastapi.requests import Request
from jose import  jwt,JWTError
from models.models import UserInDB
from models.db_queries.sql_server_queries import SQL_Server_Query
from .configs import Auth_Configs
from dbs.db import Database

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")        

class Auth_utils:

    @staticmethod
    def verify_password(plain_password:str, hashed_password:str):
        return pwd_context.verify(plain_password, hashed_password)

    @staticmethod
    def get_password_hash(password:str):
        return pwd_context.hash(password)
    
    @staticmethod
    def authenticate_user(db:Database, username: str, password: str) ->dict or None:
        query = SQL_Server_Query.Get_User_Query(username=username)
        user = db.executeQuery(query,get_type='one')
        if not user:
            return False
        user = UserInDB(uid = user[0],username = user[1],password= user[2])
        if not Auth_utils.verify_password(password, user.password):
            return False
        return user

    @staticmethod
    def create_access_token(data: dict, expires_delta: timedelta | None = None) ->str: 
        to_encode = data.copy()
        to_encode.update({"exp": datetime.utcnow() + expires_delta})
        encoded_jwt = jwt.encode(to_encode, Auth_Configs.SECRET_KEY, algorithm=Auth_Configs.ALGORITHM)
        return encoded_jwt

    @staticmethod 
    async def current_user(request: Request) -> dict:
        try:
            token = request.cookies.get('token') 
            if not token: return None
            payload = jwt.decode(token,  Auth_Configs.SECRET_KEY, algorithms=[Auth_Configs.ALGORITHM]) 
            return  payload
        except JWTError:
            return None
    
    
    