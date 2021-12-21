from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from products.models import Cart

from django.db import IntegrityError

import random
import string


class SignupView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        username = data['username']
        email = data['email']
        password = data['password']
        password2 = data['password2'] 

        if password == password2:
            if User.objects.filter(email=email).exists():
                return Response({'error':'E-mail already exist'})
            else:
                if User.objects.filter(username=username).exists():
                    return Response({'error':'Username already exist'})
                else:
                    if len(password) < 6:
                        return Response({'error':'Password is too short'})
                    else:
                        user = User.objects.create_user(email=email, password=password, username=username)
                        user.save()
                        try:
                            code_characters = string.ascii_letters + string.digits
                            code = ''.join((random.choice(code_characters) for i in range(20)))
                            cart = Cart.objects.create(user=user, cart_number=code)
                            cart.save
                            return Response({'success':'User created sucessfully'})
                        except IntegrityError:
                            code_characters = string.ascii_letters + string.digits
                            code = ''.join((random.choice(code_characters) for i in range(20)))
                            cart = Cart.objects.create(user=user, cart_number=code)
                            cart.save
                            return Response({'success':'User created sucessfully'})

        else:
            return Response({'error':'Password do not match'})
