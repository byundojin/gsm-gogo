from django.core.mail import EmailMultiAlternatives
import threading

class EmailThread(threading.Thread):
    def __init__(self, subject, body, from_email, recipient_list, fail_silently, html):
        self.subject = subject
        self.body = body
        self.recipient_list = recipient_list
        self.from_email = from_email
        self.fail_silently = fail_silently
        self.html = html
        threading.Thread.__init__(self)

    def run (self):
        msg = EmailMultiAlternatives(self.subject, self.body, self.from_email, self.recipient_list)
        if self.html:
            msg.attach_alternative(self.html, "text/html")
        msg.send(self.fail_silently)

def send_mail(name, email, link, fail_silently=False, html=None, *args, **kwargs):
    EmailThread('gsm gogo 계정인증', f'{name}님 안녕하십니까. gsm gogo를 {email} 계정으로 이용하시기 위해 아래 링크를 클릭해 주세요.\n{link}', 'gsmgogoisgogo@gmail.com', [email], fail_silently, html).start()