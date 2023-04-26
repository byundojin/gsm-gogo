from django.urls import path

from . import views

app_name = 'login'

urlpatterns = [
    path("signup/", views.signup.as_view)
]