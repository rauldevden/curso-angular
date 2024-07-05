import { ListComponent } from './components/list/list.component';
import { HeroComponent } from "./components/hero/hero.component";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    HeroComponent,
    ListComponent,
  ],
  exports:[
    HeroComponent,
    ListComponent,
  ],
  imports:[
    CommonModule
  ]
})

export class HeroesModule{};
