from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html', {})

def letters(request):
    return render(request, 'letters.html', {})

def jmorrisevans(request):
    return render(request, 'jme.html', {})
