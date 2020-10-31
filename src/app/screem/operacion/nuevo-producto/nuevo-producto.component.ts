import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { poaProducto } from 'src/app/model/poaProducto';
import { componente } from 'src/app/model/componente';
import { indicador } from 'src/app/model/indicador';
import { ApiPoaProductoService } from 'src/app/service/api-poa-producto.service';
import { ApiComponenteService } from 'src/app/service/api-componente.service';
import { ApiIndicadorService } from 'src/app/service/api-indicador.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  menu: menu[];
  modelo: poaProducto = new poaProducto(0, 0, 0, 0, 0, '', '', 0, '', '', '', '', '', 0, '', 0, '', '', 0, '', '', 0);
  indicadormodelo: indicador = new indicador(0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', '', 0, '', '', 0, 0);
  listacomponente: componente[];
  listaindicador: indicador[];
  lista: poaProducto[];
  
  dateInicio: Date = new Date();
  dateFinal: Date = new Date();
  dateValidador: Date = new Date();
  value: number = 0;
  vMonto: boolean = false;
  
  edt: number;
  responsable: boolean = false;
  alert: boolean = false;  

  constructor(
    private api: ApiPoaProductoService,
    private apicomponente: ApiComponenteService,
    private apiindicador: ApiIndicadorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.OPERACION_ID = this.route.snapshot.params.id;

    this.menu = [{ nombre: 'Crear Nuevo Producto de Indicador de Componente', url: '/nuevo-producto/' + this.modelo.OPERACION_ID, N: true, active: 'active' }];
  }

  ngOnInit(): void {
    this.apicomponente.GetOperacion(this.modelo.OPERACION_ID).subscribe(res => {
      this.listacomponente = res.modelo;
    })
  }

  GET() {
    this.api.GetMaxCount(this.modelo.INDICADOR_ID).subscribe(res => {
      if (res.modelo != null) {
        this.modelo.EDT = res.modelo.EDT_MAX + 1;
      } else {
        this.modelo.EDT = 1;
      }

      this.edt = this.modelo.EDT;

      this.apiindicador.GetId(this.modelo.INDICADOR_ID).subscribe(res => {
        this.indicadormodelo = res.modelo;

        this.api.GetIndicador(this.modelo.INDICADOR_ID).subscribe(res => {
          this.lista = res.modelo;
        })
      })
    })
  }

  onSeleccionComponente() {    
    this.apiindicador.GetComponente(this.modelo.COMPONENTE_ID).subscribe(res => {
      this.listaindicador = res.modelo;
    })
  }

  onSeleccionIndicador() {
    this.GET();
  }

  onRegresar() {
    this.router.navigate(['/lista-producto', this.modelo.OPERACION_ID]);
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
        this.modelo.EDT_DESCRIPCION = this.indicadormodelo.EDT.toString() + '.' + this.modelo.EDT.toString();
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
  }

  onresponsable(event) {
    this.responsable = event.seleccionado;
    this.modelo.TIPO_RESPONSABLE = event.tipoResponsable;
    this.modelo.RESPONSABLE_ID = event.idResponsable;
  }

}
