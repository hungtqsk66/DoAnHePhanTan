from pydantic import BaseModel

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None


class User(BaseModel):
    uid: int  | None = None
    username: str
    full_name: str | None = None
    disabled: bool | None = None


class UserInDB(User):
    password: str
    

class Product(BaseModel):
    product_id:int
    product_name: str
    price:int
    status:bool
    description:str
    category:str
    image:str

class ProductItem(BaseModel):
    # product_id: int
    product_name: str
    price: int
    status: bool
    description: str
    category: str
    image: str


class ProductUpdateRequest(BaseModel):
    product_id:int
    product_name: str
    price: int
    status: int
    description: str
    category: str
    image: str


# class ProductResponse(ProductItem):
#     product_id: int
