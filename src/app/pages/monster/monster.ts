import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

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

  name = new FormControl('', [Validators.required]);
  hp = new FormControl(0, [Validators.required, Validators.min(1), Validators.max(200)]);

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
    console.log(this.name.value);
    
  }
}
