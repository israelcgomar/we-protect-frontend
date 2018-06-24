import { CreateAccountModule } from './create-account/create-account.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutPrivateComponent } from './shared/layouts/layout-private/layout-private.component';
import { LayoutPublicComponent } from './shared/layouts/layout-public/layout-public.component';
import { LoginModule } from './login/login.module';
import { ProfileReportsComponent } from './profile-reports/profile-reports.component';
import { ProfileComponent } from './profile/profile.component';
import { FilterPublicationsComponent } from './filter-publications/filter-publications.component';
import { GlobalPublicationsModule } from './global-publications/global-publications.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutPublicComponent,
    LayoutPrivateComponent,
    ProfileReportsComponent,
    ProfileComponent,
    FilterPublicationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    CreateAccountModule,
    GlobalPublicationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
