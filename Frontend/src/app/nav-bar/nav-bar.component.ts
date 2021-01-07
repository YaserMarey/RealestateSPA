import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  loggedinUser: string;

  ngOnInit() {}

  loggedIn(){
    this.loggedinUser = localStorage['token']
    return this.loggedinUser;
  }
  onLogout(){
    localStorage.removeItem('token');
  }

}
