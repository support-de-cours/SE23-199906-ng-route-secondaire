import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [{
  path: 'contact',
  children: [
    {
      path: ':param', // site.com/contact/xxxxxx
      pathMatch: 'full',
      outlet: 'router_main',
      component: MainComponent
    },
    {
      path: ':param',
      pathMatch: 'full',
      outlet: 'router_sidebar',
      component: SidebarComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
