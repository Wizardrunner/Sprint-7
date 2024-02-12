// app.routes.ts
import { Routes } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page-component/welcome-page-component.component';
import { StarshipListComponent } from './components/starships-list/starships-list.component';

export const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'starships', component: StarshipListComponent }
];
