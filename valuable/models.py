from django.db import models
from django.core.validators import MinLengthValidator
from django.utils.text import slugify

class User(models.Model):
    first_name = models.CharField(max_length = 100)
    last_name = models.CharField(max_length = 100)
    email = models.EmailField()
    username = models.CharField(max_length = 100, unique=True)
    password = models.CharField(max_length = 100)
    phone_number = models.CharField(max_length = 20)
    slug = models.SlugField(unique=True, db_index=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.username)
        super(User, self).save(*args, **kwargs)

    def full_name(self):
        return f"{self.first_name} {self.last_name} {self.username}"
    
    def __str__(self):
        return self.last_name

class Product(models.Model):
    title = models.CharField(max_length = 150)
    image_name = models.ImageField(upload_to="images")
    date = models.DateField(auto_now=True)
    description = models.TextField(validators=[MinLengthValidator(10)])
    DONATE = 'DN'
    SWAP = 'SW'
    TYPE_CHOICES = [
        (DONATE, 'Donate'),
        (SWAP, 'Swap')
    ]
    type = models.CharField(max_length=2, choices=TYPE_CHOICES)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="products")
