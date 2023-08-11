from pydantic import BaseModel

class Cart_Product(BaseModel):
    uid:int
    product_id:int  
    quantity:int