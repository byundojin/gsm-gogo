from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from .serializers import *
from django.http import HttpResponse
from .models import *
from django.contrib.auth.hashers import make_password, check_password


from django.db.models import Max 
    
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

def create(request):
    if Game.objects.count() == 0:
        Game(id=1).save()
        return HttpResponse("well")
    try:
        id = Game.objects.aggregate(id=Max('id'))
        Game(id=id['id']+1).save()
        return HttpResponse("well")
    except:
        return HttpResponse("not well")
        
def rate(request, gameno):
    try:
        print(gameno)
        game = Game.objects.get(id=gameno)
        print(game)
        if game.is_active:
            game.calculate_dividend_rate()
            return HttpResponse("well")
        return HttpResponse("not well")
    except:
        return HttpResponse("not find game")