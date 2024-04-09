from rest_framework import serializers
from .models import City, Review, User

class UserSerializer(serializers.HyperlinkedModelSerializer):
    # users = serializers.HyperlinkedRelatedField(
    #     view_name='review_detail',
    #     many=True,
    #     read_only=True
    # )
    class Meta:
       model = User
       fields = ('name', 'email', 'password')

class ReviewSerializer(serializers.HyperlinkedModelSerializer):
    # reviews = serializers.HyperlinkedRelatedField(
    #     view_name='review_detail',
    #     many=True,
    #     read_only=True
    # )
    user = serializers.SlugRelatedField(
        many= False,
        read_only = True,
        slug_field = 'name'
    )
    class Meta:
       model = Review
       fields = ('user', 'tags', 'description')

class ReviewDetailsSerializer(serializers.HyperlinkedModelSerializer):
    # reviews = serializers.HyperlinkedRelatedField(
    #     view_name='review_detail',
    #     many=True,
    #     read_only=True
    # )
    user = UserSerializer(
        many= False,
        read_only = True,
    )
    class Meta:
       model = Review
       fields = ('user', 'tags', 'description')



class CitySerializer(serializers.HyperlinkedModelSerializer):
    # cities = serializers.HyperlinkedRelatedField(
    #     view_name='city_detail',
    #     many=True,
    #     read_only=True
    # )
    review = ReviewSerializer(many=True)

    class Meta:
       model = City
       fields = ( 'name', 'country', 'like', 'dislike', 'image', 'review', 'neighborhood')

