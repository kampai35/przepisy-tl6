import { UserService } from './../../services/user.service';
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
    public activeModal: NgbActiveModal,
    private userService: UserService
  ) { }

  registerForm = new FormGroup({
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

  get username(){return this.registerForm.get('username')}
  get usernameErrorMessage(){
    if(this.username?.hasError('required'))
      return 'Podaj nazwę użytkownika';

    if(this.username?.hasError('minlength'))
      return 'Nazwa powinna zawierać co najmniej 3 znaki.';

    return '';
  }

  get email(){ return this.registerForm.get('email');}
  get emailErrorMessage(){
    if (this.email?.hasError('required'))
      return 'Podaj adres E-mail.';

    return this.email?.hasError('email') ? 'Niepoprawny adres e-mail.' : '';
  }

  get password(){ return this.registerForm.get('password');}
  get passwordErrorMessage(){
    if (this.password?.hasError('required'))
      return 'Podaj hasło.';
    return '';
  }

  get confirmPassword(){ return this.registerForm.get('confirmPassword');}
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

  submit(data?: any){
    console.log(data.value);
    this.userService.register(data.value).subscribe(() =>{
      console.log('zarejestrowano');
      this.closeModal();
    });
  }

}
