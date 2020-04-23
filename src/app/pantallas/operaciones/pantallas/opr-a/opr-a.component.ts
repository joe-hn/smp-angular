import { Component, OnInit } from '@angular/core';
import { programa } from 'src/app/model/programa';
import { fuenteFinanciamiento } from 'src/app/model/fuenteFinanciamiento';
import { operacion } from 'src/app/model/operacion';
import { ApiOperacionService } from 'src/app/service/api-operacion.service';
import { ApiProgramaService } from 'src/app/service/api-programa.service';
import { ApiFuentefinanciamientoService } from 'src/app/service/api-fuentefinanciamiento.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-opr-a',
  templateUrl: './opr-a.component.html',
  styleUrls: ['./opr-a.component.css']
})
export class OprAComponent implements OnInit {
  modeloprograma: programa[];
  modelofuente: fuenteFinanciamiento[];
  modelo: operacion = new operacion(0, 0, '', '', '', '', '', 0, '', '', '', 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  dateI: Date = new Date();
  dateF: Date = new Date();
  vMonto: boolean = false;
  value: number = 0;

  constructor(
    private api: ApiOperacionService,
    private apiprograma: ApiProgramaService,
    private apifuente: ApiFuentefinanciamientoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiprograma.Get().subscribe(res => {
      this.modeloprograma = res.modelo;

      this.apifuente.Get().subscribe(res => {
        this.modelofuente = res.modelo;
      })
    })
  }

  onRegresar(){
    this.router.navigate(['/iniciooperacion']);
  }

  onGuardar(){    
    if(this.modelo.PROGRAMA_ID != 0 && this.modelo.FUENTE_ID != 0 && this.modelo.CODIGO && this.modelo.NOMBRE){
      if(this.value != 0){

        this.modelo.USR = localStorage.getItem('_u');
        this.modelo.MONTO = this.value;

        this.modelo.INICIO = moment(this.dateI).format('YYYYMMDD');
        this.modelo.FINALIZACION = moment(this.dateF).format('YYYYMMDD');

        this.modelo.INICIO_DESCRIPCION = moment(this.dateI).locale('es').format('LL');
        this.modelo.FINALIZACION_DESCRIPCION = moment(this.dateF).locale('es').format('LL');

        this.api.Post(this.modelo).subscribe(res => {
          this.router.navigate(['/iniciooperacion']);
        })

      } else {
        this.vMonto = true;
      }

    }
  }

  onCancelar(){
   this.modelo.ID = 0;
   this.modelo.PROGRAMA_ID = 0;
   this.modelo.FUENTE_ID = 0;
   this.modelo.CODIGO = '';
   this.modelo.NOMBRE = '';
   this.modelo.DESCRIPCION = '';
   this.dateI = new Date();
   this.dateI = new Date();
   this.modelo.MONTO = 0;
  }

}
