import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GlobalPublicationsComponent } from './global-publications.component';
import { GlobalPublicationsService } from './global.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    GlobalPublicationsComponent
  ],
  providers: [
    GlobalPublicationsService
  ],
  exports: [
    GlobalPublicationsComponent
  ],
  bootstrap: [
    GlobalPublicationsComponent
  ]
})

export class GlobalPublicationsModule{}
