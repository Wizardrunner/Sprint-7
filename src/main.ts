/// <reference types="@angular/localize" />

// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; 
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()), // Habilitar fetch para HttpClient
    provideRouter(routes), // Usar la configuración de rutas definida en app.routes.ts
  ],
}).catch(err => console.error(err));
