import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { poa } from 'src/app/model/poa';
import { ApiPoaService } from 'src/app/service/api-poa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { poaActividad } from 'src/app/model/poaActividad';
import { poaProducto } from 'src/app/model/poaProducto';
import { componente } from 'src/app/model/componente';
import { indicador } from 'src/app/model/indicador';
import { ApiPoaActividadService } from 'src/app/service/api-poa-actividad.service';
import { ApiComponenteService } from 'src/app/service/api-componente.service';
import { ApiIndicadorService } from 'src/app/service/api-indicador.service';
import { ApiPoaProductoService } from 'src/app/service/api-poa-producto.service';
import * as moment from 'moment';

@Component({
  selector: 'app-nueva-actividad-subcomponente',
  templateUrl: './nueva-actividad-subcomponente.component.html',
  styleUrls: ['./nueva-actividad-subcomponente.component.css']
})
export class NuevaActividadSubcomponenteComponent implements OnInit {
  menu: menu[];

  poamodelo: poa = new poa(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', '');
  modelo: poaActividad = new poaActividad(0, 0, 0, 0, 0, 0, 0, '', '', '', '', 0, '', '', 0, '', '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, '', '', '', 0, 0, 0, 0, 0, 0, '', '', 0, '', '', 0, 0, '', 0);
  productomodelo: poaProducto = new poaProducto(0, 0, 0, 0, 0, '', '', 0, '', '', '', '', '', 0, '', 0, '', '', 0, '', '', 0);

  lista: poaActividad[];
  componentelista: componente[];
  subcomponentelista: componente[];
  indicadorlista: indicador[];
  productolista: poaProducto[];

  componenteid: number = 0;
  dateInicio: Date = new Date();
  dateFinal: Date = new Date();
  dateValidador: Date = new Date();
  value: number = 0;
  vMonto: boolean = false;

  responsable: boolean = false;
  alert: boolean = false;
  edt: number = 0;

  constructor(
    private api: ApiPoaActividadService,
    private apipoa: ApiPoaService,
    private apicomponente: ApiComponenteService,
    private apiindicador: ApiIndicadorService,
    private apiproducto: ApiPoaProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.poamodelo.ID = +this.route.snapshot.params.id;

    this.menu = [{ nombre: 'Crear Nueva Actividad de Producto de Indicador de Componente', url: '/nueva-actividad/' + this.poamodelo.ID, N: true, active: 'active' }];
  }

  ngOnInit(): void {
    this.apipoa.GetId(this.poamodelo.ID).subscribe(res => {
      this.poamodelo = res.modelo;

      this.apicomponente.GetOperacion(this.poamodelo.OPERACION_ID).subscribe(res => {
        this.componentelista = res.modelo;
      })
    })
  }

  onSeleccionComponente() {
    this.apicomponente.GetSubComponente(this.componenteid).subscribe(res => {
      this.subcomponentelista = res.modelo;
    })
  }

  onSeleccionSubComponente() {
    this.apiindicador.GetComponente(this.modelo.COMPONENTE_ID).subscribe(res => {
      this.indicadorlista = res.modelo;
    })
  }

  onSeleccionIndicador() {
    this.apiproducto.GetIndicador(this.modelo.INDICADOR_ID).subscribe(res => {
      this.productolista = res.modelo;
    })
  }

  onSeleccionProducto() {
    this.GET();
  }

  GET() {
    this.api.GetMaxCount(this.modelo.PRODUCTO_ID, this.poamodelo.ID).subscribe(res => {
      if (res.modelo != null) {
        this.modelo.EDT = res.modelo.EDT_MAX + 1;
      } else {
        this.modelo.EDT = 1;
      }

      this.edt = this.modelo.EDT;

      this.api.GetProducto(this.modelo.PRODUCTO_ID, this.poamodelo.ID, this.poamodelo.OPERACION_ID).subscribe(res => {
        this.lista = res.modelo;

        console.log(this.modelo);
        console.log(this.lista);

        this.apiproducto.GetId(this.modelo.PRODUCTO_ID).subscribe(res => {
          this.productomodelo = res.modelo;
        })
      })
    })
  }

  onRegresar() {
    this.router.navigate(['/poa-proyeccion', this.poamodelo.ID]);
  }

  onGuardar() {
    if (this.modelo.NOMBRE) {
      let flag = true;

      if (this.responsable) {
        if (this.modelo.RESPONSABLE_ID == 0) {
          flag = false;
        }
      }

      if (flag) {
        this.alert = false;

        this.modelo.USR = localStorage.getItem('_u');
        this.modelo.PROYECCION = this.value;
        this.modelo.EDT_DESCRIPCION = this.productomodelo.EDT_DESCRIPCION + '.' + this.modelo.EDT.toString();

        this.modelo.POA_ID = this.poamodelo.ID;
        this.modelo.OPERACION_ID = this.poamodelo.OPERACION_ID;

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

        this.api.Post(this.modelo).subscribe(res => {
          this.onCancelar();
          this.GET();
        })

      } else {
        this.alert = true;
      }

    }
  }

  onReporte() {

  }

  onCancelar() {
    this.modelo.NOMBRE = '';
    this.modelo.EDT = this.edt;
    this.modelo.DESCRIPCION = '';
    this.value = 0;
  }

  onresponsable(event) {
    this.responsable = event.seleccionado;
    this.modelo.TIPO_RESPONSABLE = event.tipoResponsable;
    this.modelo.RESPONSABLE_ID = event.idResponsable;
  }

}
