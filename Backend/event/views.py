from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.


class AppUserList(APIView):
    def get(self, request):
        users = AppUser.objects.all()
        serializer = AppUserSerializer(users, many=True)
        return Response(serializer.data)


class AppUserCreate(APIView):
    def post(self, request):
        serializer =  AppUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AppUserDetail(APIView):
    def get_object(self, pk):
        try:
            return AppUser.objects.get(pk=pk)
        except Event.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        user = self.get_object(pk)
        serializer = AppUserSerializer(user)
        return Response(serializer.data)

#Events
class EventList(APIView):
    def get(self, request):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)


class EventCreate(APIView):
    def post(self, request):
        serializer =  EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EventDetail(APIView):
    def get_object(self, pk):
        try:
            return Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        event = self.get_object(pk)
        serializer = EventSerializer(event)
        return Response(serializer.data)

        
#RsvpSerializer
class RsvpList(APIView):
    def get(self, request):
        rsvps = Rsvp.objects.all()
        serializer = RsvpSerializer(rsvps, many=True)
        return Response(serializer.data)

class RsvpCreate(APIView):
    def post(self, request):
        serializer =  RsvpSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RsvpDetail(APIView):
    def get_object(self, pk):
        try:
            return Rsvp.objects.get(pk=pk)
        except Event.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        rsvp = self.get_object(pk)
        serializer = RsvpSerializer(rsvp)
        return Response(serializer.data)