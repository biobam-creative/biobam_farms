from . models import Products
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import permissions
from . serializers import ProductSerializer

class ProductUpload(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = request.data
        serializer = ProductSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)


class ProductList(ListAPIView):
    permission_classes = (permissions.AllowAny,)

    queryset = Products.objects.all()
    serializer_class = ProductSerializer
