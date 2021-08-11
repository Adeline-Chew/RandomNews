import requests
from .models import News

from rest_framework.decorators import api_view
from rest_framework.response import Response
from random import randrange
from news_api.serializers import NewsSerializer

API_KEYS = 'pub_800315c16ffc973af8753eaf7f417575be2'

# Create your views here.


@api_view(['GET'])
def LoadHotArticles(request):
    rand_page = randrange(50)
    url = f'https://newsdata.io/api/1/news?apikey={API_KEYS}&language=en&page={rand_page}'
    return LoadArticles(url)


@api_view(['GET'])
def LoadTechArticles(request):
    rand_page = randrange(50)
    url = f'https://newsdata.io/api/1/news?apikey={API_KEYS}&language=en&page={rand_page}&category=technology'
    return LoadArticles(url)


@api_view(['GET'])
def LoadEntertainmentArticles(request):
    rand_page = randrange(50)
    url = f'https://newsdata.io/api/1/news?apikey={API_KEYS}&language=en&page={rand_page}&category=entertainment'
    return LoadArticles(url)


def LoadArticles(url):
    response = requests.get(url)
    data = response.json()['results']
    i = 0
    # Save current page articles into database
    while i < len(data):
        article = data[i]
        serializers = NewsSerializer(data=article)
        if serializers.is_valid() \
                and article["description"] is not None:
            print("Serializers OK!")
            serializers.save()
        i += 1
    # Return current articles inside database
    articles = News.objects.all()
    serializers = NewsSerializer(articles, many=True)
    return Response(serializers.data)