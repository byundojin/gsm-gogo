from django.urls import path

from . import views

app_name = 'gogo_login'

urlpatterns = [
    path("signup/", views.signup.as_view()),
    path("login/", views.login.as_view()),
    path('email_auth/<str:hash>/', views.email_auth)
]