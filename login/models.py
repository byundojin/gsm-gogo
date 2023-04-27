from django.db import models
from django.contrib.auth.models import AbstractBaseUser
# Create your models here.
class GoUser(AbstractBaseUser):
    id = models.CharField(primary_key=True, max_length=6)
    password = models.CharField(max_length=20)
    name = models.CharField(max_length=4)
    studentnumber = models.IntegerField()
    point = models.IntegerField()

    def __str__(self) -> str:
        return self.id
    

