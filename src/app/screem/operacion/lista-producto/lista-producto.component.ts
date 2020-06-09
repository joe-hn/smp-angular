import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { poaProducto } from 'src/app/model/poaProducto';
import { ApiPoaProductoService } from 'src/app/service/api-poa-producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalEliminarComponent } from 'src/app/component/modal-eliminar/modal-eliminar.component';
import { ApiOperacionService } from 'src/app/service/api-operacion.service';
import { operacion } from 'src/app/model/operacion';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {
  menu: menu[];
  modelo: poaProducto = new poaProducto(0, 0, 0, 0, 0, '', '', 0, '', '', '', '', '', 0, '', 0, '', '', 0, '', '', 0);
  modelooperacion: operacion = new operacion(0, 0, '', '', '', '', '', 0, '', '', '', 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  lista: poaProducto[];
  dialog: any;

  constructor(
    private api: ApiPoaProductoService,
    private apioperacion: ApiOperacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.OPERACION_ID = this.route.snapshot.params.id;

    this.menu = [{ nombre: 'Componentes', url: '/lista-componente/' + this.modelo.OPERACION_ID, N: true, active: '' },
    { nombre: 'Sub Componente', url: '/lista-subcomponente/' + this.modelo.OPERACION_ID, N: true, active: '' },
    { nombre: 'Inidicadores', url: '/lista-indicador/' + this.modelo.OPERACION_ID, N: true, active: '' },

    { nombre: 'Productos', url: '/lista-producto/' + this.modelo.OPERACION_ID, N: true, active: 'active' },
    { nombre: 'Crear Nuevo Producto de Indicador de Componente', url: '/nuevo-producto/' + this.modelo.OPERACION_ID, N: false, active: '' },
    { nombre: 'Crear Nuevo Producto de Indicador de Sub Componente', url: '/nuevo-producto-subcomponente/' + this.modelo.OPERACION_ID, N: false, active: '' },
    { nombre: 'Cambiar Orden de EDT', url: '/edt-producto/' + this.modelo.OPERACION_ID, N: false, active: '' }];
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.apioperacion.GetId(this.modelo.OPERACION_ID).subscribe(res => {
      this.modelooperacion = res.modelo;

      this.api.GetOperacion(this.modelo.OPERACION_ID).subscribe(res => {
        this.lista = res.modelo;
      })
    })
  }

  onRegresar() {
    this.router.navigate(['/lista-operaciones'])
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

}
