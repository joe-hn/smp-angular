import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { cargo } from 'src/app/model/cargo';
import { ApiCargoService } from 'src/app/service/api-cargo.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalEliminarComponent } from 'src/app/component/modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-lista-cargo',
  templateUrl: './lista-cargo.component.html',
  styleUrls: ['./lista-cargo.component.css']
})
export class ListaCargoComponent implements OnInit {
  menu: menu[];

  lista: cargo[];

  constructor(
    private api: ApiCargoService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) { 

    this.menu = [{ nombre: 'Programas', url: '/lista-programa/', N: true, active: '' },
    { nombre: 'Fuente de Financiamiento', url: '/lista-fuente/', N: true, active: '' },

    { nombre: 'Tipo de Dirección', url: '/lista-tipodireccion/', N: true, active: '' },
    { nombre: 'Dirección', url: '/lista-direccion/', N: true, active: '' },
    
    { nombre: 'Cargo', url: '/lista-cargo/', N: true, active: 'active' },
    { nombre: 'Crear Nuevo Cargo', url: '/nuevo-cargo/', N: false, active: '' },
    { nombre: 'Exportar a Excell', BotonReporte: true },

    { nombre: 'Empleados', url: '/lista-empleado/', N: true, active: '' },
    { nombre: 'Objeto del Gasto', url: '/lista-objetogasto/', N: true, active: '' },];
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.api.Get().subscribe(res => {
      this.lista = res.modelo;
    })
  }

  onRegresar() {
    this.router.navigate(['/lista-operaciones']);
  }

  onEliminar(valor) {
    const dialogRef = this.dialog.open(ModalEliminarComponent);

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.api.Delete(valor.ID, localStorage.getItem('_u')).subscribe(res => {
          this.GET();
        })
      }
    })
  }

  onReporte() {

  }

}
