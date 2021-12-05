from django.http.response import HttpResponse
from django.shortcuts import render
from django.views import View
from .forms import LoginForm
from .models import User, Product
# Create your views here.


class Index(View):
    def get(self, request):
        return render(request, "valuable/index.html")

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
    def get(self, request):
        return HttpResponse("Hello")

class Profile(View):
    def get(self, request, slug):
        pass
        return HttpResponse("Hello")

class ProductList(View):
    def get(self, request, id):
        pass

class NewProduct(View):
    pass
