from django.http import JsonResponse
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from .models import UserDetail
import json


class addUserDetails(GenericAPIView):
    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        print(data)
        return Response("Hello, world. You're at the users index.")



