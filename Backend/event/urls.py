from django.urls import path
from . import views

urlpatterns = [
    path('appusers', views.AppUserList.as_view(), name="appuserslisting"),
    path('appusers/new', views.AppUserCreate.as_view(), name=""),
    path('appuser/detail/<int:pk>', views.AppUserDetail.as_view(), name=""),
    path('events', views.EventList.as_view(), name="eventslisting"),
    path('events/new', views.EventCreate.as_view(), name=""),
    path('event/detail/<int:pk>', views.EventDetail.as_view(), name=""), 
    path('rsvps', views.RsvpList.as_view(), name="rsvplisting"),
    path('rsvp/new', views.RsvpCreate.as_view(), name=""),
    # path('rsvp/event/<str:event>', views.EventRsvp.as_view()),
]