from flask import Blueprint, request, jsonify
from services.db import guardar_datos

datos_bp = Blueprint("datos", __name__)


@datos_bp.route("/direccion", methods=["POST"])
def guardar_direccion():
    datos = request.get_json()
    id = datos.get("id")
    latitude = datos.get("latitude")
    longitude = datos.get("longitude")

    guardar_datos({"id": id, "latitude": latitude, "longitude": longitude})

    return "Datos guardados correctamente"


@datos_bp.route("/guardar", methods=["POST"])
def guardar_datos_manual():
    datos = request.get_json()
    id = datos.get("id")
    latitude = datos.get("latitude")
    longitude = datos.get("longitude")
    code = datos.get('code')
    text = datos.get('text')
    category = datos.get('category')

    guardar_datos({"id": id, "latitude": latitude, "longitude": longitude, "code": code, "text": text, "category": category})

    return jsonify({"message": "Datos guardados correctamente"})
