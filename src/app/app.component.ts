// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component'; 

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, NavbarComponent]
})
export class AppComponent {
  title = 'star-wars-ships';
}
