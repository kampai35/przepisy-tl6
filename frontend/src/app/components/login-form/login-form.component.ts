import { UserService } from '../../services/user.service';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Input() fromParent: any;

  constructor(
    public activeModal: NgbActiveModal,
    private userService: UserService
  ) { }

  loginForm = new FormGroup({
    'email': new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    'password': new FormControl('', [
      Validators.required
    ])
  });

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

    return this.email?.hasError('password') ? 'Złe hasło' : '';
  }

  closeModal(data?: any) {
    if(data === null || data === undefined){ this.activeModal.dismiss(); }
    else{ this.activeModal.close(data); }
  }

  submit(data?: any){
    console.log(data.value);
    this.userService.login(data.value).subscribe(() =>{
      console.log('zalogowano');
      this.closeModal();
    });
  }

}
