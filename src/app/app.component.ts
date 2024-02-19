// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'star-wars-ships';
}
