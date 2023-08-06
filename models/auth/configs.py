from decouple import config


class Auth_Configs():
   
        SECRET_KEY = config("SECRET_KEY")
        ALGORITHM =  config("ALGORITHM")
        ACCESS_TOKEN_EXPIRE_MINUTES = 30
    
    


