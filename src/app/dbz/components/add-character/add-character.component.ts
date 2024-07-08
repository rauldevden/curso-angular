import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from './../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public emitNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  }

  cleanForm(){
    this.character.name = '';
    this.character.power = 0;
  }

  onNewCharacter(){
    this.character.name.length !== 0
      ? this.emitNewCharacter.emit({...this.character})
      : ''

    this.cleanForm();
  }

}
