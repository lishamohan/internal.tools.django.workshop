from django.db import models

class Source(models.Model):
    name = models.CharField(max_length=30)
    org = models.CharField(max_length=300)
    phone_nums = models.CharField(max_length=300)
    emails = models.CharField(max_length=300)
    notes = models.TextField()