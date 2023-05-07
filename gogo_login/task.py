from celery import shared_task
from django.core.mail import EmailMessage


@shared_task
def send_email_task(name, email, link):
    send_email = EmailMessage(
                'gsm gogo 계정인증', #이메일 제목
                f'{name}님 안녕하십니까. gsm gogo를 {email} 계정으로 이용하시기 위해 아래 링크를 클릭해 주세요.\n{link}', #내용
                to=[email], #받는 이메일
                )
    send_email.send()