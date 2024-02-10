// starship.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Definir interfaces aquí
interface StarshipApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Starship[];
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  url: string;
  cargo_capacity: string;
  MGLT: string;
  consumables: string;
  crew: string;
  hyperdrive_rating: string;
  created: string;
  edited: string;
  passengers: string;
  max_atmosphering_speed: string;
  pilots: string;
  id?: string; // Opcional, agregaremos esta propiedad
}

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  private baseUrl = 'https://swapi.py4e.com/api/starships';

  constructor(private http: HttpClient) {}

  getStarships(page: number = 1): Observable<StarshipApiResponse> {
    return this.http.get<StarshipApiResponse>(`${this.baseUrl}/?page=${page}`).pipe(
      map(response => ({
        ...response,
        results: response.results.map(starship => ({
          ...starship,
          id: this.extractId(starship.url),
        })),
      }))
    );
  }

  private extractId(url: string): string {
    const idMatch = url.match(/\/starships\/(\d+)\/$/);
    return idMatch ? idMatch[1] : '';
  }
}
