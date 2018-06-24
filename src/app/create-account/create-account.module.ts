import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CreateAccountComponent } from './create-account.component';
import { CreateAccountRoutingModule } from './create-account-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    CreateAccountRoutingModule
  ],
  declarations: [
    CreateAccountComponent
  ],
  exports: [
    CreateAccountComponent
  ],
  bootstrap: [
    CreateAccountComponent
  ]
})

export class CreateAccountModule{}
