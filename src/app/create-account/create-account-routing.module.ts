import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { CreateAccountComponent } from './create-account.component';
import { LayoutPublicComponent } from '../shared/layouts/layout-public/layout-public.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'registro',
      component: LayoutPublicComponent,
      children: [
        {
          path: '',
          component: CreateAccountComponent
        }
      ]
    }
  ])],
  exports: [RouterModule],
  providers: []
})

export class CreateAccountRoutingModule{}
