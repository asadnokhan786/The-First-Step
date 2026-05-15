from django.urls import path, include
from rest_framework import routers
from .views import FirstStepsViewSet


router = routers.DefaultRouter()
router.register(r"first-steps", FirstStepsViewSet)
urlpatterns = [
    path("", include(router.urls)), 
]