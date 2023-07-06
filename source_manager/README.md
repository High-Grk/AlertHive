# Source Manager

Microservicio de extracción de datos mediante la API de Twitter

## Tecnologías utilizadas

- Python
- Flask
- Tweepy

## Requisitos previos

- Python 3.x instalado en tu sistema.

## Configuración del entorno virtual

1. Clona el repositorio del proyecto

2. Crea un .env con variables de la API de Twitter
```
CONSUMER_KEY=
CONSUMER_SECRET=
ACCESS_TOKEN=
ACCESS_TOKEN_SECRET=
```
3. Crea un entorno virtual
```
python -m venv venv
```
4. Activa el entorno virtual
```
# En Windows
venv\Scripts\activate

# En macOS/Linux
source venv/bin/activate
```
5. Instala las dependencias
```
pip install -r requirements.txt
```
6. Corre el proyecto
```
python app.py
```