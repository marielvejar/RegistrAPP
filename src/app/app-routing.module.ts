import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./folder/ingresar/ingresar.module').then( m => m.IngresarPageModule)
  },
  {
    path: 'reestablecer',
    loadChildren: () => import('./folder/reestablecer/reestablecer.module').then( m => m.ReestablecerPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./folder/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio/:id',
    loadChildren: () => import('./folder/inicio/inicio.module').then( m => m.InicioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
