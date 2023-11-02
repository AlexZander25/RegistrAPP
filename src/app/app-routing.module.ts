import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'primera',
    pathMatch: 'full'
  },
  {
    path: 'primera',
    loadChildren: () => import('./primera/primera.module').then(m => m.PrimeraPageModule)
  },
  {
    path: 'segunda',
    loadChildren: () => import('./segunda/segunda.module').then(m => m.SegundaPageModule)
  },
  {
    path: 'tercera',
    loadChildren: () => import('./tercera/tercera.module').then(m => m.TerceraPageModule)
  },
  {
    path: 'cuarta',
    loadChildren: () => import('./cuarta/cuarta.module').then(m => m.CuartaPageModule)
  },
  {
    path: 'quinta',
    loadChildren: () => import('./quinta/quinta.module').then(m => m.QuintaPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
