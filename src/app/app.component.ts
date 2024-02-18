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
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'star-wars-ships';
}
