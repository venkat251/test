import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    user;
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('data'));
  }

}
