import { Iuser } from './../../interfaces/iuser';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private userService: UserService
  ) { }

  login = new FormGroup({
    'email': new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  get email(){ return this.login.get('email') }
  get password(){ return this.login.get('passowrd') }

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

  submit(data){
    const loginData: Iuser = data.value;

    this.userService.login(loginData)
    .subscribe(() => console.log('zalogowano') );
  }

}
