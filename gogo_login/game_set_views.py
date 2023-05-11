from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import GetUserSerializer, UserSerializer
from django.http import HttpResponse
from .models import User, CallStatus, HashUser, Game
from rest_framework.authtoken.models import Token
from django.core.mail import EmailMessage
from django.contrib.auth.hashers import make_password, check_password
from random import randint
import hashlib
from .task import send_mail

def _list(request, gameno):
    try:
        print(gameno)
        game = Game.objects.get(id=gameno)
        print(game)
        result = game.email_list()
        r = ''
        for i in range(5,len(result),6):
            result[i] += '\n'
        return HttpResponse(result)
    except:
        return HttpResponse("not find game")
    
def calculate(request, gameno):
    try:
        print(gameno)
        game = Game.objects.get(id=gameno)
        print(game)
        if game.win_team == 1 or game.win_team == 2:
            if game.is_active:
                game.calculate_game()
                return HttpResponse("well")
        return HttpResponse("not well")
    except:
        return HttpResponse("not find game")

