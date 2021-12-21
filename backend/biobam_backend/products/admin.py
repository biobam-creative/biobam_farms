from django.contrib import admin
from . models import Products, Cart, CartProduct

admin.site.register(Products),
admin.site.register(Cart),
admin.site.register(CartProduct)

# Register your models here.
