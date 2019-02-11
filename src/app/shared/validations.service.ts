import { Injectable } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, AbstractControl, } from '@angular/forms';



import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition} from '@angular/material';


interface ValidationResult {
  [key: string]: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {
   verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private snackBar: MatSnackBar) { }

  public static personFirstName(control: AbstractControl): ValidationResult {
    // Skip validation if empty, to handel optional fields
    if (!control.value) {
        return null;
    }
    if (control.value.length < 3) {
        return { 'minlength': true };
    }

    if (control.value.length > 32) {
        return { 'maxlength': true };
    }
    const valid = /^[a-zA-Z. ]*$/.test(control.value);
    if (valid) {
        return null;
    }
    return { 'pattern': true };
  }

  public static UserName(control: AbstractControl): ValidationResult {
    if (!control.value) {
        return null;
    }
    if (control.value.length < 6) {
        return { 'minlength': true };
    }

    if (control.value.length > 30) {
        return { 'maxlength': true };
    }
    const valid = true
    if (valid) {
        return null;
    }
    return { 'pattern': true };
  }

  public static emailValidation(control: AbstractControl): ValidationResult {
    if (!control.value) {
        return null;
    }

    const valid = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i.test(control.value);
    if (valid) {
        return null;
    }
    return { 'pattern': true };
  }

  public static AadharNumberValidation(control: AbstractControl): ValidationResult {
      if (!control.value) {
        return null;
      }


      if (control.value.length < 12) {
        return { 'minlength': true };
    }

    if (control.value.length > 12) {
        return { 'maxlength': true };
    }

    //   if (control.value.length === 12) {
    //     return { 'length': true };
    // }

    const valid = /^[0-9][0-9]{11}$/.test(control.value);
      if (valid) {
          return null;
      }
      return { 'pattern': true };
  }

  public static GSTNumberValidation(control: AbstractControl): ValidationResult {
    if (!control.value) {
      return null;
    }

    if (control.value.length < 15) {
      return { 'minlength': true };
  }

  if (control.value.length > 15) {
      return { 'maxlength': true };
  }

  //   if (control.value.length === 15) {
  //     return { 'length': true };
  // }
     // tslint:disable-next-line:max-line-length
    // const valid = /^(0[1-9]|[1-2][0-9]|3[0-5])([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}([a-zA-Z0-9]){1}([a-zA-Z]){1}([0-9]){1}?$/.test(control.value);
    // if (valid) {
    //     return null;
    // }
    // return { 'pattern': true };
  }


  public static FaxNumber(control: AbstractControl): ValidationResult {
    if (!control.value) {
      return null;
    }

    if (control.value.length < 12) {
      return { 'minlength': true };
  }

  if (control.value.length > 12) {
      return { 'maxlength': true };
  }

  //   if (control.value.length === 12) {
  //     return { 'length': true };
  // }
    const valid = /^(\+?\d{1,}(\s?|\-?)\d*(\s?|\-?)\(?\d{2,}\)?(\s?|\-?)\d{3,}\s?\d{3,})$/.test(control.value);
    if (valid) {
       return null;
     }
     return { 'pattern': true };
  }

  public static WebSiteValidation(control: AbstractControl): ValidationResult {
    if (!control.value) {
      return null;
  }
   // tslint:disable-next-line:max-line-length
   const valid = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/
   .test(control.value);
   if (valid) {
    return null;
   }
   return { 'pattern': true };
}

public static LicenceNo(control: AbstractControl): ValidationResult {
  if (!control.value) {
      return null;
  }

  if (control.value.length < 16) {
    return { 'minlength': true };
}

if (control.value.length > 16) {
    return { 'maxlength': true };
}

//   if (control.value.length === 16) {
//     return { 'length': true };
// }

}

public  static dateValidator(control: AbstractControl): ValidationResult {
  if (!control.value) {
    return null;
}
if (control.value.length < 6) {
  return { 'minlength': true };
}
if (control.value.length > 12) {
  return { 'maxlength': true };
}
const valid = /^(\d{1,2})-(\d{1,2})-(\d{4})$/.test(control.value);
if (valid) {
    return null;
}
return { 'pattern': true };

}

  public static RegistrationNO(control: AbstractControl): ValidationResult {
    if (!control.value) {
        return null;
    }
    if (control.value.length < 6) {
      return { 'minlength': true };
    }
    if (control.value.length > 12) {
      return { 'maxlength': true };
    }
  }

  public static Names(control: AbstractControl): ValidationResult {
    if (!control.value) {
        return null;
    }
    if (control.value.length < 3) {
        return { 'minlength': true };
    }

    if (control.value.length > 25) {
        return { 'maxlength': true };
    }
  }


  public static MobileValidation(control: AbstractControl): ValidationResult {
    if (!control.value) {
        return null;
    }

    if (control.value.length < 10) {
      return { 'minlength': true };
  }

  if (control.value.length > 10) {
      return { 'maxlength': true };
  }
    // if (control.value.length !== 10) {
    //     return { 'length': true };
    // }

    const valid = /^(\+\d{1,3}[- ]?)?\d{10}$/.test(control.value);
    if (valid) {
        return null;
    }
    return { 'pattern': true };
  }

  public static passwordStrong(control: AbstractControl): ValidationResult {
    if (!control.value) {
      return null;
  }
  if (control.value.length < 8) {
    return { 'minlength': true };
  }
if (control.value.length > 14) {
    return { 'maxlength': true };
}
  const valid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(control.value);
  if (valid) {
      return null;
  }
  return { 'patternStrong': true };
  }

   public static PasswordValidator(confirmPasswordInput: string) {
    let confirmPasswordControl: FormControl;
    let passwordControl: FormControl;
    return (control: FormControl) => {
      if (!control.parent) {
        return null;
      }
      if (!confirmPasswordControl) {
        confirmPasswordControl = control;
        passwordControl = control.parent.get(confirmPasswordInput) as FormControl;
        passwordControl.valueChanges.subscribe(() => {
          confirmPasswordControl.updateValueAndValidity();
        });
      }
      if ( passwordControl.value !== confirmPasswordControl.value ) {
        return {
          notMatch: true
        };
      }
      return null;
    };
  }

    public static zipCodeValidator(control: AbstractControl): ValidationResult {
    if (!control.value) {
        return null;
    }
     const valid = /^[1-9][0-9]{5}$/.test(control.value);
    if (valid) {
        return null;
    }
    return { 'pattern': true };
  }

  public static DeaNumberValidator(control: AbstractControl): ValidationResult {
    if (!control.value) {
        return null;
    }
    if (control.value.length < 9) {
      return { 'minlength': true };
  }

  if (control.value.length > 9) {
      return { 'maxlength': true };
  }
    // if (control.value.length !== 9) {
    //   return { 'length': true };
    // }
     const valid = /^\S{2}\d{7}$/.test(control.value);
    if (valid) {
        return null;
    }
    return { 'pattern': true };
  }

  public static NPINumberValidator(control: AbstractControl): ValidationResult {
    if (!control.value) {
        return null;
    }
    if (control.value.length < 10) {
      return { 'minlength': true };
  }

  if (control.value.length > 10) {
      return { 'maxlength': true };
  }
    //  const valid = /^\S{2}\d{7}$/.test(control.value);
    // if (valid) {
    //     return null;
    // }
    // return { 'pattern': true };
  }

    // Error validation  as snackbar
      showLoginError(message: string) {
           const config = new MatSnackBarConfig();
           config.verticalPosition = this.verticalPosition;
            config.panelClass = ['background-red', 'mat-elevation-z10'];
            config.duration = 5000;
            this.snackBar.open(message, ' ', config);
      }

      // Success validation  as snackbar
      showSuccess(message: string) {
        // let verticalPosition: MatSnackBarVerticalPosition = vposition;
        const config = new MatSnackBarConfig();
       config.verticalPosition = this.verticalPosition;
       config.panelClass = ['background-green', 'mat-elevation-z10'];
       config.duration = 5000;
       this.snackBar.open(message, '', config);
      }

}
