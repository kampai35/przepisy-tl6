import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Iuser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private userService: UserService
  ) { }

  register = new FormGroup({
    'email': new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    'confirmPassword': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  get email(){ return this.register.get('email') }
  get password(){ return this.register.get('passowrd') }
  get confirmPassword(){ return this.register.get('confirmPassword') }

  get emailErrorMessage(){
    if (this.email?.hasError('required'))
      return 'Podaj adres E-mail.';

    return this.email?.hasError('email') ? 'Niepoprawny adres e-mail.' : '';
  }
  get passwordErrorMessage(){
    if (this.password?.hasError('required'))
      return 'Podaj hasło.';

    return this.password?.hasError('password') ? 'Złe hasło' : '';
  }
  get confirmPasswordErrorMessage(){
    if (this.confirmPassword?.hasError('required'))
      return 'Podaj hasło.';

    return this.confirmPassword?.hasError('password') ? 'Złe hasło' : '';
  }


  submit(data){
    const registerData: Iuser = data.value;

    this.userService.register(registerData)
    .subscribe(() => console.log('zarejestrowano') );
  }
}
