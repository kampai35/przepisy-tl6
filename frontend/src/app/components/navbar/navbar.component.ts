import { RegisterComponent } from './../register/register.component';
import { LoginComponent } from './../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  constructor(
    public dialog: MatDialog
  ) { }

  //login & register
  openLoginDialog(){ this.dialog.open(LoginComponent); }
  openRegisterDialog(){ this.dialog.open(RegisterComponent); }

}
