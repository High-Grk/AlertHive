from flask import Blueprint

tweets_bp = Blueprint('tweets', __name__)

from blueprints.tweets import get_tweets

