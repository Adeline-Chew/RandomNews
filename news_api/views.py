from django.shortcuts import render
from newsapi import NewsApiClient
import requests
from .models import News

from rest_framework.decorators import api_view
from rest_framework.response import Response
from random import randrange
from news_api.serializers import NewsSerializer

API_KEYS = 'pub_800315c16ffc973af8753eaf7f417575be2'

# Create your views here.


# @api_view(['POST', 'GET'])
# def ArticleView(request):
#     url = f'https://newsdata.io/api/1/news?apikey={API_KEYS}&language=en&page={rand_page}'
#     response = requests.get(url)
#     data = response.json()['results']
#     rand_num = randrange(len(data))
#     article = data[rand_num]
#     serializers = NewsSerializer(data=article)
#     while True:
#         if serializers.is_valid()\
#                 and article["description"] is not None:
#             print("Serializers OK!")
#             serializers.save()
#             break
#         else:
#             rand_num = randrange(len(data))
#             article = data[rand_num]
#             serializers = NewsSerializer(data=article)
#
#     return Response(serializers.data)


@api_view(['POST', 'GET'])
def LoadArticles(request):
    rand_page = randrange(50)
    url = f'https://newsdata.io/api/1/news?apikey={API_KEYS}&language=en&page={rand_page}'
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

