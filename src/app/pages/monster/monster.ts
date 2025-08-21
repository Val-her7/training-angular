import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MonsterType } from '../../utils/monster.utils';

@Component({
  selector: 'app-monster',
  imports: [ReactiveFormsModule],
  templateUrl: './monster.html',
  styleUrl: './monster.css'
})
export class MonsterComponent implements OnInit, OnDestroy {

  private route = inject(ActivatedRoute)
  private router = inject(Router);

  monsterId = signal<number | undefined>(undefined);
  routeSubscription: Subscription | null = null;

  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    type: new FormControl(MonsterType.ELECTRIC, [Validators.required]),
    hp: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(200)]),
    figureCaption: new FormControl('', [Validators.required]),
    attackName: new FormControl('', [Validators.required]),
    attackStrength: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(200)]),
    attackDescription: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
      this.routeSubscription = this.route.params.subscribe(params => {
        this.monsterId.set(params['id'] ? parseInt(params['id']) : undefined);
      })
  }

  ngOnDestroy(): void {
      this.routeSubscription?.unsubscribe();
  }

  submit(event: Event) {
    event.preventDefault;
    
  }
}
