# Generated by Django 4.1.7 on 2023-04-02 06:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='age',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='user',
            name='mob',
            field=models.PositiveIntegerField(),
        ),
    ]