# Generated by Django 3.2.6 on 2021-08-11 03:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=500)),
                ('link', models.URLField(null=True)),
                ('description', models.TextField(default='')),
                ('content', models.TextField(max_length=500, null=True)),
                ('image_url', models.URLField()),
            ],
        ),
    ]
