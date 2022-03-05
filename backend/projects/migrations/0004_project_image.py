# Generated by Django 3.2.6 on 2021-12-23 20:20

from django.db import migrations, models
import projects.models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_remove_project_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='image',
            field=models.ImageField(null=True, upload_to=projects.models.project_image),
        ),
    ]
