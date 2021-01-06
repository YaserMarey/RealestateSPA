import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Validator, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/model/user';



@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  // user: any = {};
  formIsSubmitted: boolean;

  constructor(private fb: FormBuilder, private userService: UserServiceService) { }

  ngOnInit() {

    this.buildForm();
  }

  buildForm() {
    this.registerationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.maxLength(11)]]
    }, {validators: this.passwordMathcingValidator});
  }

  passwordMathcingValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null : { notmatched: true };
  }

  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registerationForm.get('email') as FormControl;
  }

  get password() {
    return this.registerationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }

  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }

  onSubmti() {
    this.formIsSubmitted = true;
    if (this.registerationForm.valid) {
      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.formIsSubmitted = false;
    }
  }

  userData(): User {
    return {
      userName: this.userName.value,
      email: this.email.value,
      mobile: this.mobile.value,
      password: this.password.value
    }
  }
}
