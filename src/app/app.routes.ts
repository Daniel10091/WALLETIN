import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./screens/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'screens',
    loadChildren: () => import('./screens/screens.routes').then((m) => m.screensRoutes),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
