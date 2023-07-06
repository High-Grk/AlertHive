# Source Geocoder

Microservicio de geocodificación de datos mediante la API de Mapbox

## Tecnologías utilizadas

- Python
- Flask
- Requests
- Mapbox

## Requisitos previos

- Python 3.x instalado en tu sistema.

## Configuración del entorno virtual

1. Clona el repositorio del proyecto


2. Crea un .env con variables de la API de Twitter
```
MAPBOX_ACCESS_TOKEN=
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