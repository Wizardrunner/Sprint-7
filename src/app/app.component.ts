// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component'; // Ajusta la ruta según tu estructura de carpetas

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar> <!-- Navbar component -->
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterModule, NavbarComponent], // Añade NavbarComponent aquí
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'star-wars-ships';
}
