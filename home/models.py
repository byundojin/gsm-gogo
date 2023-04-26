from django.db import models

class User(models.Model):
    id = models.CharField(max_length=6, primary_key=True)
    password = models.CharField(max_length=20)
    grade = models.IntegerField(default=0)
    clas = models.IntegerField(default=0)
    no = models.IntegerField(default=0)
    name = models.CharField(default='',max_length=10)

    def __str__(self):
        return self.id
