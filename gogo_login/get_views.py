from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import *

class _User(APIView):
    def post(self, request):
        print('===========================')
        print("get user")
        serializer = GetUserIdSerializer(data=request.data)
        if serializer.is_valid():
            print('serializer')
            print(serializer)
            try:
                user = User.objects.get(email=serializer.data["id"]+"@gsm.hs.kr")
                print(user)
                print('HTTP_200_OK')
                return Response(UserSerializer(user).data, status=status.HTTP_200_OK)
            except:
                print('HTTP_404_NOT_FOUND')
                return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            print('HTTP_400_BAD_REQUEST')
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
class _Game(APIView):
    def post(self, request):
        print('===========================')
        print("get game")
        serializer = GetGamesIdsSerializer(data=request.data)
        if serializer.is_valid():
            print('serializer')
            print(serializer)
            result = []
            for i in serializer.data['ids'].split('/'):
                try:
                    game = Game.objects.get(id=int(i))
                    print('-----------------------------------')
                    print(game)
                    print('-----------------------------------')
                    print()
                    result.append(GameSerializer(game).data)
                except:
                    print(f'id : {i} is not found')
            return Response(result ,status=status.HTTP_200_OK)
        else:
            print('HTTP_400_BAD_REQUEST')
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
class UserList(APIView):
    def get(self, request):
        print('===========================')
        print("user list")
        result = []
        print(User.objects.order_by('-point'))
        for i in User.objects.order_by('-point'):
            result.append(UserSerializer(i).data)
        return Response(result, status=status.HTTP_200_OK)