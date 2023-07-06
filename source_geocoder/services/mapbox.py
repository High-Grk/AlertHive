import requests
import os
from dotenv import load_dotenv

load_dotenv()

def geocode_address(address):
    mapbox_access_token = os.environ.get('MAPBOX_ACCESS_TOKEN')

    if not mapbox_access_token:
        return None

    url = f"https://api.mapbox.com/geocoding/v5/mapbox.places/{address}.json"
    params = {
        'access_token': mapbox_access_token,
        'limit': 1,
        'proximity': '-72.0,-38.5',
        'country': 'CL',
        'region': 'La Araucanía'
    }

    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        features = data.get('features')

        if features:
            first_result = features[0]
            geometry = first_result.get('geometry')

            if geometry:
                coordinates = geometry.get('coordinates')
                longitude, latitude = coordinates

                return {
                    'latitude': latitude,
                    'longitude': longitude
                }

    except requests.exceptions.RequestException as e:
        return None

    return None
