from django.http import JsonResponse
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from .models import WebsiteName, WebsiteUserDetail
import json

from .serializers import WebsiteSerializer

from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)


class passwordList(GenericAPIView):
    def get(self, request, *args, **kwargs):
        email = request.query_params['email']
        name_count = WebsiteUserDetail.objects.filter(email=email).count()
        response = False if name_count == 0 else True
        return JsonResponse(response, content_type='application/json', safe=False)


class WebsiteCheck(GenericAPIView):
    def get(self, request, *args, **kwargs):
        website = request.query_params['website']
        userID = request.query_params['userID']
        name_count = WebsiteName.objects.filter(website=website, userID=userID).count()
        response = False if name_count == 0 else True
        return JsonResponse(response, content_type='application/json', safe=False)


class WebsiteListView(ListAPIView):
    queryset = WebsiteName.objects.all()
    serializer_class = WebsiteSerializer


class WebsiteDetailView(RetrieveAPIView):
    queryset = WebsiteName.objects.all()
    serializer_class = WebsiteSerializer
    lookup_field = 'website'


class WebsiteCreateView(CreateAPIView):
    queryset = WebsiteName.objects.all()
    serializer_class = WebsiteSerializer


class WebsiteUpdateView(UpdateAPIView):
    queryset = WebsiteName.objects.all()
    serializer_class = WebsiteSerializer


class WebsiteDeleteView(DestroyAPIView):
    queryset = WebsiteName.objects.all()
    serializer_class = WebsiteSerializer
    permission_classes = (permissions.IsAuthenticated, )

