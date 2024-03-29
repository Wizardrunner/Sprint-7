// movie-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Movie {
  title: string;
  episode_id: number;
  url: string; // URL de SWAPI para extraer el ID
}

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  getImageUrl(): string {
    const id = this.extractIdFromSwapiUrl(this.movie.url);
    return `https://starwars-visualguide.com/assets/img/films/${id}.jpg`;
  }

  private extractIdFromSwapiUrl(swapiUrl: string): string {
    const match = swapiUrl.match(/\/([0-9]+)\/$/);
    return match ? match[1] : '';
  }
}
