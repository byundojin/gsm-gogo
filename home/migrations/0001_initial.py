# Generated by Django 4.2 on 2023-04-25 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.CharField(max_length=6, primary_key=True, serialize=False),
                ),
                ("password", models.CharField(max_length=20)),
            ],
        ),
    ]
