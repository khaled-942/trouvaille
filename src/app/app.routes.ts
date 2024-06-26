import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/home-page/home-page.component').then(
        (c) => c.HomePageComponent
      ),
  },
  {
    path: 'memories',
    loadComponent: () =>
      import('./features/add-images/add-images.component').then(
        (c) => c.AddImagesComponent
      ),
  },
];
