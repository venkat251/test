import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

    loginDetails(loginForm) {
    console.log(loginForm);
    var user = JSON.parse(localStorage.getItem('data'));
    if((loginForm.userName==user.userName ||loginForm.userName==user.phoneNumber || loginForm.userName==user.email) && loginForm.password==user.password )
    return  true;
      else
      return false;
    }
     RegisterData(data){
        localStorage.setItem("data",JSON.stringify(data));
      }

}
