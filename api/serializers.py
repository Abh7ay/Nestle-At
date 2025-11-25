from rest_framework import serializers
from .models import Review, FutureProject, Idea


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'name', 'title', 'text', 'rating', 'image', 'created_at']
        read_only_fields = ['id', 'created_at']


class ReviewCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['name', 'title', 'text', 'rating', 'image']


class FutureProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = FutureProject
        fields = ['id', 'title', 'description', 'location', 'estimated_price', 
                  'image', 'expected_completion', 'created_at', 'is_featured']
        read_only_fields = ['id', 'created_at']


class FutureProjectCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = FutureProject
        fields = ['title', 'description', 'location', 'estimated_price', 
                  'image', 'expected_completion']


class IdeaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Idea
        fields = ['id', 'name', 'email', 'subject', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']


class IdeaCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Idea
        fields = ['name', 'email', 'subject', 'message']

