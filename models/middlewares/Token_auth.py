from fastapi import  Request
from jose import jwt, JWTError
from models.auth.configs import Auth_Configs


class Token_Middleware:
    
    @staticmethod
    async def delete_cookie_if_jwt_expired(request: Request, call_next)->dict:
        response = await call_next(request)
        try:
            token = request.cookies.get("token")
            if token:
                jwt.decode(token, Auth_Configs.SECRET_KEY, algorithms=[Auth_Configs.ALGORITHM])
        except JWTError as error:
            print(error)
            response.delete_cookie("token")
        return response

