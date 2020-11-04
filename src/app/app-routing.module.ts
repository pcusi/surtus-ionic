import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'retos',
    loadChildren: () => import('./pages/retos/retos.module').then( m => m.RetosPageModule)
  },
  {
    path: 'modulos',
    loadChildren: () => import('./pages/modulos/modulos.module').then( m => m.ModulosPageModule)
  },
  {
    path: 'clases/:id',
    loadChildren: () => import('./pages/clases/clases.module').then( m => m.ClasesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
