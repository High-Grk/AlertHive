from flask import Flask, jsonify
import requests
from services.db import crear_tablas, guardar_datos

app = Flask(__name__)

crear_tablas()

@app.route("/guardar", methods=["GET"])
def guardar():
    url = "http://source_geocoder:5001/direccion"
    headers = {
        "Content-Type": "application/json"
    }
    response = requests.get(url, headers=headers)
    print(response.text)
    data = response.json()
    guardar_datos(data)

    return "Datos guardados correctamente"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5002, debug=True, threaded=True)