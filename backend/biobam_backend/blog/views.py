from . models import Blog, Category, Comment
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import permissions
from . serializers import BlogSerializer

class BlogAdd(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = request.data
        serializer = BlogSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)


class Blogs(ListAPIView):
    permission_classes = (permissions.AllowAny,)

    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
