from .models import GoUser
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = GoUser
        fields = ('id', 'password', 'name', 'studentnumber', 'point')