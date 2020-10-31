import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { poa } from 'src/app/model/poa';
import { ApiPoaService } from 'src/app/service/api-poa.service';
import { ApiPoaActividadService } from 'src/app/service/api-poa-actividad.service';
import { poaActividad } from 'src/app/model/poaActividad';
import { poaDetalle } from 'src/app/model/poaDetalle';
import { ApiPoaDetalleService } from 'src/app/service/api-poa-detalle.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalInformacionGeneralComponent } from 'src/app/component/modal-informacion-general/modal-informacion-general.component';
import { ApiPeModificacionService } from 'src/app/service/api-pe-modificacion.service';

@Component({
  selector: 'app-poa-proyeccion',
  templateUrl: './poa-proyeccion.component.html',
  styleUrls: ['./poa-proyeccion.component.css']
})
export class PoaProyeccionComponent implements OnInit {
  menu: menu[];

  poamodelo: poa = new poa(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', '');
  poaactividadmodelo = new poaActividad(0, 0, 0, 0, 0, 0, 0, '', '', '', '', 0, '', '', 0, '', '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', 0, 0, 0, 0, 0, 0, '', '', 0, '', '', 0, 0, '', 0, '');
  lista: poaActividad[];
  poadetallemodelo: poaDetalle[];
  poadetalleseleccionadamodelo: poaDetalle[];

  estadoEdicion: boolean = false;
  barraestado: boolean = false;

  constructor(
    private dialog: MatDialog,
    private api: ApiPoaService,
    private apiactividad: ApiPoaActividadService,
    private apipoadetalle: ApiPoaDetalleService,
    private apipe: ApiPeModificacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.poamodelo.ID = +this.route.snapshot.params.id;

    this.api.GetId(this.poamodelo.ID).subscribe(res => {
      this.poamodelo = res.modelo;

      this.menu = [{ nombre: 'Programación Financiera', url: '/poa-proyeccion/' + this.poamodelo.ID, N: true, active: 'active' },
      { nombre: 'Nueva Actividad de Producto de Indicador de Componente', url: '/nueva-actividad/' + this.poamodelo.ID, N: false, active: '' },
      { nombre: 'Nueva Actividad de Producto de Indicador de Sub Componente', url: '/nueva-actividad-subcomponente/' + this.poamodelo.ID, N: false, active: '' },
      // { nombre: 'Lista de Actividades', url: '/lista-actividad/' + this.poamodelo.ID + '/' + this.poamodelo.OPERACION_ID, N: false, active: '' },
      { nombre: 'Exportar a Excell', BotonReporte: true }];
    })

  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
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
        OBJETO_GASTO: data.OBJETO_GASTO,
        RESPONSABLE: data.RESPONSABLE,
        FECHA_INICIO_ESTIMADA_DESCRIPCION: data.FECHA_INICIO_ESTIMADA_DESCRIPCION,
        FECHA_FINAL_ESTIMADA_DESCRIPCION: data.FECHA_FINAL_ESTIMADA_DESCRIPCION,
        ID: data.ID,
        OPERACION_ID: data.OPERACION_ID,
        mostrarEdicion: true
      }
    });

  }

  /*
    onGuardar(actividadseleccionada) {
      this.poaactividadmodelo = actividadseleccionada;
      this.poadetalleseleccionadamodelo = this.poadetallemodelo.filter(c => c.ACTIVIDAD_ID == this.poaactividadmodelo.ID);
  
      for (let index = 0; index < this.poadetalleseleccionadamodelo.length; index++) {
        this.poadetalleseleccionadamodelo[index].USR = localStorage.getItem('_u');
      }
  
      this.poaactividadmodelo.DIFERENCIA_PROYECCION = (this.poaactividadmodelo.PROYECCION - this.poaactividadmodelo.PROYECCION_REAL);
  
      this.apipoadetalle.editarProyeccion(this.poadetalleseleccionadamodelo).subscribe(res => {
        this.apipe.ActividadProyeccion(this.poaactividadmodelo.ID, this.poaactividadmodelo).subscribe(res => {
          this.apipe.PoaProyeccionReal(this.poamodelo.ID, this.poamodelo).subscribe(res => {
            
            this.apiactividad.GetOperacion(this.poamodelo.OPERACION_ID).subscribe(res => {
              this.lista = res.modelo;
    
              this.apipoadetalle.GetPoa(this.poamodelo.ID).subscribe(res => {
                this.poadetallemodelo = res.modelo;
              })
            })
          })       
        })
  
      })
  
    }
  */

  onGuardar() {


    for (let index = 0; index < this.lista.length; index++) {
      if (this.lista[index].EDT_M == 1) {


        this.poaactividadmodelo = this.lista[index];
        let _id = this.poaactividadmodelo.ID;

        this.poadetalleseleccionadamodelo = this.poadetallemodelo.filter(c => c.ACTIVIDAD_ID == this.poaactividadmodelo.ID);

        for (let a = 0; a < this.poadetalleseleccionadamodelo.length; a++) {
          this.poadetalleseleccionadamodelo[a].USR = localStorage.getItem('_u');
        }

        this.apipoadetalle.editarProyeccion(this.poadetalleseleccionadamodelo).subscribe(res => {
          this.apipe.ActividadProyeccion(_id, this.poaactividadmodelo).subscribe(res => {
            this.apipe.PoaProyeccionReal(this.poamodelo.ID, this.poamodelo).subscribe(res => {

              this.apipe.Operacion(this.poamodelo.OPERACION_ID, this.poamodelo).subscribe(res => {
                this.apiactividad.GetOperacion(this.poamodelo.OPERACION_ID).subscribe(res => {
                  this.lista = res.modelo;

                  this.apipoadetalle.GetPoa(this.poamodelo.ID).subscribe(res => {
                    this.poadetallemodelo = res.modelo;

                    this.estadoEdicion = false;
                  })
                })
              })

            })
          })

        })


      }
    }


  }

  onCancelar() {
    this.estadoEdicion = false;
    this.GET();
  }

  onSumatoria(actividadid) {
    const sum = this.poadetallemodelo.filter(c => c.ACTIVIDAD_ID == actividadid).reduce((sum, current) => sum + current.PROYECCION, 0);

    for (let index = 0; index < this.lista.length; index++) {
      if (this.lista[index].ID == actividadid) {
        this.lista[index].PROYECCION_REAL = sum;
        this.lista[index].EDT_M = 1;
        this.estadoEdicion = true;
      }
    }

  }

}
