from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import GetUserSerializer, UserSerializer
from django.http import HttpResponse
from .models import User, CallStatus, HashUser
from rest_framework.authtoken.models import Token
from django.core.mail import EmailMessage
from django.contrib.auth.hashers import make_password, check_password
from random import randint
import hashlib
from .task import send_mail

class signup(APIView):
    def post(self, request):
        print("////////////////////////////////////")
        print("sign up")
        serializer = GetUserSerializer(data=request.data)
        print('serializer')
        print("----------------------")
        print(serializer)
        print("----------------------")
        if serializer.is_valid():
            try:
                User.objects.get(email=serializer.data["id"]+"@gsm.hs.kr")
                print("email duplication")
                print("HTTP_202_ACCEPTED")
                return Response(status=status.HTTP_202_ACCEPTED)
            except:
                print("well")
                print("----------------------")
                student = serializer.data["student"]
                student = student.split('/')
                student_number = student[0]
                print('student_number :',student_number)
                name = student[1]
                print('name :',name)
                email = serializer.data["id"] + "@gsm.hs.kr"
                print('email :',email)
                password = serializer.data["password"]
                print('password :',password)
                print("----------------------")
                hash_object = hashlib.sha256(email.encode())
                hex_dig = hash_object.hexdigest()
                print('hash :',hex_dig)
                user = HashUser(email=email,password=password,name=name,student_number=student_number,hash=hex_dig)
                user.save()
                link = f'http://127.0.0.1:8000/acounts/email_auth/{hex_dig}'
                print('link :',link)
                send_mail(name, email, link)
                print('HTTP_200_OK')
                return Response(status=status.HTTP_200_OK)
        print("HTTP_400_BAD_REQUEST")
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
class login(APIView):
    def post(self, request):
        print("////////////////////////////////////")
        print("login")
        serializer = GetUserSerializer(data=request.data)
        print('serializer')
        print("----------------------")
        print(serializer)
        print("----------------------")
        if serializer.is_valid():
            try:
                user = User.objects.get(email=serializer.data["id"]+"@gsm.hs.kr")
                print('user')
                print("----------------------")
                print(user)
                print("----------------------")
                if (user.password == serializer.data['password']):
                    print("login success")
                    print("HTTP_200_OK")
                    return Response(UserSerializer(user).data,status=status.HTTP_200_OK)
                else:
                    print("password not same")
                    print("HTTP_202_ACCEPTED")
                    return Response(status=status.HTTP_202_ACCEPTED)
            except:
                print("not found email")
                print("HTTP_404_NOT_FOUND")
                return Response(status=status.HTTP_404_NOT_FOUND)
        print("HTTP_400_BAD_REQUEST")
        return Response(status=status.HTTP_400_BAD_REQUEST)

def email_auth(request, hash):
    print("////////////////////////////////////")
    print("email_auth")
    try:
        print("hash :",hash)
        token_user = HashUser.objects.get(hash=hash)
        print("create email")
        print("----------------------")
        print(token_user)
        print(token_user.email)
        print(token_user.name)
        print(token_user.student_number)
        print(token_user.password)
        print("----------------------")
        try:
            User.objects.get(email=token_user.email)
            token_user.delete()
            print("email duplication")
            return HttpResponse("이미 등록된 email")
        except:
            user = User(email=token_user.email,name=token_user.name,student_number=token_user.student_number,password=token_user.password)
            print("create email")
            print("----------------------")
            print(user)
            print("----------------------")
            user.save()
            token_user.delete()
            return HttpResponse("성공")
    except:
        print("HTTP_400_BAD_REQUEST")
        return HttpResponse("실패")