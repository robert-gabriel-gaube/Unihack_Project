from django.http.response import HttpResponse
from django.shortcuts import render
from django.views import View
from .forms import LoginForm, RegisterForm
from .models import User

# Create your views here.

class Index(View):
    def get(self, request):
        return HttpResponse("Hello world")

class Login(View):
    def get(self, request):
        form = LoginForm()

    def post(self, request):
        form = LoginForm(request.POST)
        username = form.username
        if User.objects.filter(user_name=username):
            return True
        else:
            return False



class Register(View):
    pass

class Home(View):
    pass

class Profile(View):
    pass

class Product(View):
    pass

class NewProduct(View):
    pass
