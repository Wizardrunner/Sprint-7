// starship-details.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Starship, StarshipService } from '../../services/starships.service'; 
import { PilotCardComponent } from '../pilot-card/pilot-card.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss'],
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
