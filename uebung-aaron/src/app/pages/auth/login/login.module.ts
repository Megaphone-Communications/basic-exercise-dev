import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [],
  imports: [
    LoginRoutingModule,
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule {}
