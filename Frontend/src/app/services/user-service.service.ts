import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }

addUser(user: User) {
  if (localStorage['users']) {
    const users = JSON.parse(localStorage['users']);
    users.push(user);
    localStorage['users'] = JSON.stringify(users);
  } else {
    localStorage['users'] = JSON.stringify([user]);
  }
}
}

