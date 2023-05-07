from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from rest_framework.authtoken.models import Token




class GetUser(models.Model):
    id = models.CharField(_("id"), max_length=6, primary_key=True)
    password = models.CharField(_("password"), max_length=20)
    student = models.CharField(_("student"), max_length=9)

class TokenUser(models.Model):
    hash = models.TextField(_("hash"))
    email = models.CharField(_("email"), max_length=16, primary_key=True)
    password = models.CharField(_("password"), max_length=20)
    student_number = models.IntegerField(_("student_number"))
    name = models.CharField(_("name"), max_length=4)


class User(AbstractBaseUser):
    email = models.CharField(_("email"), max_length=16, primary_key=True)
    password = models.CharField(_("password"), max_length=20)
    student_number = models.IntegerField(_("student_number"))
    name = models.CharField(_("name"), max_length=4)
    point = models.IntegerField(_("point"), default=1500)

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'

class CallStatus(models.Model):
    status = models.IntegerField(default=0)