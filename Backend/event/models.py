from django.db import models

# Create your models here.
from django.db import models
from django.forms import ImageField
from django.utils import timezone
import datetime 
# from cloudinary.models import CloudinaryField
# from cloudflare_images.field import CloudflareImagesField


# Create your models here.
class AppUser(models.Model):
    username = models.CharField(max_length=200)
    email= models.CharField(max_length=200, null=True, blank=True)
    role = models.CharField(max_length=200)
    Company = models.TextField()
    password = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    

# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=200)
    # image = CloudinaryField('image', null=True, blank=True)
    # dspl_image = models.CharField(max_length=200, null=True, blank=True)
    Venue= models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200,default='get pesa guide')
    description = models.TextField()
    type = models.TextField()
    created_at = models.DateField(datetime.date.today())
    date = models.DateField()
    time_created = models.DateField()

class Rsvp(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    event = models.CharField(max_length=200)
    Company = models.CharField(max_length=200)
    created_at = models.DateTimeField()