import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'layout-dirty', loadComponent: () => import('./pages/dirty-layout/dirty-layout.component').then(c => c.DirtyLayoutComponent) },
    { path: 'layout-clean', loadComponent: () => import('./pages/clean-layout/clean-layout.component').then(c => c.CleanLayoutComponent) },
    { path: 'layout-clean-fastdom', loadComponent: () => import('./pages/clean-layout-fastdom/clean-layout-fastdom.component').then(c => c.CleanLayoutFastdomComponent) },
    { path: 'layout-clean-fastdom-virtual', loadComponent: () => import('./pages/clean-layout-fastdom-virtual/clean-layout-fastdom-virtual.component').then(c => c.CleanLayoutFastdomVirtualComponent) }
];
