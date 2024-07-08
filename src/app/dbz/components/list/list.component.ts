import { Component, Input, EventEmitter, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public emitDeleteCharacter: EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList: Character[] =[{
    name:'Trunks',
    power: 10
  }]

  onDeleteCharacter(index: number):void{
    this.emitDeleteCharacter.emit(index);
  }

}
