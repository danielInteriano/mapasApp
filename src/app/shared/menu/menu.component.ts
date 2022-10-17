import { Component } from '@angular/core';

interface Menu {
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MenuComponent {
  menu: Menu[] = [
    {
      ruta: '/mapas/fullscreem',
      nombre: 'Full Screem',
    },
    {
      ruta: '/mapas/zoom-range',
      nombre: 'Zoom Range',
    },
    {
      ruta: '/mapas/marcadores',
      nombre: 'Marcadores',
    },
    {
      ruta: '/mapas/propiedades',
      nombre: 'Propiedades',
    },
  ];

  constructor() {}
}
