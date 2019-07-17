from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html', {})

def letters(request):
    return render(request, 'letters.html', {})

def jmorrisevans(request):
    return render(request, 'jme.html', {})

#def health(request):
#    return render(request, 'language_of_health.html', {})
#def textual_analysis(request):
#    return render(request, 'textual_analysis.html', {})

#def test(request):
#    return render(request, 'test_fc.html', {})
