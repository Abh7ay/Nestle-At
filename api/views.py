from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Review, FutureProject, Idea
from .serializers import (
    ReviewSerializer, ReviewCreateSerializer,
    FutureProjectSerializer, FutureProjectCreateSerializer,
    IdeaSerializer, IdeaCreateSerializer
)


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.filter(is_approved=True)
    serializer_class = ReviewSerializer
    
    def get_serializer_class(self):
        if self.action == 'create':
            return ReviewCreateSerializer
        return ReviewSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        review = serializer.save(is_approved=False)  # New reviews need approval
        return Response(ReviewSerializer(review).data, status=status.HTTP_201_CREATED)


class FutureProjectViewSet(viewsets.ModelViewSet):
    queryset = FutureProject.objects.all()
    serializer_class = FutureProjectSerializer
    
    def get_serializer_class(self):
        if self.action == 'create':
            return FutureProjectCreateSerializer
        return FutureProjectSerializer
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        featured_projects = self.queryset.filter(is_featured=True)
        serializer = self.get_serializer(featured_projects, many=True)
        return Response(serializer.data)


class IdeaViewSet(viewsets.ModelViewSet):
    queryset = Idea.objects.all()
    serializer_class = IdeaSerializer
    
    def get_serializer_class(self):
        if self.action == 'create':
            return IdeaCreateSerializer
        return IdeaSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        idea = serializer.save()
        return Response(IdeaSerializer(idea).data, status=status.HTTP_201_CREATED)
