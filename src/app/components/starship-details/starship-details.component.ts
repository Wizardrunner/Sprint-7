// starship-details.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Starship, StarshipService } from '../../services/starships.service'; 
import { PilotCardComponent } from '../pilot-card/pilot-card.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-starship-details',
  styleUrls: ['./starship-details.component.scss'],
  template: `
<div class="starship-details-container" *ngIf="starship">
  <div class="image-container">
    <img *ngIf="starship.id" [src]="getImageUrl(starship.id)" [alt]="starship.name" (error)="onImageError($event)">
  </div>
  <div class="data-container">
    <button (click)="close.emit()" class="close-button">X</button>
    <h3>{{ starship.name }}</h3>
      <h4>{{ starship.model }}</h4>
      <p>Creation date: {{ starship.created }}</p>
      <p>Modification date: {{ starship.edited }}</p>
      <p>Manufacturer: {{ starship.manufacturer }}</p>
      <p>Cost in credits: {{ starship.cost_in_credits }}</p>
      <p>Megalights per hour: {{ starship.MGLT }}</p>
      <p>Hyperdrive Rating: {{ starship.hyperdrive_rating }}</p>
      <p>Maximum speed in atmosphere: {{ starship.max_atmosphering_speed }}</p>
      <p>Length: {{ starship.length }} meters</p>
      <p>Load capacity: {{ starship.cargo_capacity }}</p>
      <p>Consumables: {{ starship.consumables }}</p>
      <p>Crew: {{ starship.crew }}</p>
      <p>Passengers: {{ starship.passengers }}</p>
      <ng-container *ngIf="pilots.length > 0">
      <h4>Pilots:</h4>
      <app-pilot-card *ngFor="let pilot of pilots" [pilot]="pilot"></app-pilot-card>
    </ng-container>
    <ng-container *ngIf="movies.length > 0">
      <h4>Movies:</h4>
      <app-movie-card *ngFor="let movie of movies" [movie]="movie"></app-movie-card>
    </ng-container>
  </div>
</div>
  `,
  // Remember to include PilotCardComponent and MovieCardComponent in your module's declarations if not using standalone components
  standalone: true,
  imports: [CommonModule, PilotCardComponent, MovieCardComponent]
})
export class StarshipDetailsComponent implements OnInit {
  @Input() starship?: Starship;
  @Output() close = new EventEmitter<void>();
  pilots: any[] = [];
  movies: any[] = [];

  constructor(private starshipService: StarshipService) {}

  ngOnInit() {
    if (this.starship) {
      // Assuming you have methods in StarshipService to fetch pilots and movies
      // And assuming your starship object has arrays of URLs for pilots and movies
      this.starshipService.getPilotsDetails(this.starship.pilots).subscribe(pilots => this.pilots = pilots);
      this.starshipService.getMoviesDetails(this.starship.films).subscribe(movies => this.movies = movies);
    }
  }

  getImageUrl(id: string): string {
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  }

  onImageError(event: any) {
    event.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
  }
}
