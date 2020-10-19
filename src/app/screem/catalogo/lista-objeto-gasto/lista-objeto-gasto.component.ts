import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalEliminarComponent } from 'src/app/component/modal-eliminar/modal-eliminar.component';
import { ObjetoGasto } from 'src/app/model/objetoGasto';
import { ApiObjetogastoService } from 'src/app/service/api-objetogasto.service';

@Component({
  selector: 'app-lista-objeto-gasto',
  templateUrl: './lista-objeto-gasto.component.html',
  styleUrls: ['./lista-objeto-gasto.component.css']
})
export class ListaObjetoGastoComponent implements OnInit {
  menu: menu[];

  lista: ObjetoGasto[];

  constructor(
    private api: ApiObjetogastoService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) { 

    this.menu = [{ nombre: 'Programas', url: '/lista-programa/', N: true, active: '' },
    { nombre: 'Fuente de Financiamiento', url: '/lista-fuente/', N: true, active: '' },
    { nombre: 'Tipo de Dirección', url: '/lista-tipodireccion/', N: true, active: '' },
    { nombre: 'Dirección', url: '/lista-direccion/', N: true, active: '' },
    { nombre: 'Cargo', url: '/lista-cargo/', N: true, active: '' },
    { nombre: 'Empleados', url: '/lista-empleado/', N: true, active: '' },
    
    { nombre: 'Objeto del Gasto', url: '/lista-objetogasto/', N: true, active: 'active' },
    { nombre: 'Crear Nuevo Objeto del Gasto', url: '/nuevo-objetogasto/', N: false, active: '' },
    { nombre: 'Exportar a Excell', BotonReporte: true },];
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
