
from django.shortcuts import render
import Django_Dash_app.dashplotly.dashboard_app

# Create your views here.
def text_analysis(request):
        return render(request, "morris_app.html")
