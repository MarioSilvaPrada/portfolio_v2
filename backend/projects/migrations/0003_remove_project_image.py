# Generated by Django 3.2.6 on 2021-12-23 16:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_project_link'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='image',
        ),
    ]