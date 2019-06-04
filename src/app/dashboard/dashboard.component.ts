import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {DataService} from '../data.service';
import { USERS } from '../user-data'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users = USERS;
  constructor(private user: UserService, private router:Router) { }

  ngOnInit() {
  }

  login(e){
    e.preventDefault();
    this.router.navigate(['login']);
  }

}
