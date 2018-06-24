import { FilterPublicationsComponent } from './filter-publications/filter-publications.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileReportsComponent } from './profile-reports/profile-reports.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutPrivateComponent } from './shared/layouts/layout-private/layout-private.component';
import { GlobalPublicationsComponent } from './global-publications/global-publications.component';

export const routes: Routes = [
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: LayoutPrivateComponent,
      children: [
      {
        path: '',
        component: GlobalPublicationsComponent
      },
      {
        path: 'zona-interes',
        component: FilterPublicationsComponent
      },
      {
        path: 'perfil',
        component: ProfileReportsComponent
      },
      {
        path: 'editar-informacion',
        component: ProfileComponent
      },
      ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
