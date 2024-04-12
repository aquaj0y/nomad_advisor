from django.contrib import admin

# Register your models here.

from .models import City, Review, User
admin.site.register(City)
admin.site.register(Review)
admin.site.register(User)