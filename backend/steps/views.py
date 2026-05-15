from rest_framework import viewsets
from .serializer import FirstStepsSerializer
from .models import FirstSteps


class FirstStepsViewSet(viewsets.ModelViewSet):
    serializer_class = FirstStepsSerializer
    queryset = FirstSteps.objects.all()