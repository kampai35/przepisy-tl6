import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  @Input() fromParent: any;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  loginForm = new FormGroup({
    'username': new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    'email': new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    'password': new FormControl('', [Validators.required]),
    'confirmPassword': new FormControl('', [Validators.required]),
  });

  get username(){return this.loginForm.get('username')}
  get usernameErrorMessage(){
    if(this.username?.hasError('required'))
      return 'Podaj nazwę użytkownika';

    if(this.username?.hasError('minlength'))
      return 'Nazwa powinna zawierać co najmniej 3 znaki.';

    return '';
  }

  get email(){ return this.loginForm.get('email');}
  get emailErrorMessage(){
    if (this.email?.hasError('required'))
      return 'Podaj adres E-mail.';

    return this.email?.hasError('email') ? 'Niepoprawny adres e-mail.' : '';
  }

  get password(){ return this.loginForm.get('password');}
  get passwordErrorMessage(){
    if (this.password?.hasError('required'))
      return 'Podaj hasło.';
    return '';
  }

  get confirmPassword(){ return this.loginForm.get('confirmPassword');}
  get confirmPasswordErrorMessage(){
    if (this.confirmPassword?.hasError('required'))
      return 'Podaj hasło.';
    return '';
  }


  closeModal(sendData?: any) {
    if(sendData === null || sendData === undefined){
      this.activeModal.dismiss();
    }
    else{
      this.activeModal.close(sendData);
    }
  }

}
