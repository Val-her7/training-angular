import { Component, signal } from '@angular/core';
import { PlayingCard } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';
import { SearchBar } from "./components/search-bar/search-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [PlayingCard, SearchBar]
  
})
export class App {
  protected readonly title = signal('training-angular');

  monster1!: Monster;

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = "Pik";
    this.monster1.hp = 40;
    this.monster1.figureCaption = "N°002 Pik"
  }
}
