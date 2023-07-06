from flask import Flask
from blueprints.geocoder import geocoder_bp

app = Flask(__name__)

# Registrar los blueprints
app.register_blueprint(geocoder_bp, url_prefix='/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True, threaded=True)
