import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanActivate, Router } from '@angular/router';
import { ErrorComponent } from 'src/app/shared/Modal/error/error.component';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  canActivate() {
    if (this.authService.isUserLoggedIn()) {
      return true;
    } else {
      this.dialog.open(ErrorComponent, {
        data: 'Access denied. Please log in',
      });
      return false;
    }
  }
}
