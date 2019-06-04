import { Injectable } from '@angular/core';
import { Users } from './user';
import { USERS } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getUser(email:string,password:string):Users {
    return USERS.find(user => user.email===email && user.password===password);
    //console.log(email,password);
}
addUser(user:Users){
    Promise.resolve(USERS).then((users:Users[]) => users.push(user));
    console.log(USERS);
}
}
