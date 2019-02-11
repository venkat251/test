import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit  {
  constructor( private router: Router, private authService: AuthService,) {  }
  ngOnInit() {
 
    }


}






