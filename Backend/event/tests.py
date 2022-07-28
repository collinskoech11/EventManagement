from django.test import TestCase
from .models import *

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