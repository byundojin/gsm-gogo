# Generated by Django 4.2 on 2023-04-26 04:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="clas",
            field=models.IntegerField(default=""),
        ),
        migrations.AddField(
            model_name="user",
            name="grade",
            field=models.IntegerField(default=""),
        ),
        migrations.AddField(
            model_name="user",
            name="name",
            field=models.CharField(default="", max_length=10),
        ),
        migrations.AddField(
            model_name="user",
            name="no",
            field=models.IntegerField(default=""),
        ),
    ]