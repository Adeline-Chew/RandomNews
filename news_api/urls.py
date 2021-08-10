from django.urls import path
from . import views

urlpatterns = [
#     path('', views.ArticleView, name='article-view'),
    path('view', views.LoadArticles, name='article-load')
]

