# models.py
from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.
class City(models.Model):
  name = models.CharField(max_length=100)
  country = models.CharField(max_length=100)
  image = models.CharField(default = '')
  like = models.IntegerField(default = 0)
  dislike = models.IntegerField(default = 0)
  neighborhood = models.CharField(max_length=100)

  def __str__(self):
    return self.name

class Review(models.Model):
  city = models.ForeignKey('City', on_delete = models.CASCADE, related_name='review')
  user = models.ForeignKey('User', on_delete = models.CASCADE, related_name='review')
  tags = ArrayField(models.CharField(max_length=200, blank=False))
  description = models.CharField(max_length=1000, blank=True)

  def __str__(self):
    return self.city.name

class User(models.Model):
  name = models.CharField(max_length=100)
  email = models.CharField(max_length=100)
  password = models.CharField(max_length=18)

  def __str__(self):
    return self.name
