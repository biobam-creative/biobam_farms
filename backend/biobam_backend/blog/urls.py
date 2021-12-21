from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('blog_add', views.BlogAdd.as_view(), name='blog_add'),
    path('blogs', views.Blogs.as_view(), name='blogs'),

]