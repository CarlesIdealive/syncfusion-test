import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'common',
    loadComponent: () => import('./pages/common/common.component').then(m => m.CommonComponent)
  },
  {
    path: 'grid',
    loadComponent: () => import('./pages/grid/grid.component').then(m => m.GridComponent)
  },
  {
    path: 'animation',
    loadComponent: () => import('./pages/animation/animation.component').then(m => m.AnimationComponent)
  },
  {
    path: 'drag-drop',
    loadComponent: () => import('./pages/drag-drop/drag-drop.component').then(m => m.DragDropComponent)
  },
  {
    path: 'template',
    loadComponent: () => import('./pages/template/template.component').then(m => m.TemplateComponent)
  },
  {
    path: 'i18n',
    loadComponent: () => import('./pages/i18n/i18n.component').then(m => m.I18nComponent)
  },
  {
    path:'',
    redirectTo: 'common',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadComponent: () => import('./pages/error/error.component').then(m => m.ErrorComponent)
  }


];
