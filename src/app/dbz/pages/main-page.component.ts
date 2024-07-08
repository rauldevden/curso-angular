import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [{
    name: 'Goku',
    power: 9500
  },
  {
    name: 'Vegetta',
    power: 8000
  },
  {
    name: 'Piccolo',
    power: 3000
  },
  {
    name: 'Gohan',
    power: 6000
  },
  {
    name: 'Freezer',
    power: 8500
  },
  {
    name: 'Majin Boo',
    power: 12000
  },
  {
    name: 'Krillin',
    power: 3000
  },
  {
    name: 'Cell',
    power: 11000
  },
  ];

  addNewCharacter(character: Character) : void{
    this.characters.push(character)
  }

  deleteCharacter(index: number) : void{
    this.characters.splice(index,1)
  }

}
