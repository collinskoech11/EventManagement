from django.contrib import admin

from django.contrib import admin

from event.models import *
# from .serializers import Article
# Register your models here.
admin.site.site_header = "Event Management admin"
admin.site.site_title = "Event Booking service"
admin.site.index_title = "Manage Site"
# Register your models here.

class AppUsersAdmin(admin.ModelAdmin):
    list_display = ('username','email')

class EventAdmin(admin.ModelAdmin):
    list_display = ('title','category')

class RsvpAdmin(admin.ModelAdmin):
    list_display = ('name','event')

admin.site.register(AppUser, AppUsersAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(Rsvp, RsvpAdmin)