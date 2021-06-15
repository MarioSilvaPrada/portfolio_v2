from django.db import models


class Talk(models.Model):
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    date = models.DateField()
    link = models.URLField(max_length=128)
