// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome-page-component/welcome-page-component.component'; // Asegúrate de que el nombre y la ruta sean correctos
import { StarshipListComponent } from './components/starships-list/starships-list.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'starships', component: StarshipListComponent },
  // otras rutas...
];
