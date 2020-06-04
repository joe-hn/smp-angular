import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';

@Component({
  selector: 'app-iniciocatalogo',
  templateUrl: './iniciocatalogo.component.html',
  styleUrls: ['./iniciocatalogo.component.css']
})
export class IniciocatalogoComponent implements OnInit {
  menu: menu[];

  constructor() {
    this.menu = [{ nombre: 'Operación', url: '/iniciooperacion', N: true, active: '' },
    { nombre: 'Catálogos', url: '/iniciocatalogo', N: true, active: 'active' },
    { nombre: 'Programas', url: '/iniciocatalogo', N: false, active: '' },
    { nombre: 'Fuente', url: '/iniciocatalogo', N: false, active: '' },
    { nombre: 'Seguridad', url: '/inicioseguridad', N: true, active: '' }]
  }

  ngOnInit(): void {
  }

  onRegresar() {
    console.log('------------ REGRESAR -------------');
  }

}
