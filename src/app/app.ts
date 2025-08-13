import { Component, signal, model, computed } from '@angular/core';
import { PlayingCard } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';
import { SearchBar } from "./components/search-bar/search-bar.component";
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [PlayingCard, CommonModule, SearchBar]
  
})
export class App {
  protected readonly title = signal('training-angular');

  monsters!: Monster[];
  search = model('');

  filteredMonsters = computed(() => {
    return this.monsters.filter(monster => monster.name.includes(this.search()))
  })

  constructor() {

    this.monsters = [];

    const monster1 = new Monster();
    monster1.name = "Pikachu";
    monster1.hp = 40;
    monster1.figureCaption = "N°002 Pik";
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = "Carapuce";
    monster2.image = "/img/carapuce.png";
    monster2.type = MonsterType.WATER;
    monster2.hp = 60;
    monster2.figureCaption = "N°003 Car";
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.name = "Bulbizar";
    monster3.image = "/img/bulbizar.png";
    monster3.type = MonsterType.PLANT;
    monster3.hp = 60;
    monster3.figureCaption = "N°004 Bulb";
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.name = "Salameche";
    monster4.image = "/img/salameche.png";
    monster4.type = MonsterType.FIRE;
    monster4.hp = 60;
    monster4.figureCaption = "N°005 Sala";
    this.monsters.push(monster4);
  }

}
