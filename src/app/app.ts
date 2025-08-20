import { Component, signal, model, computed, inject } from '@angular/core';
import { PlayingCard } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';
import { SearchBar } from "./components/search-bar/search-bar.component";
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';
import { MonsterService } from './services/monster/monster.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [PlayingCard, CommonModule, SearchBar]
  
})
export class App {
  protected readonly title = signal('training-angular');

  monsterService = inject(MonsterService);

  monsters = signal<Monster[]>([]);
  search = model('');

  filteredMonsters = computed(() => {
    return this.monsters().filter(monster => monster.name.includes(this.search()))
  })

  constructor() {
    this.monsters.set(this.monsterService.getAll());
  }

  addMonster() {
    const genericMonster = new Monster();
    this.monsterService.add(genericMonster);
    this.monsters.set(this.monsterService.getAll());
  }

}
