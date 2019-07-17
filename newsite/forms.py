# forms will go here



class FlatpageForm(FlatpageFormOld):
    content = forms.CharField(widget=CKEditorWidget())
#    content = forms.CharField(widget=CKEditorUploadingWidget())
    class Meta:
        model = FlatPage # this is not automatically inherited from FlatpageFormOld
        fields = '__all__'