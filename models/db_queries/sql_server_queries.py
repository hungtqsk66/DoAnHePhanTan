
class SQL_Server_Query:
    
    @staticmethod
    def Insert_User_Query(username:str,password:str,full_name:str)->str:
        query = f'''
                    insert into users (username,password,full_name,disabled) 
                    values('{username}','{password}','{full_name}',0)
                '''
        return query
    
    
    @staticmethod
    def Get_User_Query(username:str)->str:
        query = f'''
                select top 1 uid,username,password from users 
                where username = '{username}'
            '''
        return query
    
    @staticmethod 
    def GetAll_Products_Query()->str:
        return "select * from products"

    @staticmethod
    def GetAll_Cart_Query()-> str:
        return "select * from cart"

    @staticmethod
    def Add_Cart_Query(uid:int,product_id:int,quantity:int)->str:
        query = f"INSERT INTO cart (uid, product_id,quantity) VALUES ('{uid}','{product_id}','{quantity}')"
        return query

    @staticmethod
    def Remove_Product_from_Cart(product_id:int)->str:
        query = f"delete from cart where product_id ='{product_id}'"
        return query
        
    @staticmethod 
    def Update_Quantity_from_Cart(product_id:int,quantity:int)->str:
        query = f"UPDATE cart SET quantity = '{quantity}' WHERE product_id='{product_id}'"
        return query