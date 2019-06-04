import { Component, OnInit } from '@angular/core';
import { USERS } from '../user-data'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  users = USERS;
  constructor() { }

  ngOnInit() {
  }

}