from django.db import models
from django.contrib.auth.models import User


def images_path():
    return os.path.join(settings.LOCAL_FILE_DIR, 'images')

class Products(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(decimal_places=2, max_digits=10)
    image = models.ImageField(upload_to='products/images')
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cart_number = models.CharField(max_length=20, unique=True)
    def __str__(self):
        return str(self.user)

class CartProduct(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.product.name)

