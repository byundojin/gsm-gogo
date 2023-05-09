from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import GetUserSerializer, CallStatusSerializer, UserSerializer, MinigameSerializer, GameUserSerializer
from django.http import HttpResponse
from .models import User, CallStatus, Game
from rest_framework.authtoken.models import Token
from django.core.mail import EmailMessage
from django.contrib.auth.hashers import make_password, check_password
from random import randint
import hashlib
from .task import send_mail


class minigame_page(APIView):
    def post(self, request):
        print("//////////////////////")
        print("minigame")
        serializer = MinigameSerializer(data=request.data)
        print('serializer')
        print("----------------------")
        print(serializer)
        print("----------------------")
        if serializer.is_valid():
            try:
                user = User.objects.get(email=serializer.data["id"]+"@gsm.hs.kr")
                print('user')
                print("----------------------")
                print(user)
                print('point :', user.point)
                print('minigame_count :', user.minigame_count)
                print("----------------------")
                if user.minigame_count > 0:
                    if serializer.data['is_win']:
                        print("win")
                        user.point += int(serializer.data['bet_point'])
                    else:
                        print("lose")
                        user.point -= int(serializer.data['bet_point'])
                    user.minigame_count -= 1
                    print('point :', user.point)
                    print('minigame_count :', user.minigame_count)
                    user.save()
                    print("HTTP_200_OK")
                    return Response(UserSerializer(user).data,status=status.HTTP_200_OK)
                print("user have not chance | minigame_count :", user.minigame_count)
                print("HTTP_202_ACCEPTED")
                return Response(status=status.HTTP_202_ACCEPTED)
            except:
                return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class bet_page(APIView):
    def post(self, request, game):
        print("//////////////////////")
        print("game")
        serializer = GameUserSerializer(data=request.data)
        print('serializer')
        print("----------------------")
        print(serializer)
        print("----------------------")
        if serializer.is_valid():
            try:
                user = User.objects.get(email=serializer.data["id"]+"@gsm.hs.kr")
                print('user')
                print("----------------------")
                print(user)
                print('point :', user.point)
                print("----------------------")
                print(serializer.data.keys())
                game = Game.objects.get(id=game)
                print('game')
                print("----------------------")
                print(game)
                print("----------------------")
                if serializer.data["id"] in game.email_list():
                    print("email duplication")
                    print("HTTP_202_ACCEPTED")
                    return Response(status=status.HTTP_202_ACCEPTED)
                user_info = f",{serializer.data['id']}/{'{:0>4}'.format(serializer.data['bet_point'])}/{serializer.data['bet_team']}"
                game.user_info += user_info
                game.save()
                return Response(status=status.HTTP_200_OK)
            except:
                return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_400_BAD_REQUEST)