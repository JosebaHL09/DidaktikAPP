import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
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
    path: 'puerto-info',
    loadChildren: () => import('./puerto-info/puerto-info.module').then( m => m.PuertoInfoPageModule)
  },
  {

    path: 'ayuntamiento-info',
    loadChildren: () => import('./ayuntamiento-info/ayuntamiento-info.module').then( m => m.AyuntamientoInfoPageModule)

  },
  {
    path: 'estatua-info',
    loadChildren: () => import('./estatua-info/estatua-info.module').then( m => m.EstatuaInfoPageModule)

  },
  {
    path: 'remo-info',
    loadChildren: () => import('./remo-info/remo-info.module').then( m => m.RemoInfoPageModule)
  },
  {
    path: 'castillo-juego',
    loadChildren: () => import('./castillo-juego/castillo-juego.module').then( m => m.CastilloJuegoPageModule)
  },
  {
    path: 'remo-juego',
    loadChildren: () => import('./remo-juego/remo-juego.module').then( m => m.RemoJuegoPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'puerto-juego',
    loadChildren: () => import('./puerto-juego/puerto-juego.module').then( m => m.PuertoJuegoPageModule)
  },  {
    path: 'creditos',
    loadChildren: () => import('./creditos/creditos.module').then( m => m.CreditosPageModule)
  },
  {
    path: 'mural-juego',
    loadChildren: () => import('./mural-juego/mural-juego.module').then( m => m.MuralJuegoPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
