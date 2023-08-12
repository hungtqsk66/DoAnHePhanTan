from fastapi import HTTPException
from models.models import ProductItem, ProductUpdateRequest
from dbs.db import Database
from models.db_queries.sql_server_queries import SQL_Server_Query


class App():

    @staticmethod
    async def root():
        return {"Super Car"}

    @staticmethod
    async def get_Product():
        try:
            Product = Database.executeQuery("SELECT * FROM product",get_type='many')

            dbs=[]
            for row in Product:
                dbs.append({
                    "product_id": row[0],
                    "product_name": row[1],
                    "price": row[2],
                    "status": row[3],
                    "description": row[4],
                    "category": row[5],
                    "image": row[6]
                })
            return dbs;
        except Exception as e:
            print(e)
            raise HTTPException(status_code=500, detail="Đã xảy ra lỗi khi truy vấn dữ liệu", headers={"Error": str(e)})

    @staticmethod
    async def post_Product(product:dict):
        try:
            Product=Database.executeQuery(f'''INSERT INTO product ( product_name, price, status, description, category, image) 
                                        VALUES ('{product['product_name']}', {product['price']} ,{product['status']}, '{product['description']}', '{product['category']}', '{product['image']}');''')
            return {"message": "Sản phẩm đã được thêm thành công"}

        except Exception as e:
            raise HTTPException(status_code=500, detail="Đã xảy ra lỗi khi thêm sản phẩm", headers={"Error": str(e)})


    @staticmethod
    async def get_detail(product_id: int):
        try:
            product_detail: ProductItem
            product_detail = SQL_Server_Query.get_product_by_id(product_id);
            if product_detail:
                return{
                    "product_id": product_detail[0],
                    "product_name": product_detail[1],
                    "price": product_detail[2],
                    "status": product_detail[3],
                    "description": product_detail[4],
                    "category": product_detail[5],
                    "image": product_detail[6]
                }
            else: raise HTTPException(status_code=404, detail="Không tìm thấy sản phẩm với product_id đã cho")
        except Exception as e:
            raise HTTPException(status_code=500, detail="Đã xảy ra lỗi khi truy vấn dữ liệu", headers={"Error": str(e)})


    @staticmethod
    async def update_product(product_update: ProductUpdateRequest):
            try:
                # Tìm sản phẩm theo product_id
                existing_product = SQL_Server_Query.get_product_by_id(product_update.product_id)
                # Cập nhật thông tin sản phẩm (product_update)
                existing_product.product_id = product_update.product_id
                existing_product.product_name = product_update.product_name
                existing_product.price = product_update.price
                existing_product.status = product_update.status
                existing_product.description = product_update.description
                existing_product.category = product_update.category
                existing_product.image = product_update.image
                ## Thực hiện truy vấn SQL để cập nhật thông tin sản phẩm
                query = f"""
                    UPDATE product
                    SET product_name = '{existing_product.product_name}',
                        price = {existing_product.price},
                        status = {existing_product.status},
                        description = '{existing_product.description}',
                        category = '{existing_product.category}',
                        image = '{existing_product.image}'
                    WHERE product_id = {existing_product.product_id};"""
                Database.executeQuery(query)
                return {"message": "Thông tin sản phẩm đã được cập nhật thành công"}
            except Exception as e:
                raise HTTPException(status_code=500, detail="Đã xảy ra lỗi khi cập nhật thông tin sản phẩm", headers={"Error": str(e)})

    @staticmethod
    async def delete_Product(product_id:int):
        try:
            SQL_Server_Query.get_product_by_id(product_id)
            SQL_Server_Query.delete_product_by_id(product_id)
            #Trả về 200 No Content để báo rằng xóa thành công
            return None
        except Exception as e:
            raise HTTPException(status_code=500, detail="Đã xảy ra lỗi khi xóa sản phẩm", headers={"Error": str(e)})

