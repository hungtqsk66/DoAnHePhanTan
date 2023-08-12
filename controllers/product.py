from fastapi import APIRouter
from models.models import ProductItem, ProductUpdateRequest
from models.product.product_ad import App

router = APIRouter(
    prefix="/product",
    tags=["product"],
)

@router.get("/")
async def root():
    return {"Super Car"}

@router.get("/product")
async def get(): return await App.get_Product()

@router.post("/product", status_code=201)
async def post(): return await App.post_Product()

@router.get("/product/detail/{product_id}", response_model=ProductItem)
async def get_id(product_id:int): 
    print(product_id)
    return await App.get_detail(product_id)

@router.put("/product/update")
async def put(): return await App.update_product(product_update=ProductUpdateRequest)

@router.delete("/product/delete/{product_id}")
async def delete_Product(): return await App.delete_Product(product_id=int)