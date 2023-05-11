from django.urls import path

from . import main_views

urlpatterns = [
    path('minigame/<int:game>', main_views.minigame_page.as_view()),
    path('bet/<int:game>', main_views.bet_page.as_view()),
]