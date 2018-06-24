import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { LoggedUserGuard } from '../_guards/logged-user.guard';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  bootstrap: [
    LoginComponent
  ]
})

export class LoginModule {}
