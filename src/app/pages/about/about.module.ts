import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    SidebarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
