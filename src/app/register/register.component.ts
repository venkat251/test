import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  FormGroup,  Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationsService } from '../shared/validations.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  constructor( private router: Router,private validationService: ValidationsService,private authService: AuthService) {
      
  }

  ngOnInit() {

    this.RegisterForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, ValidationsService.emailValidation])),
      userName: new FormControl ('', Validators.compose([Validators.required, ValidationsService.UserName])),
      password :  new FormControl ('', Validators.compose([Validators.required, ValidationsService.passwordStrong ])),
      confirmPassword: new FormControl ('', Validators.compose([Validators.required, ValidationsService.PasswordValidator('password')])),
      phoneNumber : new FormControl ('', Validators.compose([Validators.required, ValidationsService.MobileValidation])),
      addressLine1: new FormControl( '', Validators.required),
      addressLine2: new FormControl( '' ),
   });

  }
 OnSubmitRegistration(RegisterForm) {
   this.authService.RegisterData(RegisterForm);
   this.router.navigate(['/']);
   }

  omit_special_char(event) {
     let k;
     k = event.charCode;  //         k = event.keyCode;  (Both can be used)
     return((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || k === 32 || (k >= 48 && k <= 57));
  }
  charc(event) {

    let k;
    k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    return((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || k === 32 );
 }
}
