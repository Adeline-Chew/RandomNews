from django.urls import path
from . import views

urlpatterns = [
    path('hot', views.LoadHotArticles, name='article-hot'),
    path('tech', views.LoadTechArticles, name='article-tech'),
    path('entertainment', views.LoadEntertainmentArticles, name='article-entertainment')
]

