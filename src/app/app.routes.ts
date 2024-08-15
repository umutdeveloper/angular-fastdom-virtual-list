import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/clean/clean.component').then((c) => c.CleanComponent),
  },
];
