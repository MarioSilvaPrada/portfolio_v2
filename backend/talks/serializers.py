
from rest_framework import serializers
from talks.models import Talk


class TalkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Talk
        fields = '__all__'
        read_only_fields = ()
