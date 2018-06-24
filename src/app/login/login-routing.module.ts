import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { LayoutPublicComponent } from '../shared/layouts/layout-public/layout-public.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'login',
      component: LayoutPublicComponent,
      children: [
        {
          path: '',
          component: LoginComponent
        }
      ]
    }
  ])],
  exports: [RouterModule],
  providers: []
})

export class LoginRoutingModule {}
