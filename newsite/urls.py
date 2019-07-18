from django.urls import include
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.urls import include
import newsite.views as mainviews
from django.contrib.flatpages import views
urlpatterns = [
    path('', mainviews.index, name='index'),
    path('letters/', mainviews.letters, name='letters'),
    path('jmorrisevans/', mainviews.jmorrisevans, name = 'jmorrisevans'),
#    path('health/', views.flatpage, {'url': '/health/'}, name='health'),
#    path('bibliography/', views.flatpage, {'url': '/bibliography/'}, name='bibliography'),
#    path('health/', views.flatpage, {'url': '/health/'}, name='health'),
]
