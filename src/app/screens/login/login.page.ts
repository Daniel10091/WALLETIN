import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  email?: string = '';
  password?: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(): any {
    // window.location.href = '/screens/home';
    setTimeout(() => {
      if (this.email === 'admin@gmail.com' && this.password === 'admin') {
        this.router.navigate(['/screens/home']);
      } else {
        alert('Invalid credentials');
      }
    }, 400);
  }

  loginWithGoogle(): any {}

  loginWithFacebook(): any {}

  loginWithTwitter(): any {}
  
  emailFieldFocus(): any {
    document.getElementById('emailField')?.focus();
  }

  passwordFieldFocus(): any {
    document.getElementById('passwordField')?.focus();
  }

  emailFieldBlur(): any {
    document.getElementById('emailField')?.blur();
  }

  passwordFieldBlur(): any {
    document.getElementById('passwordField')?.blur();
  }

  showPassword(): any {
    const passwordField = document.getElementById('passwordField') as HTMLInputElement;
    const showPasswordIcon = document.getElementById('showPasswordIcon') as HTMLInputElement;
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      showPasswordIcon.name = 'eye-off';
    } else {
      passwordField.type = 'password';
      showPasswordIcon.name = 'eye';
    }
  }

  forgotPassword(): any {
    this.router.navigate(['/screens/forgot-password']);
  }

  register(): any {
    this.router.navigate(['/screens/register']);
  }

}
