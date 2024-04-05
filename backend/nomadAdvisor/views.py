from django.shortcuts import render

# Create your views here.
# views.py

from rest_framework import generics
from .serializers import CitySerializer, UserSerializer, ReviewSerializer, ReviewDetailsSerializer
from .models import City, User, Review

class CityList(generics.ListCreateAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer

# class CityReviewList(generics.ListCreateAPIView):
#     queryset = City.objects.review
#     serializer_class = CitySerializer

class CityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer
  
class ReviewList(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class ReviewDetail(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewDetailsSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

