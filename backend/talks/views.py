from django.shortcuts import render
from rest_framework.generics import ListAPIView
from talks.models import Talk
from talks.serializers import TalkSerializer


class ListTalks(ListAPIView):
    queryset = Talk.objects.all()
    serializer_class = TalkSerializer
