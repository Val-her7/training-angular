import { Routes } from '@angular/router';
import { MonsterListComponent } from './pages/monster-list/monster-list';
import { MonsterComponent } from './pages/monster/monster';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},
    {
    path: 'home',
    component: MonsterListComponent
}, {
    path: 'monster',
    children: [{
        path: '',
        component: MonsterComponent
    }, {
        path: ":id",
        component: MonsterComponent
    }]
}, {
    path: '**',
    component: NotFoundComponent
}];
