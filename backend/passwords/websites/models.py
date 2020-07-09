from django.db import models
from users.models import UserDetail


class WebsiteName(models.Model):
    # userID = models.OneToOneField(UserDetail, on_delete=models.CASCADE)
    userID = models.CharField(max_length=200, null=False, default='')
    website = models.CharField(max_length=200, null=False, default='')


class WebsiteUserDetail(models.Model):
    website = models.OneToOneField(WebsiteName, on_delete=models.CASCADE)
    username = models.CharField(max_length=200)
    email = models.CharField(max_length=200, null=False, default='')
    password = models.CharField(max_length=200, null=False, default='')
