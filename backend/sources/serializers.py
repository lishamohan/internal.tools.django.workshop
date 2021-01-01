from rest_framework import serializers
from .models import Source

class SourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Source
        fields = ['name', 'org', 'phone_nums', 'emails', 'notes', 'id']