from rest_framework import serializers
from .models import *

class GetUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = GetUser
        fields = '__all__'

class CallStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = CallStatus
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class MinigameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Minigame
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class GameUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameUser
        fields = '__all__'

class GetUserIdSerializer(serializers.ModelSerializer):
    class Meta:
        model = GetUserId
        fields = '__all__'

class GetGamesIdsSerializer(serializers.ModelSerializer):
    class Meta:
        model = GetGameIds
        fields = '__all__'

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'

