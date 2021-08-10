# Generated by Django 3.2.6 on 2021-08-10 21:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news_api', '0004_alter_news_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='description',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='news',
            name='image_url',
            field=models.URLField(default=404),
            preserve_default=False,
        ),
    ]