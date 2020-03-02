import { Component } from '@angular/core';
import { routerTransition } from './router.animations';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  bcolor:boolean = false;

  constructor(
    private location: Location
  ) { }

  getState(outlet) {
    let state = outlet.activatedRouteData.state;
    return outlet.activatedRouteData.state;
  }


  goBack(): void {
    this.location.back();
  }

}
