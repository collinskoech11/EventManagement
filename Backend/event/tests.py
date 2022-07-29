from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
from .models import *
from  .serializers import *

client = Client()

# Create your tests here.
class MyAppUserTestCase(TestCase):
    def setUp(self):
        sampleUser = AppUser.objects.create(
            username="John Doe",
            email="sample@gmail.com",
            role="Manager",
            Company="sample_logistics",
            password="password",
            location="Nairobi"
        )
        sampleEvent = Event.objects.create(
            title="Link up",
            # banner="sample.png",
            Venue="Nairobi",
            category="meet",
            description="meet up",
            type="physical",
            created_at="2022-12-12",
            date="2022-12-12",
            time_created="2022-12-12"
            )
        sampleRsvp = Rsvp.objects.create(
            name="Faith",
            email="sample@gmail.com",
            event="meet up",
            Company="sample_logistics",
            created_at="2022-12-12",
        )
        sampleUser.save()
        sampleRsvp.save()
    def testAppUserModel(self):
        print("Testing App User Model")
        sampleUserTest = AppUser.objects.get(username="John Doe")
        print("Sample User => ", sampleUserTest.username)
    def testEventModel(self):
        print("Testing Event Model")
        sampleEventTest = Event.objects.get(title="Link up")
        print("Sample Event Title => ",sampleEventTest.title)
    def testRsvpModel(self):
        print("Testing the Rsvp Model")
        sampleRsvpTest = Rsvp.objects.get(name="Faith")
        print("Sample Rsvp from a user => ", sampleRsvpTest.name)
    def test_get_all_rsvps(self):# test get rsvps endpoint
        #get an api response
        response  = client.get(reverse('rsvplisting'))
        #get data from db
        rsvps = Rsvp.objects.all()
        serializer  = RsvpSerializer(rsvps, many=True)
        print("Rsvp Test Data ===============================================================================")
        print(response.data)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    def test_get_all_events(self):# test get all events endpoint
        response = client.get(reverse('eventslisting'))
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        print("Event Test Data ==============================================================================")
        print(response.data)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    def test_get_all_users(self):
        response = client.get(reverse('appuserslisting'))
        users = AppUser.objects.all()
        serializer = AppUserSerializer(users, many=True)
        print('Users Test data ===============================================================================')
        print(response.data)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)



#initialize app client with