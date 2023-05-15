from django.urls import path

from . import get_views

urlpatterns = [
    path('user', get_views._User.as_view()),
    path('game', get_views._Game.as_view()),
    path('user_list', get_views.UserList.as_view()),
]