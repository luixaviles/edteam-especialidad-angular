import {Component} from '@angular/core';
@Component({
selector: 'ed-root', // <ed-root></ed-root>
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    console.log('Creando Objeto: AppComponent');
  }

}

