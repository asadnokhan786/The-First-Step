from rest_framework import serializers
from .models import FirstSteps

class FirstStepsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FirstSteps
        fields = ["steps_taken", "first_step_date"] 