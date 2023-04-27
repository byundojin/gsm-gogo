from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import GoUserSerializer
from rest_framework.response import Response
from rest_framework import status

class signup(APIView):
    def post(self, request):
        serializer = GoUserSerializer(data=request.data)
        if serializer.is_valid():
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    

