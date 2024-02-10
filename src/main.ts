// main.ts
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Asegúrate de que la ruta aquí sea correcta
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()), // Habilitar fetch para HttpClient
    provideRouter(routes), // Usar la configuración de rutas definida en app.routes.ts
    // Agrega cualquier otro proveedor que necesites aquí
  ],
}).catch(err => console.error(err));
