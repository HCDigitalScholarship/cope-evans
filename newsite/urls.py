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
    path('family/', mainviews.family, name='family'),
    path('familytree/', mainviews.familytree, name='familytree'),
    path('subjectbarchart/', mainviews.subjectbarchart, name='subjectbarchart'),
    path('philly/', mainviews.philly, name = 'philly'),
    path('politicalcommentary', mainviews.politicalcommentary, name = 'politicalcommentary'),
]

#urlpatterns+= patterns('django.contrib.flatpages.views',
#    path('languageofhealth', 'flatpage', name = 'health'),
    #path('', 'flatpage', name = 'languageofhealth'),
#)
