// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarshipListComponent } from './components/starships-list/starships-list.component'; // Asegúrate de que la ruta sea correcta


@Component({
  selector: 'app-root',
  template: `
  <app-starship-list></app-starship-list>
`,
  standalone: true,
  imports: [StarshipListComponent, RouterOutlet], // Correctamente importado RouterOutlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'star-wars-ships';
}
