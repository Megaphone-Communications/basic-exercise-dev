import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorComponent } from 'src/app/shared/Modal/error/error.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userData = [
    { Firstname: 'admin', Lastname: 'admin' },
    { Firstname: 'test', Lastname: 'test' },
  ];

  loginValid = true;
  Firstname: any;
  Lastname: any;
  myForm!: FormGroup;
  constructor(
    private _dialog: MatDialog,
    private _router: Router,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      Firstname: [null, [Validators.required]],
      Lastname: [null, [Validators.required]],
    });
  }
  login() {
    console.log(this.userData[0]);
    console.log(this.myForm.getRawValue());
    let foundUser = this.userData.find(
      (element) =>
        JSON.stringify(this.myForm.getRawValue()) === JSON.stringify(element)
    );

    if (foundUser) {
      let loggedIn = true;
      sessionStorage.setItem('loggedIn', String(loggedIn));

      this._router.navigateByUrl('/home');

      this._dialog.open(ErrorComponent, {
        data: 'Welcome. Successfully logged in',
      });
    } else {
      this._dialog.open(ErrorComponent, {
        data: 'Login failed',
      });
    }

    console.log(foundUser);
  }
}
