import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Default Route
  // site.com/  --> site.com/homepage
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  },

  // WildCard Route
  // {
  //   path: '**',
  //   loadChildren: () => import('mon_module').then(m => m.mon_module)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
