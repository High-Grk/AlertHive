# Emergency Storage

Microservicio de almacenamiento de datos geocodificados

## Tecnologías utilizadas

- Python
- Flask
- MySQLAlchemy
- Planetscale

## Requisitos previos

- Python 3.x instalado en tu sistema.
- Crear una base de datos en Postgresql con el nombre de Alerthive.

## Configuración del entorno virtual

1. Clona el repositorio del proyecto

2. Crea un entorno virtual
```
python -m venv venv
```
3. Activa el entorno virtual
```
# En Windows
venv\Scripts\activate

# En macOS/Linux
source venv/bin/activate
```
4. Instala las dependencias
```
pip install -r requirements.txt
```
5. Corre el proyecto
```
python app.py
```