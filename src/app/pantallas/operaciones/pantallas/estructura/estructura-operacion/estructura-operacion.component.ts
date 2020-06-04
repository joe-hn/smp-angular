import { Component, OnInit } from '@angular/core';
import { componente } from 'src/app/model/componente';
import { ApiComponenteService } from 'src/app/service/api-componente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { async } from '@angular/core/testing';
import { indicador } from 'src/app/model/indicador';

@Component({
  selector: 'app-estructura-operacion',
  templateUrl: './estructura-operacion.component.html',
  styleUrls: ['./estructura-operacion.component.css']
})
export class EstructuraOperacionComponent implements OnInit {
  modelocomponente: componente = new componente(0, 0, 0, '', '', 0, 0, '', '', 0, 0, 0, '', '', '', 0, '', '');
  listacomponente: componente[];
  modeloindicador: indicador = new indicador(0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', '', 0, '');
  listaindicador: indicador[];

  constructor(
    private apicomponente: ApiComponenteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.modelocomponente.OPERACION_ID = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.GET_COMPONENTE();
  }

  GET_COMPONENTE() {
    this.apicomponente.GetOperacion(this.modelocomponente.OPERACION_ID).subscribe(res => {
      this.listacomponente = res.modelo;

      this.apicomponente.GetMaxCount(this.modelocomponente.OPERACION_ID).subscribe(res => {
        if (res.modelo != null) {
          this.modelocomponente.EDT = res.modelo.EDT_MAX + 1;
        } else {
          this.modelocomponente.EDT = 1;
        }
      })
    })
  }

  onGuardarComponente() {

  }

  onCancelarComponent() {

  }

  onEliminarComponente(id) {

  }

  onRegresar() {

  }

  onresponsable(event) {
    console.log('**********   VIENE DEL COMPONENTE **************', event.idResponsable, event.tipoResponsable);
  }

}


