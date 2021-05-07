import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class HelloComponent  {
  @Input() name: string;
}
