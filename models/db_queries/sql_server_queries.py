
class SQL_Server_Query:
    
    @staticmethod
    def Insert_User_Query(username:str,password:str,full_name:str)->str:
        query = f'''
                    insert into dbo.users (username,password,full_name,disabled) 
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