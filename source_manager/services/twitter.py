import tweepy
import unicodedata
import os
from dotenv import load_dotenv
import re
import html

load_dotenv()

consumer_key = os.getenv('CONSUMER_KEY')
consumer_secret = os.getenv('CONSUMER_SECRET')
access_token = os.getenv('ACCESS_TOKEN')
access_token_secret = os.getenv('ACCESS_TOKEN_SECRET')

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

emergency_codes = {
    "10-0": "Llamado estructural",
    "10-1": "Fuego en vehículo",
    "10-2": "Llamado de pastizales/Forestal",
    "10-3": "Salvamento de personas",
    "10-4": "Rescate Vehicular",
    "10-5": "Incidente Hazmat",
    "10-6": "Emanación de gas",
    "10-7": "Llamado eléctrico",
    "10-8": "Llamado no clasificado",
    "10-9": "Llamado a otros servicios. No emergencia",
    "10-10": "Llamado a remoción de escombros o rebrote",
    "10-11": "Llamado a servicio áereo",
    "10-12": "Llamado a apoyar a otros Cuerpos de Bomberos",
    "10-13": "Atentado terrorista",
    "10-14": "Avión que cayó o impactó estructura",
    "10-15": "Simulacro",
    "10-16": "Emergencia en túnel",
    "10-17": "Emergencia en Metro de Santiago",
}

def get_latest_tweets():
    tweets = tweepy.Cursor(api.user_timeline, screen_name='bomberostemuco', tweet_mode='extended').items(15)
    filtered_tweets = []
    for tweet in tweets:
        tweet_id = tweet.id
        tweet_text = html.unescape(tweet.full_text)
        filtered_tweets.append({ "id": tweet_id, "text": tweet_text })

    return filtered_tweets

def extract_address(tweet_text):
    start_index = tweet_text.find(') en') + 5
    end_index = tweet_text.find(', sale')

    if start_index != -1 and end_index != -1:
        address = tweet_text[start_index:end_index].strip()
        if "&" in address:
            address = address.replace("&", "con")  # Reemplazar "&amp;" por "con"
        return html.unescape(address)

    return None

def extract_codigo_accidente(tweet_text):
    match = re.search(r'#Emergencia:\s+(\S+)\s+\(', tweet_text)
    if match:
        codigo_accidente = match.group(1)
        return codigo_accidente

    return None

def categorize_emergency(emergency):
    code = '-'.join(emergency.split('-')[:2])
    return emergency_codes.get(code, "Código de emergencia desconocido")
