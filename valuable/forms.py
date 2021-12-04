from django import forms

class LoginForm(forms.Form):
    username = forms.CharField(label="Enter username", max_length=100, error_messages={
        "required": "Username must not be empty",
        "max_length": "Please enter a shorter username"
    })
    password = forms.CharField(widget=forms.PasswordInput, max_length=50, error_messages={
        "required": "Password must not be empty",
        "max_length": "Your password is too long"
    })

class RegisterForm(forms.Form):
        first_name = forms.CharField(label="First Name")
        last_name = forms.CharField(label="Last Name")

        email = forms.EmailField(label="Email", error_messages={
            "required": "Email must not be empty",
        })

        username = forms.CharField(label="Enter username", max_length=100, error_messages={
        "required": "Username must not be empty",
        "max_length": "Please enter a shorter username"
    })

        password = forms.CharField(label="Password",widget=forms.PasswordInput, max_length=50, error_messages={
        "required": "Password must not be empty",
        "max_length": "Your password is too long"
    })

        Confinrm_password = forms.CharField(label="Confirm Password",widget=forms.PasswordInput, max_length=50, error_messages={
        "required": "Password must not be empty",
        "max_length": "Your password is too long"
    })