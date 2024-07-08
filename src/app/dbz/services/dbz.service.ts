import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log(uuid());


@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegetta',
    power: 8000
  },
  {
    id: uuid(),
    name: 'Piccolo',
    power: 3000
  },
  {
    id: uuid(),
    name: 'Gohan',
    power: 6000
  },
  {
    id: uuid(),
    name: 'Freezer',
    power: 8500
  },
  {
    id: uuid(),
    name: 'Majin Boo',
    power: 12000
  },
  {
    id: uuid(),
    name: 'Krillin',
    power: 3000
  },
  {
    id: uuid(),
    name: 'Cell',
    power: 11000
  },
  ];

  addNewCharacter(character: Character) : void{
    const newCharacter :Character = {
      id: uuid(), ...character
    }
    this.characters.push(newCharacter);
  }

  deleteCharacter(index: number) : void{
    this.characters.splice(index,1)
  }

}
