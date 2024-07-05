import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Batman', 'Superman', 'Wonder-Woman', 'Flash']
  public removedHero?: string;

  removeLastHero(): void {
    this.removedHero = this.heroNames.pop();
  }

}
