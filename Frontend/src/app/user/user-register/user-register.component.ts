import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.registerationForm = new FormGroup({
      userName: new FormControl('Yaser', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(11)])
     }, this.passwordMathcingValidator);
  }

  passwordMathcingValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null : { notmatched: true }
  }

  get userName() {
    return this.registerationForm.get('userName') as FormControl
  }

  get email() {
    return this.registerationForm.get('email') as FormControl
  }

  get password() {
    return this.registerationForm.get('password') as FormControl
  }

  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl
  }

  get mobile() {
    return this.registerationForm.get('mobile') as FormControl
  }

  onSubmti() {
    console.log(this.registerationForm);
  }
}
