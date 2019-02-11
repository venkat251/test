import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ValidationsService } from '../shared/validations.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public  loginForm: FormGroup;
  userName: any;
  password: string;
  constructor(  private router: Router, private authService: AuthService) {
 
  }
  route() {
    this.router.navigate(['register']);
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName:  new FormControl ('', Validators.compose([Validators.required, ValidationsService.UserName])),
      password:  new FormControl ('', Validators.compose([Validators.required, ValidationsService.passwordStrong]))
   });
  }
  login(loginform) {
  if ( this.loginForm.valid && this.loginForm.dirty ) {
   var login= this.authService.loginDetails(loginform);
   if(login)
   this.router.navigate(['Details']);
   else
   this.router.navigate(['register']);
  }
 }
  ngOnDestroy(): void {
    
   }


}


