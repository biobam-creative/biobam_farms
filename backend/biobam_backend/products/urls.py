from django.urls import path
from . import views

app_name = 'products'

urlpatterns = [
    path('product_add', views.ProductUpload.as_view(), name='product_add'),
    path('product_list', views.ProductList.as_view(), name='products'),

]
