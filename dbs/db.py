#Singleton pattern
import pyodbc
import os
from dotenv import load_dotenv

#Class database này dùng để thực hiện truy vấn CSDL SQL Server

class Database:
    
        
        
    #----------------------------------------------------------------#
    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(Database, cls).__new__(cls)
        return cls.instance
    
    #----------------------------------------------------------------#
    #Hàm này thực hiện lấy object cursor nếu mình muốn thực hiện các thao tác với nó
    @staticmethod
    def load_db_configs():
        load_dotenv()
        conn =  pyodbc.connect(
                    'Driver={'+os.getenv('Driver')+'};'
                    'Server='+os.getenv('Server')+';'
                    'Database='+os.getenv('Database')+';'
                    'Trusted_Connection='+os.getenv('Trusted_Connection')+';'
                )    
        
        return conn
   

    
    #----------------------------------------------------------------#
    #Hàm này thực hiện truy vấn cơ sở dữ  liệu (có thêm tham số là get_type chỉ nhận 'one' là chỉ lấy ra một cột , 'many' là nhiều cột )
    @staticmethod
    def executeQuery( query:str,get_type:str = None):
        conn = Database.load_db_configs()
        cursor = conn.cursor().execute(query)
        data = None
        if get_type is not None:
            if get_type == 'one': data = cursor.fetchone()
            elif get_type == 'many': data = cursor.fetchall()
            else: raise ValueError("get_type must be 'one' or 'many' !")
        conn.commit()
        conn.close()
        if data: return data
    