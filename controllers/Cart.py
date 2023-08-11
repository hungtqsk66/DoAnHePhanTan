
from fastapi import FastAPI
# import pyodbc
from datetime import datetime
from models.db_queries.sql_server_queries import SQL_Server_Query
from pydantic import BaseModel
from models.Cart_product import Cart_Product
from dbs.db import Database

app = FastAPI()
conn = Database.load_db_configs()
# API endpoint để hiển thị giỏ hàng
@app.get("/cart")
async def view_cart():  
    cart = Database.executeQuery(SQL_Server_Query.GetAll_Cart_Query(),get_type="many")
    da = {}
    data = []   
    for row in cart:
        da ={
            "uid":row[0],
            "products_id":row[1],
            "quantity":row[2]
        }
        data.append(da)
    return data
# # # API endpoint để thêm sản phẩm vào giỏ hàng
@app.post("/cart/add")
async def add_to_cart(cart:Cart_Product):
    pr_id =Database.executeQuery("select product_id from cart",get_type="one")
    if not pr_id:   
        query = SQL_Server_Query.Add_Cart_Query(
            uid=cart.uid,
            product_id=cart.product_id,
            quantity=cart.quantity
        )        
        Database.executeQuery(query)       
        return {"message": "Sản phẩm đã được thêm vào giỏ hàng."}
    else:       
        qtity = f"select quantity from cart where product_id ='{str(pr_id[0])}'"#lấy số lượng có sẵn
        q = Database.executeQuery(qtity,get_type="one")
        query = SQL_Server_Query.Update_Quantity_from_Cart(            
            product_id=cart.product_id,
            quantity=str(int(cart.quantity)+q[0])
        )
        Database.executeQuery(query)
        return{"message": "Sản phẩm đã có trong giỏ hàng nên sẽ cập nhật số lượng."}
# API endpoint để xóa sản phẩm khỏi giỏ hàng
@app.delete("/cart/remove/{product_id}")
async def remove_from_cart(cart:Cart_Product):    
        # Xóa sản phẩm ra khỏi giỏ hàng
        query = SQL_Server_Query.Remove_Product_from_Cart(          
            product_id=cart.product_id,           
        )
        Database.executeQuery(query) 
        return {"message": "Sản phẩm đã được xóa khỏi giỏ hàng."}    
# Endpoint để chỉnh sửa số lượng sản phẩm trong giỏ hàng
@app.put("/cart/update/{products_id}")
async def update_from_cart(cart:Cart_Product):   
        query = SQL_Server_Query.Update_Quantity_from_Cart(
        product_id=cart.product_id,
        quantity=cart.quantity
       )
        Database.executeQuery(query) 
        return {"message":"Đã cập nhập số lượng sản phẩm"}   
@app.post("/cart/checkout")
async def creat_bill():        
            prc = []
            total = []                                               
            pr_id = Database.executeQuery("Select product_id from cart",get_type="one")  #lấy ra product_id kiểm tra xem giỏ hàng có rỗng hay không          
            if pr_id:
                data = Database.executeQuery("Select product_id from cart",get_type="many")  #nếu có thì lấy tất cả các product_id trong giỏ hàng       
                for row in data:
                    price = f"Select cart.uid,users.username,products.product_id,products.product_name,products.price,cart.quantity from products,cart,users where cart.product_id={str(row[0])} and products.product_id ={str(row[0])} and cart.uid=users.uid"                    
                    pe=Database.executeQuery(price,get_type="many")                   
                    for row in pe:
                        i = {
                            "uid":row[0],
                            "username":row[1]
                        }
                        f = {                            
                            "product_id":row[2],
                            "product_name":row[3],
                            "price":row[4],                            
                            "quantity":row[5],
                            "totalmoney":row[4]*row[5]
                        }                       
                        prc.append(f)
                        total.append(row[4]*row[5])
                return {"user_info":i,
                        "bill":prc,
                        "datetime": datetime.now().strftime('%c'),
                        "total":sum(total)
                        }                 
            else:
                return {"message": "Giỏ hàng rỗng."}
       
   