from django.urls import path
from talks import views

app_name = 'talks'

urlpatterns = [
    path('', views.ListTalks.as_view(), name='talks-list')
]
