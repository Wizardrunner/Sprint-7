// starship.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  private baseUrl = 'https://swapi.py4e.com/api/starships'; // Asegúrate de que esta es la URL actualizada

  constructor(private http: HttpClient) {}

  getStarships(page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}/?page=${page}`);
  }
}
