import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openLoginForm(){
    const modalRef = this.modalService.open(LoginFormComponent,
    {
      windowClass: 'logIn',
      keyboard: false,
      backdrop: 'static'
    });

    //WAŻNE - podwaliny do tego, co dalej
    // let data = {
    //   prop1: 'x'
    // }

    // modalRef.componentInstance.fromParent = data;
    // modalRef.result.then((result) => {
    //   //result
    // }, (reason) => {
    // });
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
