import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: '',
    redirectTo: '/screens/login',
    pathMatch: 'full',
  },
];
