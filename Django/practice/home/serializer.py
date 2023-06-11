from rest_framework import serializers
from . models import User
from datetime import datetime,date


class ReactSerializer(serializers.ModelSerializer):


    username = serializers.CharField(max_length=50)
    text = serializers.CharField(max_length=1000)
    timestamp = serializers.DateTimeField(default=datetime.now())
    image=serializers.CharField(max_length=1000)
    class Meta:
        model = User
        fields = ['username','text','timestamp','image']


