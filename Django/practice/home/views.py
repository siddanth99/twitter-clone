from django.shortcuts import render
from .models import User
from django.utils import timezone
from django.shortcuts import render
from rest_framework import viewsets
from . models import *
from rest_framework.response import Response
from . serializer import *
# from .serializer import PostSerializer
# from .models import Post
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
from django.conf import settings
import os

class Test(viewsets.ModelViewSet):
    def get(self, request):
        # Construct the full path to the image file
        image_name = request.query_params.get('image')
        image_name = image_name.replace("/media/Images/", "")
        image_name = image_name.replace("C:/fakepath", "")
        print(image_name, "--")
        image_path = os.path.join(settings.MEDIA_ROOT, image_name)
        image_path = image_path.replace("\\", "/")
        # Check if the image file exists
        if not os.path.exists(image_path):
            return HttpResponse(image_path, status=404)

        # Open the image file and read its contents


        return HttpResponse(image_path)

    def image_view(request, image_name): 
        image_path = os.path.join(settings.MEDIA_ROOT, image_name) 
        with open(image_path, 'rb') as f: 
            return HttpResponse(f.read(), content_type='image/jpeg')



# Create your views here.

# def display(request):
#     return User.text

class ReactView(viewsets.ModelViewSet):

    # parser_classes = (MultiPartParser, FormParser)
    serializer_class = ReactSerializer
    queryset = User.objects.all()
    def get(self, request):
        # text = [ {"text": detail.text} 
        # for detail in User.objects.all()]
        # text.reverse()

        queryset = User.objects.all().order_by('-timestamp')

        serializer = ReactSerializer(queryset,many=True)
        return Response(serializer.data)

    def create(self, request):
  
        serializer = self.serializer_class(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return  Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response('Bad Request', status=status.HTTP_400_BAD_REQUEST)
