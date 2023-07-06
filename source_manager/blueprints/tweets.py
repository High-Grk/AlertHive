import re
from unidecode import unidecode
from flask import Blueprint, jsonify
from services.twitter import categorize_emergency, get_latest_tweets, extract_address, extract_codigo_accidente
from models.emergency import Emergency

tweets_bp = Blueprint('tweets', __name__)

@tweets_bp.route('/tweets', methods=['GET'])
def get_tweets():
    tweets = get_latest_tweets()

    tweet_objects = []
    for tweet in tweets:
        id = tweet.get('id')
        text = tweet.get('text')
        emergency_code = extract_codigo_accidente(text)
        address = extract_address(text)
        if emergency_code and address:
            category = categorize_emergency(emergency_code)
            tweet_obj = Emergency(id=id, code=emergency_code, address=address, text=text, category=category)
            tweet_objects.append(tweet_obj.to_dict())

    return jsonify(tweet_objects)
