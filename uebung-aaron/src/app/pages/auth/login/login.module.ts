import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [],
  imports: [LoginRoutingModule, CommonModule, MatCardModule],
})
export class LoginModule {}
