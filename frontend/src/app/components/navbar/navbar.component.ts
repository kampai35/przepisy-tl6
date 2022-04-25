import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  constructor(
    private modalService: NgbModal,
    private router: Router
  ) { }

  //routing
  toHomepage(){
    this.router.navigateByUrl('');
  }
  toList(){
    this.router.navigateByUrl('/lista-przepisow');
  }

  //login & register
  openLoginForm(){
    const modalRef = this.modalService.open(LoginFormComponent,
    {
      windowClass: 'logIn',
      keyboard: false,
      backdrop: 'static'
    });
  }
  openRegisterForm(){
    const modalRef = this.modalService.open(RegisterFormComponent,
      {
        windowClass: 'register',
        keyboard: false,
        backdrop: 'static'
      });
  }

}
