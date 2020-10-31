import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { indicador } from 'src/app/model/indicador';
import { ApiIndicadorService } from 'src/app/service/api-indicador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { operacion } from 'src/app/model/operacion';
import { ApiOperacionService } from 'src/app/service/api-operacion.service';
import { ModalEliminarComponent } from 'src/app/component/modal-eliminar/modal-eliminar.component';
import { ApiXlsxService } from 'src/app/service/api-xlsx.service';

@Component({
  selector: 'app-lista-indicador',
  templateUrl: './lista-indicador.component.html',
  styleUrls: ['./lista-indicador.component.css']
})
export class ListaIndicadorComponent implements OnInit {
  menu: menu[];

  modelo: indicador = new indicador(0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', '', 0, '', '', 0, 0);
  lista: indicador[];
  reporte: indicador[];
  modelooperacion: operacion = new operacion(0, 0, '', '', '', '', '', 0, '', '', '', 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  dialog: any;

  constructor(
    private api: ApiIndicadorService,
    private apioperacion: ApiOperacionService,
    private apixlsx: ApiXlsxService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.OPERACION_ID = this.route.snapshot.params.id;

    this.menu = [{ nombre: 'Componentes', url: '/lista-componente/' + this.modelo.OPERACION_ID, N: true, active: '' },
    { nombre: 'Sub Componente', url: '/lista-subcomponente/' + this.modelo.OPERACION_ID, N: true, active: '' },

    { nombre: 'Inidicadores', url: '/lista-indicador/' + this.modelo.OPERACION_ID, N: true, active: 'active' },
    { nombre: 'Crear Nuevo Indicador de Componente', url: '/nuevo-indicador/' + this.modelo.OPERACION_ID, N: false, active: '' },
    { nombre: 'Crear Nuevo Indicador de Sub Componente', url: '/nuevo-indicador-subcomponente/' + this.modelo.OPERACION_ID, N: false, active: '' },
    { nombre: 'Cambiar Orden de EDT', url: '/edt-indicador/' + this.modelo.OPERACION_ID, N: false, active: '' },
    { nombre: 'Exportar a Excell', BotonReporte: true },

    { nombre: 'Productos', url: '/lista-producto/' + this.modelo.OPERACION_ID, N: true, active: '' }];
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

  onReporte() {
    this.api.ReporteOperacionIndicador(this.modelo.OPERACION_ID).subscribe(res => {
      this.reporte = res.modelo;

      this.apixlsx.exportToExcel(this.reporte, 'Indicadores de la Operación ' + this.modelooperacion.OPERACION);
    })
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
