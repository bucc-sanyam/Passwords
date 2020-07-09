from django.db import models


class UserDetail(models.Model):
    googleAuthID = models.CharField(max_length=200, unique=True)
    firstName = models.CharField(max_length=200)
    lastName = models.CharField(max_length=200)
    gmailID = models.CharField(max_length=200, unique=True)
    phoneNumber = models.IntegerField(unique=True, default=0)
