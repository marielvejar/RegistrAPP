import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Ingreso', url: '/ingresar', icon: 'arrow-forward-circle' },
    { title: 'Restablecer', url: '/reestablecer', icon: 'paper-plane' },
    { title: 'Leer Código', url: '/folder/Favorites', icon: 'moon' },

  ];
  public labels = ['Sobre Nosotros' ];
  constructor() {}
}
