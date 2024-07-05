import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>
    Counter: {{counter}}
  </h3>
  <div>
    <button (click)="add(1)">+1</button>
    <button (click)="restartCounter()">Reset</button>
    <button (click)="subtract(1)">-1</button>
  </div>
  `
})

export class CounterComponent {
  public title:string = 'Mi primera app de Angular';
  public counter: number = 10;

  add(num: number):void{
    this.counter += num;
  }

  subtract(num: number):void{
    this.counter -= num;
  }

  restartCounter():void{
    this.counter = 10;
  }

}
