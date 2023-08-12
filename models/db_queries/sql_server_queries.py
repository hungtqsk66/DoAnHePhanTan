
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
    def get_product_by_id(product_id:int):
        query = f"SELECT * FROM product WHERE product_id = '{product_id}';"
        return query
    
    @staticmethod
    def delete_product_by_id(product_id: int):
        query = f"DELETE FROM product WHERE product_id = '{product_id}';"
        return query