from rest_framework import serializers
from event.models import *

class AppUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppUser
        fields = ['id','username','email','role','Company','location']
        #skipped image for now

class EventSerializer(serializers.ModelSerializer):
    banner_url = serializers.ImageField(required=False)
    class Meta:
        model = Event
        fields = ['id','title','banner_url','Venue','category','description','type','created_at', 'date', 'time_created']
        #skipped image for now

class RsvpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rsvp
        fields = ['id','name','email','event','Company', 'created_at']
        #skipped image for now