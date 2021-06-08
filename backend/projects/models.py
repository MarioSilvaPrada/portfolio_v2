from django.db import models
import uuid
import os

def project_image(instance, filename):
    ext = filename.split('.')[-1]
    filename = f'{uuid.uuid4()}.{ext}'

    return os.path.join('images/', filename)


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    type = models.CharField(
        max_length=10,
        choices=[
            ('Mobile', 'mobile'),
            ('Web', 'web'),
        ]
    )
    image = models.ImageField(null=True, upload_to=project_image)
