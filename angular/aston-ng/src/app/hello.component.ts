import { Component } from '@angular/core';

@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
})
export class HelloComponent {
    title = 'Hello';
    message = '';
    name = '';

    changeColor(): string {
      switch (this.message) {
        case 'bonjour':
          return 'royalblue';
        case 'hello':
          return 'yellow';
        default:
          return 'purple';
      }
    }
  
    changeName(event: Event): void {
      const inputElem = <HTMLInputElement> event.target;
      this.name = inputElem.value;
    }
}
