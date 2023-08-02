from fastapi import APIRouter
from dbs.db import Database


db = Database()


router = APIRouter(
    prefix="/product",
    tags=["product"],
)

@router.get('/get_products/page={page}')
async def get_products(page:int):
    rows = db.executeQuery("select * from products").fetchall()
    
    data = []
    for row in rows:
        data.append({
            "product_id": row[0],
            "product_name": row[1],
            "price": row[2],
            "status": row[3],
            "description": row[4],
            "category": row[5],
            "image": row[6]
        })

    return data

