# Generated by Django 4.2.11 on 2024-04-10 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nomadAdvisor', '0002_alter_city_neighborhood'),
    ]

    operations = [
        migrations.AddField(
            model_name='city',
            name='collection',
            field=models.CharField(default='', max_length=50),
        ),
    ]
