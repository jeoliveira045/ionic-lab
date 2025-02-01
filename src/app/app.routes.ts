import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  // }
  {
    path: '',
    loadComponent: () => import('./sidebar/sidebar.page').then(m => m.SidebarPage)
  }
];
