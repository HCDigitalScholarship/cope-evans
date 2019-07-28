from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html', {})

def letters(request):
    return render(request, 'letters.html', {})

def jmorrisevans(request):
    return render(request, 'jme.html', {})

def family(request):
    return render(request, 'family.html', {})

def familytree(request):
    return render(request, 'familytree.html', {})

def subjectbarchart(request):
        return render(request, 'subjectbarchart.html', {})

def philly(request):
    return render(request, 'philly.html', {})
