#Singleton pattern
import pyodbc
from decouple import config

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
        conn =  pyodbc.connect(
                    'Driver={'+config('Driver')+'};'
                    'Server='+config('Server')+';'
                    'Database='+config('Database')+';'
                    'Trusted_Connection='+config('Trusted_Connection')+';'
                )    
        
        return conn
   
    
    #----------------------------------------------------------------#
    #Hàm này thực hiện truy vấn cơ sở dữ  liệu
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
    