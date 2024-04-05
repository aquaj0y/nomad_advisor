from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns =[
    path('cities/', views.CityList.as_view(), name='city_list'),
    path('cities/<int:pk>/', views.CityDetail.as_view(), name='city_detail'),
    path('review/', views.ReviewList.as_view(), name='review_list'),
    path('review/<int:pk>', views.ReviewDetail.as_view(), name='review_detail')
]
