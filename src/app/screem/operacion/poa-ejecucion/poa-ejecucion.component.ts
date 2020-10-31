import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { poa } from 'src/app/model/poa';
import { ApiPoaService } from 'src/app/service/api-poa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { poaActividad } from 'src/app/model/poaActividad';
import { poaDetalle } from 'src/app/model/poaDetalle';
import { MatDialog } from '@angular/material/dialog';
import { ApiPoaActividadService } from 'src/app/service/api-poa-actividad.service';
import { ApiPoaDetalleService } from 'src/app/service/api-poa-detalle.service';
import { ModalInformacionGeneralComponent } from 'src/app/component/modal-informacion-general/modal-informacion-general.component';
import { ApiPeModificacionService } from 'src/app/service/api-pe-modificacion.service';

@Component({
  selector: 'app-poa-ejecucion',
  templateUrl: './poa-ejecucion.component.html',
  styleUrls: ['./poa-ejecucion.component.css']
})
export class PoaEjecucionComponent implements OnInit {
  menu: menu[];

  poamodelo: poa = new poa(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', '');
  poaactividadmodelo = new poaActividad(0, 0, 0, 0, 0, 0, 0, '', '', '', '', 0, '', '', 0, '', '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', 0, 0, 0, 0, 0, 0, '', '', 0, '', '', 0, 0, '', 0, '');
  lista: poaActividad[];
  poadetallemodelo: poaDetalle[];
  poadetalleseleccionadamodelo: poaDetalle[];

  constructor(
    private dialog: MatDialog,
    private api: ApiPoaService,
    private apiactividad: ApiPoaActividadService,
    private apipoadetalle: ApiPoaDetalleService,
    private apipe: ApiPeModificacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.poamodelo.ID = this.route.snapshot.params.id;

    this.api.GetId(this.poamodelo.ID).subscribe(res => {
      this.poamodelo = res.modelo;

      this.menu = [{ nombre: 'Ejecución Financiera', url: '/poa-ejecución/' + this.poamodelo.ID, N: true, active: 'active' },
      { nombre: 'Exportar a Excell', BotonReporte: true }];
    })
  }

  ngOnInit(): void {
    this.api.GetId(this.poamodelo.ID).subscribe(res => {
      this.poamodelo = res.modelo;

      this.apiactividad.GetOperacion(this.poamodelo.OPERACION_ID).subscribe(res => {
        this.lista = res.modelo;

        this.apipoadetalle.GetPoa(this.poamodelo.ID).subscribe(res => {
          this.poadetallemodelo = res.modelo;
        })
      })

    })
  }

  onRegresar() {
    this.router.navigate(['/poa-operacion', this.poamodelo.OPERACION_ID]);
  }

  onReporte() {

  }

  onInformacionGeneral(data) {
    console.log(data);
    const dialogRef = this.dialog.open(ModalInformacionGeneralComponent, {
      width: '800px',
      data: {
        COMPONENTE: data.COMPONENTE,
        SUB_COMPONENTE: data.SUB_COMPONENTE,
        INDICADOR: data.INDICADOR,
        PRODUCTO: data.PRODUCTO,
        EDT_NOMBRE: data.EDT_NOMBRE,
        DESCRIPCION: data.DESCRIPCION,
        RESPONSABLE: data.RESPONSABLE,
        FECHA_INICIO_ESTIMADA_DESCRIPCION: data.FECHA_INICIO_ESTIMADA_DESCRIPCION,
        FECHA_FINAL_ESTIMADA_DESCRIPCION: data.FECHA_FINAL_ESTIMADA_DESCRIPCION,
        mostrarEdicion: false
      }
    });

  }

  onGuardar(actividadseleccionada) {
    this.poaactividadmodelo = actividadseleccionada;
    this.poadetalleseleccionadamodelo = this.poadetallemodelo.filter(c => c.ACTIVIDAD_ID == this.poaactividadmodelo.ID);

    for (let index = 0; index < this.poadetalleseleccionadamodelo.length; index++) {
      this.poadetalleseleccionadamodelo[index].USR = localStorage.getItem('_u');
    }

    this.apipoadetalle.editarEjecucion(this.poadetalleseleccionadamodelo).subscribe(res => {
      this.apipe.ActividadEjecucion(this.poaactividadmodelo.ID, this.poaactividadmodelo).subscribe(res => {
        this.apipe.PoaEjecucionReal(this.poamodelo.ID, this.poamodelo).subscribe(res => {

          this.apipe.Operacion(this.poamodelo.OPERACION_ID, this.poamodelo).subscribe(res => {
            this.apiactividad.GetOperacion(this.poamodelo.OPERACION_ID).subscribe(res => {
              this.lista = res.modelo;

              this.apipoadetalle.GetPoa(this.poamodelo.ID).subscribe(res => {
                this.poadetallemodelo = res.modelo;
              })
            })
          })

        })
      })
    })

  }

}
