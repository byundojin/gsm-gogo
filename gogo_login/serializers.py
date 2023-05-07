from rest_framework import serializers
from .models import GetUser, CallStatus

class GetUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = GetUser
        fields = '__all__'

class CallStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = CallStatus
        fields = '__all__'