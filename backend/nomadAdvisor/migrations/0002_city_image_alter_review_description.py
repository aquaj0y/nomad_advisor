# Generated by Django 4.2.11 on 2024-04-05 11:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nomadAdvisor', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='city',
            name='image',
            field=models.CharField(default=''),
        ),
        migrations.AlterField(
            model_name='review',
            name='description',
            field=models.CharField(blank=True, max_length=1000),
        ),
    ]