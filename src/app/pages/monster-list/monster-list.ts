import { Component, inject, signal, model, computed } from '@angular/core';
import { MonsterService } from '../../services/monster/monster.service';
import { Monster } from '../../models/monster.model';
import { PlayingCard } from '../../components/playing-card/playing-card.component';
import { CommonModule } from '@angular/common';
import { SearchBar } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-monster-list',
  imports: [PlayingCard, CommonModule, SearchBar],
  templateUrl: './monster-list.html',
  styleUrl: './monster-list.css'
})
export class MonsterListComponent {
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
