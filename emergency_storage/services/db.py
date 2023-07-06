import pymysql
from sqlalchemy import create_engine, Column, Float, BigInteger, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm.exc import NoResultFound
import os
from dotenv import load_dotenv

load_dotenv()

engine = create_engine(
    f"mysql+pymysql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}",
    connect_args={
        'ssl': {
            'ca': '/etc/ssl/certs/ca-certificates.crt'
        }
    }
)
Session = sessionmaker(bind=engine)
Base = declarative_base()

class Emergencies(Base):
    __tablename__ = "emergencies"

    id = Column(BigInteger, primary_key=True, unique=True)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    full_text = Column(String(280), nullable=False)
    emergency_code = Column(String(30), nullable=True)
    category = Column(String(280), nullable=True)

def crear_tablas():
    Base.metadata.create_all(engine)
    print("Tablas creadas correctamente")

def guardar_datos(data):
    try:
        session = Session()

        for item in data:
            id = item.get("id")
            latitude = item.get("address").get("latitude")
            longitude = item.get("address").get("longitude")
            code = item.get('code')
            text = item.get('text')
            category = item.get('category')

            # Revisa si el id ya existe en session, lo agrega si no existe
            try:
                session.query(Emergencies).filter(Emergencies.id == id).one()
            except NoResultFound:
                emergency_record = Emergencies(id=id, latitude=latitude, longitude=longitude, full_text=text, emergency_code=code, category=category)
                session.add(emergency_record)

        session.commit()
        session.close()
        print("Datos guardados correctamente")
    except Exception as error:
        print("Error al guardar los datos:", error)
