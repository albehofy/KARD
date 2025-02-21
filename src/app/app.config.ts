import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import AuraLight from '@primeng/themes/aura';
import { routes } from './app.routes';
import { provideRouter, RouteReuseStrategy } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { CustomReuseStrategy } from './custom-reuse-strategy'; // Import the custom strategy

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }, // Register the reuse strategy
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
    preset: Aura,
      // Custom options        preset: Aura,
        options: {
          darkModeSelector: false || 'none'
      }
    
      },
    }),
    provideHttpClient(),
  ],
};
