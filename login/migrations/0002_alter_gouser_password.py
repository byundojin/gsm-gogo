# Generated by Django 4.2 on 2023-04-26 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("login", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="gouser",
            name="password",
            field=models.CharField(max_length=20),
        ),
    ]