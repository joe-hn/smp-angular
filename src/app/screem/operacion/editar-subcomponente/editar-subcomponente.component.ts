import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { componente } from 'src/app/model/componente';
import { ApiComponenteService } from 'src/app/service/api-componente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-subcomponente',
  templateUrl: './editar-subcomponente.component.html',
  styleUrls: ['./editar-subcomponente.component.css']
})
export class EditarSubcomponenteComponent implements OnInit {

  menu: menu[];

  modelo: componente = new componente(0, 0, 0, '', '', 0, 0, '', '', 0, 0, 0, '', '', '', 0, '', '');
  modelocomponente: componente[];

  responsable: boolean = false;
  sinResponsable: boolean = false;
  alert: boolean = false;

  constructor(
    private api: ApiComponenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.ID = this.route.snapshot.params.id;
    this.modelo.OPERACION_ID = this.route.snapshot.params.operacion;
  }

  ngOnInit(): void {
    this.api.GetOperacion(this.modelo.OPERACION_ID).subscribe(res => {
      this.modelocomponente = res.modelo;

      this.GET();
    })    
  }

  GET() {
    this.api.GetId(this.modelo.ID).subscribe(res => {
      this.modelo = res.modelo;
    })
  }

  onRegresar() {
    this.router.navigate(['/lista-subcomponente', this.modelo.OPERACION_ID]);
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
