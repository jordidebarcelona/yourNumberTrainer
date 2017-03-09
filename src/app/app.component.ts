import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><number>Loading number...</number>`,
})

export class AppComponent  { name = 'Angular'; }
