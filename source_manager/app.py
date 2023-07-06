from flask import Flask
from blueprints.tweets import tweets_bp

app = Flask(__name__)

# Registra el blueprint de tweets
app.register_blueprint(tweets_bp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True,threaded=True)