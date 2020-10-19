import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { tipoDireccion } from 'src/app/model/tipoDireccion';
import { ApiTipoDireccionService } from 'src/app/service/api-tipo-direccion.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalEliminarComponent } from 'src/app/component/modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-lista-tipo-direccion',
  templateUrl: './lista-tipo-direccion.component.html',
  styleUrls: ['./lista-tipo-direccion.component.css']
})
export class ListaTipoDireccionComponent implements OnInit {
  menu: menu[];

  lista: tipoDireccion[]

  constructor(
    private api: ApiTipoDireccionService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.menu = [{ nombre: 'Programas', url: '/lista-programa/', N: true, active: '' },
    { nombre: 'Fuente de Financiamiento', url: '/lista-fuente/', N: true, active: '' },    

    { nombre: 'Tipo de Dirección', url: '/lista-tipodireccion/', N: true, active: 'active' },
    { nombre: 'Crear Nueva Fuente de Financiamiento', url: '/nuevo-tipodireccion/', N: false, active: '' },
    { nombre: 'Exportar a Excell', BotonReporte: true },

    { nombre: 'Dirección', url: '/lista-direccion/', N: true, active: '' },
    { nombre: 'Cargo', url: '/lista-cargo/', N: true, active: '' },
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
