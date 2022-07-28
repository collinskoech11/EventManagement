from django.test import TestCase
from .models import *

# Create your tests here.
class MyAppUserTestCase(TestCase):
    def setUp(self):
        sampleUser = AppUser.objects.create(
            username="sample",
            email="sample@gmail.com",
            role="Manager",
            Company="sample_logistics",
            password="password",
            location="Nairobi"
        )
        # sampleEvent = Event.objects.create(
        #     title="meet up",
        #     # banner=,
        #     Venue="Nairobi",
        #     category="meet",
        #     description="meet up",
        #     type="physical",
        #     created_at=2022-12-12,
        #     date=2022-12-12,
        #     time_created=2022-12-12
        #     )
        sampleRsvp = Rsvp.objects.create(
            name="sample",
            email="sample@gmail.com",
            event="meet up",
            Company="sample_logistics",
            created_at="2022-12-12",
        )
        sampleUser.save()
        sampleRsvp.save()
    def testAppUserModel(self):
        print("Testing App User Model")
        sampleUserTest = AppUser.objects.get(username="sample")
        print(sampleUserTest.username)
    def testRsvpModel(self):
        print("Testing the Rsvp Model")
        sampleEventTest = Rsvp.objects.get(name="sample")