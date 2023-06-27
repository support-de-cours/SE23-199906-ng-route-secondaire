import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [{
  path: 'about',
  children: [
    {
      path: '',
      pathMatch: 'full',
      outlet: 'router_main',
      component: MainComponent
    },
    {
      path: '',
      pathMatch: 'full',
      outlet: 'router_sidebar',
      component: SidebarComponent
    },
  ]
}];

// site.com/livres    -> index des livres

// site.com/livre       path: 'livre'
// site.com/livre/     -> create path: ''
// site.com/livre/42   -> create path: ':id'


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
