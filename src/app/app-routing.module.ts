import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {InscritoGuard} from "./guards/inscrito.guard";

const routes: Routes = [
  {
    path: 'principal',
    canActivate: [InscritoGuard],
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: '',
    redirectTo: 'iniciar',
    pathMatch: 'full'
  },
  {
    path: 'retos',
    canActivate: [InscritoGuard],
    loadChildren: () => import('./pages/retos/retos.module').then( m => m.RetosPageModule)
  },
  {
    path: 'modulos/:level',
    loadChildren: () => import('./pages/modulos/modulos.module').then( m => m.ModulosPageModule)
  },
  {
    path: 'modulos',
    canActivate: [InscritoGuard],
    loadChildren: () => import('./pages/modulos/modulos.module').then( m => m.ModulosPageModule )
  },
  {
    path: 'clases/:id',
    loadChildren: () => import('./pages/clases/clases.module').then( m => m.ClasesPageModule)
  },
  {
    path: 'guia',
    canActivate: [InscritoGuard],
    loadChildren: () => import('./pages/guia/guia.module').then( m => m.GuiaPageModule)
  },
  {
    path: 'onboarding',
    canActivate: [InscritoGuard],
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'loading',
    canActivate: [InscritoGuard],
    loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'glosario',
    canActivate: [InscritoGuard],
    loadChildren: () => import('./pages/glosario/glosario.module').then( m => m.GlosarioPageModule)
  },
  {
    path: 'aprendizaje',
    canActivate: [InscritoGuard],
    loadChildren: () => import('./pages/aprendizaje/aprendizaje.module').then( m => m.AprendizajePageModule)
  },
  {
    path: 'retos-modal',
    canActivate: [InscritoGuard],
    loadChildren: () => import('./modals/retos-modal/retos-modal.module').then( m => m.RetosModalPageModule)
  },
  {
    path: 'inscripcion',
    loadChildren: () => import('./pages/inscripcion/inscripcion.module').then( m => m.InscripcionPageModule)
  },
  {
    path: 'iniciar',
    loadChildren: () => import('./pages/iniciar/iniciar.module').then( m => m.IniciarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
