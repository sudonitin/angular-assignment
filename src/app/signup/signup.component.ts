import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import {DataService} from '../data.service';
import { Users } from '../user'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router, private user:UserService, private DataService:DataService) { }

  ngOnInit() {
  }

  login(e){
    e.preventDefault();
    this.router.navigate(['login']);
  }

  insert(e){
    var email = e.target.elements[0].value;
    var occupation = e.target.elements[1].value;
    var username = e.target.elements[2].value;
    var password = e.target.elements[3].value;
    let user : Users = {email:email,occupation:occupation,username:username,password:password};
    this.DataService.addUser(user); 
    this.user.setUserLoggedIn();
    this.router.navigate(['dashboard']);
  }

}
