import { Component } from '@angular/core';

interface Elemento{
  icono: string;
  nombre: string;
  ruta: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
//Interfaz que integra las rutas y el nombre para que aparezcan en el menú de hamburguesa
  elementos: Elemento[]=[
    {
      icono: '../assets/icon/house.svg',
      nombre: 'Home',
      ruta:'/home',
    },
    {
      icono: '../assets/icon/knight.svg',
      nombre: 'Personajes',
      ruta:'/personajes'
    },
    {
      icono: '../assets/icon/sword.svg',
      nombre: 'Items',
      ruta:'/items'
    },
    {
      icono:'../assets/icon/controller.svg',
      nombre: 'Mecanicas',
      ruta: '/mecanicas'
    },
    {
      icono:'../assets/icon/nature.svg',
      nombre: 'Escenarios',
      ruta: '/escenarios'
    },
    {
      icono:'../assets/icon/nosotros.svg',
      nombre: 'Sobre Nosotros',
      ruta: '/sobrenosotros'
    }
  ]

  constructor() {}
}
