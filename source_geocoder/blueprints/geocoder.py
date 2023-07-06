from flask import Blueprint, jsonify, current_app
import requests

from services.mapbox import geocode_address

geocoder_bp = Blueprint('geocoder', __name__)

def handle_request_errors(f):
    def wrapper(*args, **kwargs):
        try:
            return f(*args, **kwargs)
        except requests.exceptions.RequestException as e:
            error_message = {'error': 'Ocurrió un error al obtener los datos de accidentes'}
            return jsonify(error_message), 500
    return wrapper

@geocoder_bp.route('/direccion', methods=['GET'])
@handle_request_errors
def geocode_addresses():
    manager_url = "http://source_manager:5000/tweets"
    response = requests.get(manager_url)
    response.raise_for_status()
    tweets = response.json()

    geocoded_addresses = []
    for tweet in tweets:
        address = tweet.get('address')
        geocoded_address = geocode_address(address)
        id = tweet.get('id')
        code = tweet.get('code')
        text = tweet.get('text')
        category = tweet.get('category')
        if geocoded_address:
            geocoded_addresses.append({ "id": id, "code": code, "text": text, "category": category, "address": geocoded_address })

    return jsonify(geocoded_addresses), 200
