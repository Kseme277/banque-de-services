import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Banque de Service | BS'
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/event-listing/event-listing.component').then((m) => m.EventListingComponent),
    title: 'Banque de Service | Nos services'
  },
  {
    path: 'services/:slug',
    loadComponent: () =>
      import('./pages/event-detail/event-detail.component').then((m) => m.EventDetailComponent)
  },
  { path: 'event-listing.html', redirectTo: 'services', pathMatch: 'full' },
  { path: 'event-detail.html', redirectTo: 'services/location-materiel-agricole', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
