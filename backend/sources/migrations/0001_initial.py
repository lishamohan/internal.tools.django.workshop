# Generated by Django 3.0.3 on 2021-01-01 02:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Source',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('org', models.CharField(max_length=300)),
                ('phone_nums', models.CharField(max_length=300)),
                ('emails', models.CharField(max_length=300)),
                ('notes', models.TextField()),
            ],
        ),
    ]
