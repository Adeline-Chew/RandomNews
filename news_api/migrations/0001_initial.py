# Generated by Django 3.2.6 on 2021-08-10 16:12

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
                ('author', models.CharField(max_length=100)),
                ('category', models.CharField(choices=[('General', 'general'), ('Business', 'business'), ('Entertainment', 'entertainment'), ('Health', 'health'), ('Science', 'science'), ('Sports', 'sports'), ('Technology', 'technology')], max_length=20)),
                ('liked', models.BooleanField(default=False)),
                ('image', models.ImageField(blank=True, max_length=255, null=True, upload_to='articles')),
                ('description', models.TextField()),
                ('published_at', models.DateField()),
                ('url', models.URLField()),
                ('language', models.CharField(max_length=50)),
                ('country', models.CharField(max_length=50)),
            ],
        ),
    ]
