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

  email?: string;
  password?: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(): any {
    // window.location.href = '/screens/home';
    this.router.navigate(['/screens/home']);
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

  forgotPassword(): any {
    this.router.navigate(['/screens/forgot-password']);
  }

}
