import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private alertsvc: AlertifyService,
    private authsvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm){
    const token = this.authsvc.authUser({userName: loginForm.value.userName, password: loginForm.value.password})
    if (token){
      localStorage['token'] = token.userName;
      this.alertsvc.success('Login Successfull');
      this.router.navigate(['/']);
    } else {
      this.alertsvc.error('Wrong user name of password');
    }
  }

}
