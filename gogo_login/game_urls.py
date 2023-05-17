from django.urls import path

from . import game_views

urlpatterns = [
    path('calculate_game/<int:gameno>', game_views.calculate),
    path('create', game_views.create),
    path('rate/<int:rate>', game_views.rate),
]