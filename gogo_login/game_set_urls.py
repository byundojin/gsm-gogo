from django.urls import path

from . import game_set_views

urlpatterns = [
    path('email_list/<int:gameno>', game_set_views._list),
    path('calculate_game/<int:gameno>', game_set_views.calculate),
]