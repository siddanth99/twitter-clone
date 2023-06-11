from .models import User
from django.contrib import admin
from django.urls import path, include
from home.views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [

	path('wel/', ReactView.as_view({'get': 'get'}), name="something"),
	path('create/', ReactView.as_view({'post': 'create'})),
	path('get_image/', Test.as_view({'get': 'get'}), name='get_image')	
]
urlpatterns += static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)
# +static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
