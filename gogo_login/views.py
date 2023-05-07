from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import GetUserSerializer, CallStatusSerializer
from django.http import HttpResponse
from .models import User, CallStatus, TokenUser
from rest_framework.authtoken.models import Token
from django.core.mail import EmailMessage
from django.contrib.auth.hashers import make_password, check_password
from random import randint
import hashlib
from .task import send_mail

class signup(APIView):
    def post(self, request):
        print("////////////////////////////////////")
        print("point a")
        serializer = GetUserSerializer(data=request.data)
        call_status = CallStatus()
        if serializer.is_valid():
            print(serializer.data)
            print(serializer.data["id"])
            a = User.objects.filter(email=serializer.data["id"])
            try:
                call_status.status = 2 # email중복
                User.objects.get(email=serializer.data["id"]+"@gsm.hs.kr")
                print("email duplication")
                print(call_status.status)
                print(serializer.data)
                return Response(CallStatusSerializer(call_status).data, status=status.HTTP_200_OK)
            except:
                call_status.status = 1 # 성공
                print("well")
                print(call_status.status)
                student = serializer.data["student"]
                student = student.split('/')
                student_number = student[0]
                name = student[1]
                print(student_number)
                print(name)

                email = serializer.data["id"] + "@gsm.hs.kr"
                password = serializer.data["password"]
                hash_object = hashlib.sha256(email.encode())
                hex_dig = hash_object.hexdigest()
                print(hex_dig)
                user = TokenUser(email=email,password=password,name=name,student_number=student_number,hash=hex_dig)
                user.save()
                link = f'http://127.0.0.1:8000/acounts/email_auth/{hex_dig}'
                send_mail(name, email, link)
                
                print("what")
                return Response(CallStatusSerializer(call_status).data, status=status.HTTP_200_OK)
        call_status.status = 4 # 실패
        print("not well")
        print(call_status.status)
        return Response(CallStatusSerializer(call_status).data, status=status.HTTP_400_BAD_REQUEST)
    
class login(APIView):
    def post(self, request):
        print("////////////////////////////////////")
        print("point b")
        serializer = GetUserSerializer(data=request.data)
        call_status = CallStatus()
        print(serializer)
        if serializer.is_valid():
            try:
                user = User.objects.get(email=serializer.data["id"]+"@gsm.hs.kr")
                print(user)
                if (user.password == serializer.data['password']):
                    print("well")
                    call_status.status = 1 # 성공
                    print(call_status.status)
                    return Response(CallStatusSerializer(call_status).data, status=status.HTTP_200_OK)
                else:
                    print("password not same")
                    call_status.status = 3 # password 다름
                    print(call_status.status)
                    return Response(CallStatusSerializer(call_status).data, status=status.HTTP_200_OK)
            except:
                print("not found email")
                call_status.status = 2 # email 없음
                print(call_status.status)
                return Response(CallStatusSerializer(call_status).data, status=status.HTTP_200_OK)
        call_status.status = 4 # 실패
        print("not well")
        print(call_status.status)
        return Response(CallStatusSerializer(call_status).data, status=status.HTTP_400_BAD_REQUEST)

def email_auth(request, hash):
    try:
        print(hash)
        token_user = TokenUser.objects.get(hash=hash)
        try:
            User.objects.get(email=token_user.email)
            return HttpResponse("이미 등록된 email")
        except:
            user = User(email=token_user.email,name=token_user.name,student_number=token_user.student_number,password=token_user.password)
            print(user)
            user.save()
            return HttpResponse("성공")
    except:
        return HttpResponse("실패")