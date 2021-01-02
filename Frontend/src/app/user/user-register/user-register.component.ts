import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      userName: new FormControl('Yaser', Validators.required) });
  }

  onSubmti() {
    console.log(this.registerationForm);
  }
}
