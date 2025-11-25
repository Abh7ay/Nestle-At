from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReviewViewSet, FutureProjectViewSet, IdeaViewSet

router = DefaultRouter()
router.register(r'reviews', ReviewViewSet, basename='review')
router.register(r'future-projects', FutureProjectViewSet, basename='future-project')
router.register(r'ideas', IdeaViewSet, basename='idea')

urlpatterns = [
    path('', include(router.urls)),
]

