from django.db import models
from django.utils import timezone
from django.utils.timesince import timesince

# Create your models here.

class User(models.Model):
    username=models.CharField(max_length=50)
    text = models.CharField(max_length=1000)
    timestamp=models.DateTimeField(auto_now_add=True)
    image=models.CharField(max_length=1000)


class LoginUser(models.Model):
    username= models.CharField(max_length=100)
    email= models.CharField(max_length=100)
