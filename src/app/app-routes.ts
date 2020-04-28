import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module')
      .then(m => m.MainModule)
  }
];
