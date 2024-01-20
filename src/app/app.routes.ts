import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: 'mock',
    children: [
      {
        path: 'servers',
        loadChildren: () =>
          import('./mock-servers/mock-servers.module').then(
            (m) => m.MockServersModule
          ),
      },
      {
        path: 'collections',
        loadChildren: () =>
          import('./mock-collections/mock-collections.module').then(
            (m) => m.MockCollectionsModule
          ),
      },
    ],
  },
];
