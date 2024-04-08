# Generated by Django 4.2.11 on 2024-04-08 00:14

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nomadAdvisor', '0002_city_image_alter_review_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='city',
            name='gallery',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(default=''), default='', size=None),
            preserve_default=False,
        ),
    ]
