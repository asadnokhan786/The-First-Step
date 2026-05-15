from django.db import models


class FirstSteps(models.Model):
    steps_taken = models.IntegerField(default=0)
    first_step_date = models.DateTimeField("date stepped")

