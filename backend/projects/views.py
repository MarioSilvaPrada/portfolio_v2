from django.shortcuts import render
from rest_framework.generics import ListAPIView
from projects.models import Project
from projects.serializers import ProjectSerializer


class ListProjects(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
