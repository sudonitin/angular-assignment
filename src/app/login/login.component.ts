import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import {DataService} from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router:Router, private user:UserService, private DataService:DataService) { }

  ngOnInit() {
  }

  loginuser(e){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    // if(username == 'admin' && password == 'admin'){
    //   this.user.setUserLoggedIn();
    //   this.router.navigate(['dashboard']);
    // }

    let user = this.DataService.getUser(username, password);
    if(user==undefined){
      console.log('failed');
      this.router.navigate(['signup']);
    }else{
      console.log('passed');
      this.user.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    }
  }


  signup(e){
    e.preventDefault();
    this.router.navigate(['signup']);
  }
}
