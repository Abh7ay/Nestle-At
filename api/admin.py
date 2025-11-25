from django.contrib import admin
from .models import Review, FutureProject, Idea

# Register your models here.

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ['name', 'title', 'rating', 'is_approved', 'created_at']
    list_filter = ['is_approved', 'rating', 'created_at']
    search_fields = ['name', 'title', 'text']
    list_editable = ['is_approved']


@admin.register(FutureProject)
class FutureProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'location', 'is_featured', 'created_at']
    list_filter = ['is_featured', 'created_at']
    search_fields = ['title', 'description', 'location']
    list_editable = ['is_featured']


@admin.register(Idea)
class IdeaAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'is_reviewed', 'created_at']
    list_filter = ['is_reviewed', 'created_at']
    search_fields = ['name', 'email', 'subject', 'message']
    list_editable = ['is_reviewed']
