import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userData = [
    { Firstname: 'admin', Lastname: 'admin' },
    { Firstname: 'test', Lastname: 'test' },
  ];

  loginValid = true;
  Firstname: any;
  Lastname: any;

  constructor(private _dialog: MatDialog, private _router: Router) {}

  login() {
    // this.userData.forEach((element) => {
    //   if (
    //     element.Firstname == this.Firstname &&
    //     element.Lastname == this.Lastname
    //   ) {
    //     let loggedIn = true;
    //     sessionStorage.setItem('loggedIn', String(loggedIn));

    //     this._router.navigateByUrl('/home');

    //     this._dialog.open(ErrorComponent, {
    //       data: 'Welcome. Successfully logged in',
    //     });
    //   }
    // });

    let foundUser = this.userData.find(
      (element) =>
        element.Firstname == this.Firstname && element.Lastname == this.Lastname
    );

    console.log(foundUser);
  }
}
