// app.routes.ts
import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome-page-component/welcome-page-component.component';
import { StarshipListComponent } from './components/starships-list/starships-list.component';
import { LoginComponent } from './components/login/login.component'; 
import { RegisterComponent } from './components/register/register.component'; 
import { AuthGuard } from './auth.guard'; 

export const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  {
    path: 'starships',
    component: StarshipListComponent,
    canActivate: [AuthGuard] // Protege esta ruta con AuthGuard
  },
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent }, 
];
