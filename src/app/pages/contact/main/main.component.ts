import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  public param!: string | null;

  constructor(
    private route: ActivatedRoute
  ){
    this.param = this.route.snapshot.paramMap.get('param');
  }

}
