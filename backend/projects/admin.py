from django.contrib import admin

from .models import Project


class ProjectAdmin(admin.ModelAdmin):
    ordering = ['id']
    list_display = ['title', 'type']


admin.site.register(Project, ProjectAdmin)
