import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  // }
  {
    path: '',
    loadComponent: () => import('./manga-detail/lab').then(m => m.LabNavComponent)
  },
  {
    path: 'manga-chapter-images',
    loadComponent: () => import('./manga-chapter-images/manga-chapter-images.page').then( m => m.MangaChapterImagesPage)
  },
  // {
  //   path: 'manga/detail/:id',
  //   loadComponent: () => import('./manga-detail/manga-detail.page').then(m => m.MangaDetailPage)
  // }
];
