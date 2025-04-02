import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'personajes',
    loadChildren: () => import('./pages/personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./pages/items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'mecanicas',
    loadChildren: () => import('./pages/mecanicas/mecanicas.module').then( m => m.MecanicasPageModule)
  },
  {
    path: 'escenarios',
    loadChildren: () => import('./pages/escenarios/escenarios.module').then( m => m.EscenariosPageModule)
  },  {
    path: 'sobrenosotros',
    loadChildren: () => import('./pages/sobrenosotros/sobrenosotros.module').then( m => m.SobrenosotrosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
