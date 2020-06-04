import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { operacion } from 'src/app/model/operacion';
import { ApiOperacionService } from 'src/app/service/api-operacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-operacion',
  templateUrl: './lista-operacion.component.html',
  styleUrls: ['./lista-operacion.component.css']
})
export class ListaOperacionComponent implements OnInit {
  menu: menu[] = [{ nombre: 'Operaciones', url: '/lista-operaciones', N: true, active: 'active' },
  { nombre: 'Crear Nueva Operación', url: '/nueva-operacion', N: false, active: '' },
  { nombre: 'Catálogos', url: '/lista-operaciones', N: true, active: '' },
  { nombre: 'Seguridad', url: '/lista-operaciones', N: true, active: '' }];

  modelo: operacion[];

  constructor(
    private api: ApiOperacionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.api.Get().subscribe(res => {
      this.modelo = res.modelo;
    })
  }

  onRegresar() {
    this.router.navigate(['/login']);
  }

}
