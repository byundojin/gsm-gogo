from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.postgres.fields import ArrayField




class GetUser(models.Model):
    id = models.CharField(_("id"), max_length=6, primary_key=True)
    password = models.CharField(_("password"), max_length=20)
    student = models.CharField(_("student"), max_length=9)

class HashUser(models.Model):
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
    minigame_count = models.IntegerField(default=3)

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'

class CallStatus(models.Model):
    status = models.IntegerField(default=0)

class Minigame(models.Model):
    id = models.CharField(_("id"), max_length=6, primary_key=True)
    bet_point = models.IntegerField(_("bet_point"), default=0)
    is_win = models.BooleanField(_("is_win"), default=False)

class GameUser(models.Model):
    id = models.CharField(_("id"), max_length=6, primary_key=True)
    bet_point = models.IntegerField(_("bet_point"), default=0)
    bet_team = models.IntegerField(_("bet_team"), default=0)

class Game(models.Model):
    id = models.IntegerField(_("id"), primary_key=True)
    win_team = models.IntegerField(_("win_team"), null=True)
    is_active = models.BooleanField(_("is_active"), default=True)
    user_info = models.TextField(_("user_info"), null=True)
    dividend_rate = models.CharField(_("dividend_rate"), max_length=7, null=True)

    def define_user(self):
        user_info = self.user_info
        if user_info[0] == ',':
            user_info = user_info[1:]
        user_info_A = user_info.split(',')
        for i in user_info_A:
            print(i)
            user = i.split('/')
            user_email = user[0]
            user_bet_point = user[1]
            user_bet_team = user[2]
            user_bet_point = int(user_bet_point)
            user_bet_team = int(user_bet_team)
            yield user_email, user_bet_point, user_bet_team
    
    def calculate_dividend_rate(self):
        team_a, team_b = 0
        for email, bet_point, bet_team in self.define_user():
            if bet_team == 1:
                team_a += bet_point
            elif bet_team == 2:
                team_b += bet_point
        self.dividend_rate = f"{round(team_b/team_a, 2)},{round(team_a/team_b, 2)}"

    def calculate_game(self):
        self.calculate_dividend_rate()
        dividend_rate = int(self.dividend_rate.split('/')[self.win_team-1])
        for email, bet_point, bet_team in self.define_user():
            if bet_team == self.win_team:
                try:
                    user = User.objects.get(email=email+"@gsm.hs.kr")
                    user.point += bet_point * dividend_rate + bet_point
                except:
                    print("존재하지 않는 user : ", email)
        self.is_active = False

    def email_list(self):
        result = []
        for email in self.define_user():
            result += email
        return result