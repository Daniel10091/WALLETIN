import { Routes } from '@angular/router';
import { ScreensComponent } from './screens.component';

export const screensRoutes: Routes = [
  {
    path: 'home',
    component: ScreensComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: '',
        redirectTo: '/screens/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/screens/home',
    pathMatch: 'full',
  },
];
