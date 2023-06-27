import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public param!: string | null;

  constructor(
    private route: ActivatedRoute
  ){
    this.param = this.route.snapshot.paramMap.get('param');
  }

}
