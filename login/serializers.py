from rest_framework import serializers
from django.db import models
from .models import GoUser



class GoUserSerializer(serializers.ModelSerializer):
    student = serializers.SerializerMethodField()

    def get_student(self, object):
        return self.student
        

    class Meta:
        model = GoUser
        fields = ('id','password','student')