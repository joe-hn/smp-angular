import { Component, OnInit } from '@angular/core';
import { indicador } from 'src/app/model/indicador';
import { componente } from 'src/app/model/componente';
import { menu } from 'src/app/model/menu';
import { ApiIndicadorService } from 'src/app/service/api-indicador.service';
import { ApiComponenteService } from 'src/app/service/api-componente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-indicador',
  templateUrl: './editar-indicador.component.html',
  styleUrls: ['./editar-indicador.component.css']
})
export class EditarIndicadorComponent implements OnInit {
  menu: menu[];

  modelo: indicador = new indicador(0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', '', 0, '', '', 0, 0, false);

  responsable: boolean = false;
  sinResponsable: boolean = false;
  alert: boolean = false;

  constructor(
    private api: ApiIndicadorService,
    private apicomponente: ApiComponenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.ID = this.route.snapshot.params.id;
    this.modelo.OPERACION_ID = this.route.snapshot.params.operacion;

    this.menu = [{ nombre: 'Editar Inidicador', url: '/editar-indicador/' + this.modelo.ID + '/' + this.modelo.OPERACION_ID, N: true, active: 'active' }];
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.api.GetId(this.modelo.ID).subscribe(res => {
      this.modelo = res.modelo;
    })
  }

  onSeleccionComponente() {
    this.GET();
  }

  onRegresar() {
    this.router.navigate(['/lista-indicador', this.modelo.OPERACION_ID]);
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

  onGuardar() {
    if (this.modelo.NOMBRE) {
      let flag = true;

      if (this.sinResponsable) {
        this.modelo.TIPO_RESPONSABLE = '';
        this.modelo.RESPONSABLE_ID = 0;
      }

      if (this.responsable) {
        if (this.modelo.RESPONSABLE_ID == 0) {
          flag = false;
        }
      }

      if (flag) {
        this.alert = false;

        this.modelo.USR = localStorage.getItem('_u');

        this.api.Patch(this.modelo.ID, this.modelo).subscribe(res => {
          this.onRegresar();
        })
      } else {
        this.alert = true;
      }
    }
  }

}
