import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { poaActividad } from 'src/app/model/poaActividad';
import { ApiPoaActividadService } from 'src/app/service/api-poa-actividad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPoaService } from 'src/app/service/api-poa.service';
import { poa } from 'src/app/model/poa';
import { ApiPeModificacionService } from 'src/app/service/api-pe-modificacion.service';
import * as moment from 'moment';
import { ObjetoGasto } from 'src/app/model/objetoGasto';
import { ApiObjetogastoService } from 'src/app/service/api-objetogasto.service';

@Component({
  selector: 'app-editar-actividad',
  templateUrl: './editar-actividad.component.html',
  styleUrls: ['./editar-actividad.component.css']
})
export class EditarActividadComponent implements OnInit {
  menu: menu[];

  modelo: poaActividad = new poaActividad(0, 0, 0, 0, 0, 0, 0, '', '', '', '', 0, '', '', 0, '', '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', 0, 0, 0, 0, 0, 0, '', '', 0, '', '', 0, 0, '', 0, '');
  poamodelo: poa = new poa(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', '');
  listaObjetoGasto: ObjetoGasto[];

  dateInicio: Date = new Date();
  dateFinal: Date = new Date();
  dateMin: Date = new Date();
  dateMax: Date = new Date();
  value: number = 0;

  responsable: boolean = false;
  sinResponsable: boolean = false;
  alert: boolean = false;
  vdateigual: boolean = false;
  vdatemayor: boolean = false;
  vMonto: boolean = false;

  constructor(
    private api: ApiPoaActividadService,
    private apipoa: ApiPoaService,
    private apipe : ApiPeModificacionService,
    private apiobjetogasto: ApiObjetogastoService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.modelo.ID = +this.route.snapshot.params.id;
    this.modelo.OPERACION_ID = +this.route.snapshot.params.operacion;

    this.menu = [{ nombre: 'Editar Actividad', url: '/editar-actividad/' + this.modelo.ID + '/' + this.modelo.OPERACION_ID, N: true, active: 'active' }];
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.api.GetId(this.modelo.ID, this.modelo.OPERACION_ID).subscribe(res => {
      this.modelo = res.modelo;      

      console.log(this.modelo);

      this.dateInicio = new Date(this.modelo.ANIO, this.modelo.MES - 1, this.modelo.DIA)
      this.dateFinal = new Date(this.modelo.FEANIO, this.modelo.FEMES - 1, this.modelo.FEDIA);
      this.value = this.modelo.PROYECCION;

      this.apipoa.GetId(this.modelo.POA_ID).subscribe(res => {
        this.poamodelo = res.modelo;

        this.dateMax = new Date((this.poamodelo.ANIO + 1).toString() + '-1-1');
        this.dateMin = new Date(this.poamodelo.ANIO.toString() + '-1-2');

        this.apiobjetogasto.Get().subscribe(res => {
          this.listaObjetoGasto = res.modelo;
        })

      })

    })
  }

  onRegresar() {
    //this.router.navigate(['/lista-actividad', this.modelo.POA_ID, this.modelo.OPERACION_ID]);
    this.router.navigate(['/poa-proyeccion', this.modelo.POA_ID]);
  }

  onGuardar() {
    if (this.modelo.NOMBRE) {
      let flag = true;

      if(this.modelo.OBJETO_GASTO_ID == 0){
        flag = false;
      }

      if (this.sinResponsable) {
        this.modelo.TIPO_RESPONSABLE = '';
        this.modelo.RESPONSABLE_ID = 0;
      }

      if (this.responsable) {
        if (this.modelo.RESPONSABLE_ID == 0) {
          flag = false;
          this.alert = true;
        }
      }

      if (this.dateInicio == this.dateFinal) {
        flag = false;
        this.vdateigual = true;
      }

      if (this.dateInicio > this.dateFinal) {
        flag = false;
        this.vdatemayor = true;
      }

      if (this.value == 0) {
        flag = false;
        this.vMonto = true;
      }

      if (flag) {
        this.alert = false;

        this.modelo.USR = localStorage.getItem('_u');

        this.modelo.PROYECCION = this.value;
        
        this.modelo.FECHA_INICIO_ESTIMADA_DESCRIPCION = moment(this.dateInicio).locale('es').format('LL');
        this.modelo.FECHA_INICIO_ESTIMADA = moment(this.dateInicio).format('YYYYMMDD');

        this.modelo.FECHA_FINAL_ESTIMADA_DESCRIPCION = moment(this.dateFinal).locale('es').format('LL');
        this.modelo.FECHA_FINAL_ESTIMADA = moment(this.dateFinal).format('YYYYMMDD');

        var contador = 0;
        var FFDate = this.dateInicio;

        while (FFDate <= this.dateFinal) {
          if (FFDate.getDay() == 6 || FFDate.getDay() == 0) {
          } else {
            contador++;
          }

          FFDate.setDate(FFDate.getDate() + 1);
        }

        this.modelo.DIAS = contador;

        this.api.Patch(this.modelo.ID, this.modelo).subscribe(res => {
          this.apipe.PoaProyeccion(this.poamodelo.ID, this.poamodelo).subscribe(res => {
            this.onRegresar();
          })          
        })
      } 

    }
  }

  onCancelar() {
    this.GET();
  }

  onresponsable(event) {
    this.responsable = event.seleccionado;
    this.modelo.TIPO_RESPONSABLE = event.tipoResponsable;
    this.modelo.RESPONSABLE_ID = event.idResponsable;
    this.sinResponsable = event.SinResponsble;
  }

}
