from rest_framework import serializers

from websites.models import WebsiteName


class WebsiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebsiteName
        fields = ('id', 'userID', 'website')
