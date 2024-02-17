// app.routes.ts
import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome-page-component/welcome-page-component.component';
import { StarshipListComponent } from './components/starships-list/starships-list.component';
import { LoginComponent } from './components/login/login.component'; // Asegúrate de actualizar esta ruta
import { RegisterComponent } from './components/register/register.component'; // Asegúrate de actualizar esta ruta
import { AuthGuard } from './auth.guard'; // Importa tu AuthGuard aquí

export const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  {
    path: 'starships',
    component: StarshipListComponent,
    canActivate: [AuthGuard] // Protege esta ruta con AuthGuard
  },
  { path: 'login', component: LoginComponent }, // Añade la ruta de login
  { path: 'register', component: RegisterComponent }, // Añade la ruta de registro
  // otras rutas...
];
