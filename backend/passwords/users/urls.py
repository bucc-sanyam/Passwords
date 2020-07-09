from django.urls import path
from . import views

urlpatterns = [
    path('', views.addUserDetails, name='add-user'),
]
