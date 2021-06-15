from django.contrib import admin

from .models import Talk


class TalkAdmin(admin.ModelAdmin):
    ordering = ['id']
    list_display = ['title', 'company', 'date']


admin.site.register(Talk, TalkAdmin)
