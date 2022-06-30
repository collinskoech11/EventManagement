from django.urls import path
from . import views

urlPatterns = [
    path('appusers', views.AppUserList.as_view()),
    path('appusers/new', views.AppUserCreate.as_view()),
    path('appuser/detail/<int:pk>', views.AppUserDetail.as_view()),
    path('events', views.EventList.as_view()),
    path('events/new', views.EventCreate.as_view()),
    path('event/detail/<int:pk>', views.EventDetail.as_view()),
    path('rsvps', views.RsvpList.as_view()),
    path('rsvp/new', views.RsvpCreate.as_view()),
]