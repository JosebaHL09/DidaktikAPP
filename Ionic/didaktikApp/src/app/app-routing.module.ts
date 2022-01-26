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
    loadChildren: () => import('./home/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'instrucciones',
    loadChildren: () => import('./instrucciones/instrucciones.module').then( m => m.InstruccionesPageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
  },
  {
    path: 'gunea-info',
    loadChildren: () => import('./gunea-info/gunea-info.module').then( m => m.GuneaInfoPageModule)
  },
  {
    path: 'castillo-info',
    loadChildren: () => import('./castillo-info/castillo-info.module').then( m => m.CastilloInfoPageModule)
  },
  {
    path: 'mural-info',
    loadChildren: () => import('./mural-info/mural-info.module').then( m => m.MuralInfoPageModule)
  },
  {
    path: 'estatua-info',
    loadChildren: () => import('./estatua-info/estatua-info.module').then( m => m.EstatuaInfoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
