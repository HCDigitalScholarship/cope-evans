from django.contrib import admin
from django.contrib.flatpages.models import FlatPage

#Note: We are renaming the original Admin and Form as we import them!
from django.contrib.flatpages.admin import FlatPageAdmin as FlatPageAdminOld
from django.contrib.flatpages.admin import FlatpageForm as FlatpageFormOld
from ckeditor.widgets import CKEditorWidget
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django import forms

class FlatpageForm(FlatpageFormOld):
    content = forms.CharField(widget=CKEditorWidget())
#    content = forms.CharField(widget=CKEditorUploadingWidget())
    class Meta:
        model = FlatPage # this is not automatically inherited from FlatpageFormOld
        fields = '__all__'

#content = forms.CharField(widget=CKEditorUploadingWidget())

class FlatPageAdmin(FlatPageAdminOld):
    form = FlatpageForm

#We have to unregister the normal admin, and then reregister ours
admin.site.unregister(FlatPage)
admin.site.register(FlatPage, FlatPageAdmin)



