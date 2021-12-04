from django.urls import path
from . import views

urlpatterns = [
    path("", views.Index.as_view()),
    path("login", views.Login.as_view()),
    path("register", views.Register.as_view()),
    path("home", views.Home.as_view()),
    path("profile/<slug:slug>", views.Profile.as_view()),
    path("product/<int:id>", views.Product.as_view()),
    path("new-product", views.NewProduct.as_view())
]
