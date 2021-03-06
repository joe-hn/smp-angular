import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { indicador } from 'src/app/model/indicador';
import { componente } from 'src/app/model/componente';
import { ApiIndicadorService } from 'src/app/service/api-indicador.service';
import { ApiComponenteService } from 'src/app/service/api-componente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-indicador-subcomponente',
  templateUrl: './nuevo-indicador-subcomponente.component.html',
  styleUrls: ['./nuevo-indicador-subcomponente.component.css']
})
export class NuevoIndicadorSubcomponenteComponent implements OnInit {
  menu: menu[];
  modelo: indicador = new indicador(0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', '', 0, '', '', 0, 0, false);
  modelocomponente = new componente(0, 0, 0, '', '', 0, 0, '', '', 0, 0, 0, '', '', '', 0, '', '', 0, 0);
  listacomponente: componente[];
  listasubcomponente: componente[];

  lista: indicador[];
  componente_id: number;
  edt: number;
  responsable: boolean = false;
  alert: boolean = false;

  constructor(
    private api: ApiIndicadorService,
    private apicomponente: ApiComponenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.OPERACION_ID = this.route.snapshot.params.id;

    this.menu = [{ nombre: 'Crear Nuevo Indicador de Sub Componente', url: '/nuevo-indicador-subcomponente/' + this.modelo.OPERACION_ID, N: true, active: 'active' }];
  }

  ngOnInit(): void {
    this.apicomponente.GetOperacion(this.modelo.OPERACION_ID).subscribe(res => {
      this.listacomponente = res.modelo;
    })
  }

  GET_SUBCOMPONENTE() {
    this.apicomponente.GetSubComponente(this.componente_id).subscribe(res => {
      this.listasubcomponente = res.modelo;
    })
  }

  GET() {
    this.api.GetMaxCount(this.modelo.COMPONENTE_ID).subscribe(res => {
      if (res.modelo != null) {
        this.modelo.EDT = res.modelo.EDT_MAX + 1;
      } else {
        this.modelo.EDT = 1;
      }

      this.edt = this.modelo.EDT;

      this.apicomponente.GetId(this.modelo.COMPONENTE_ID).subscribe(res => {
        this.modelocomponente = res.modelo;

        this.api.GetComponente(this.modelo.COMPONENTE_ID).subscribe(res => {
          this.lista = res.modelo;
        })
      })
    })
  }

  onSeleccionComponente() {
    this.GET_SUBCOMPONENTE();
  }

  onSeleccionSubComponente() {
    this.GET();
  }

  onRegresar() {
    this.router.navigate(['/lista-indicador', this.modelo.OPERACION_ID]);
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
        this.modelo.EDT_DESCRIPCION = this.modelocomponente.EDT_DESCRIPCION + '.' + this.modelo.EDT.toString();
        this.api.Post(this.modelo).subscribe(res => {
          this.onCancelar();
          this.GET();
        })

      } else {
        this.alert = true;
      }
    }
  }

  onCancelar() {
    this.modelo.NOMBRE = '';
    this.modelo.EDT = this.edt;
    this.modelo.DESCRIPCION_CONCEPTUAL = '';
    this.modelo.DESCRIPCION_FORMULA = '';
    this.modelo.DESCRIPCION_TECNICA = '';
    this.modelo.EDT_DESCRIPCION = '';
    this.modelo.FRECUENCIA_MEDICION = '';
    this.modelo.FECHA_REPORTE = '';
    this.modelo.BASE_DATOS = '';
    this.modelo.COMENTARIOS = '';
  }

  onresponsable(event) {
    this.responsable = event.seleccionado;
    this.modelo.TIPO_RESPONSABLE = event.tipoResponsable;
    this.modelo.RESPONSABLE_ID = event.idResponsable;
  }

}
