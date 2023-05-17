from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from django.http import HttpResponse
from .models import *

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
    def post(self, request):
        print("//////////////////////")
        print("bet")
        serializer = GamesSerializer(data=request.data)
        print('serializer')
        print("----------------------")
        print(serializer)
        print("----------------------")
        if serializer.is_valid():
            try:
                user = User.objects.get(email=serializer.data["id"]+"@gsm.hs.kr")
                if user.point >= serializer.data['point_1'] + serializer.data['point_2'] + serializer.data['point_3']:
                    if user.is_vote:
                        user.select_1 = serializer.data['select_1']
                        user.select_2 = serializer.data['select_2']
                        user.select_3 = serializer.data['select_3']
                        user.point_1 = serializer.data['point_1']
                        user.point_2 = serializer.data['point_2']
                        user.point_3 = serializer.data['point_3']
                        for i in range(1, 4):
                            try:
                                game = Game.objects.get(id=i)
                                if game.is_active:
                                    print(user.point)
                                    user.point -= serializer.data[f'point_{i}']
                                    print(user.point)
                                    user_info = f",{serializer.data['id']}/{serializer.data[f'point_{i}']}/{serializer.data[f'select_{i}']}"
                                    print(user_info)
                                    game.user_info += user_info
                                    game.save()
                                    game.calculate_dividend_rate()
                                    print("game save")
                                else:
                                    print("already end game :", i )
                            except:
                                print("not find game :", i )
                        user.is_vote = False
                        user.save()
                        print('user save')
                        return Response(status=status.HTTP_200_OK)
                    else:
                        print("already vote")
                        return Response(status=status.HTTP_202_ACCEPTED)
                else:
                    print("not enought point")
                    return Response(status=status.HTTP_202_ACCEPTED)
            except:
                print("user not find")
                return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            print("bad request")
            return Response(status=status.HTTP_400_BAD_REQUEST)
            



