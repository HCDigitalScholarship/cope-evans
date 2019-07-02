from django.urls import include
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.urls import include
import newsite.views as views

urlpatterns = [
    path('', views.index, name='index'),
    path('letters/', views.letters, name='letters'),
    path('jmorrisevans/', views.jmorrisevans, name = 'jmorrisevans'),
    path('dash_app/', views.dash_app, name = 'dash_app'),
]
