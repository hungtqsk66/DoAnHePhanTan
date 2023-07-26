#Singleton pattern
import pyodbc
import os
from dotenv import load_dotenv

#Class database này dùng để thực hiện truy vấn CSDL SQL Server

class Database:
    def __init__(self) -> None:
        load_dotenv()
        self.conn = pyodbc.connect(
                    'Driver={'+os.getenv('Driver')+'};'
                    'Server='+os.getenv('Server')+';'
                    'Database='+os.getenv('Database')+';'
                    'Trusted_Connection='+os.getenv('Trusted_Connection')+';'
                    )
    #----------------------------------------------------------------#
        
    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(Database, cls).__new__(cls)
        return cls.instance
    
    #----------------------------------------------------------------#
    #Hàm này thực hiện lấy object cursor nếu mình muốn thực hiện các thao tác với nó
    
    def getCursor(self):
        return self.conn.cursor()
    
    #----------------------------------------------------------------#
    #Hàm này thực hiện truy vấn cơ sở dữ  liệu và return object cursor để thực hiện việc tiếp theo khi cần
    def executeQuery(self, query):
        cursor = self.getCursor()
        cursor.execute(query)
        return cursor
    