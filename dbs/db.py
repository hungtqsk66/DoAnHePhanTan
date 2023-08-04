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
    def load_db_configs(self):
        conn =  pyodbc.connect(
                    'Driver={'+config('Driver')+'};'
                    'Server='+config('Server')+';'
                    'Database='+config('Database')+';'
                    'Trusted_Connection='+config('Trusted_Connection')+';'
                )    
        
        return conn
   
    
    #----------------------------------------------------------------#
    #Hàm này thực hiện truy vấn cơ sở dữ  liệu và return object cursor để thực hiện việc tiếp theo khi cần
    def executeQuery(self, query):
        conn = self.load_db_configs()
        cursor = conn.cursor()
        data = cursor.execute(query).fetchall()
        conn.commit()
        conn.close()
        return data
    