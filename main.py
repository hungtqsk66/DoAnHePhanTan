import os
from fastapi import FastAPI,Request
from controllers import auth, product
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from models.middlewares.Token_auth import Token_Middleware

from dbs.db import Database


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.middleware('http')
async def check_token_expired(request:Request,call_next):
    return await Token_Middleware.delete_cookie_if_jwt_expired(request = request,call_next=call_next) 
    
app.mount("/public", StaticFiles(directory=os.getcwd()+"\public"), name="public")
app.include_router(auth.router)
app.include_router(product.router)




