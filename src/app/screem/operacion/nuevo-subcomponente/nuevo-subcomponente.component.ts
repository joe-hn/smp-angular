import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { componente } from 'src/app/model/componente';
import { ApiComponenteService } from 'src/app/service/api-componente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-subcomponente',
  templateUrl: './nuevo-subcomponente.component.html',
  styleUrls: ['./nuevo-subcomponente.component.css']
})
export class NuevoSubcomponenteComponent implements OnInit {
  menu: menu[];

  modelo: componente = new componente(0, 0, 0, '', '', 0, 0, '', '', 0, 0, 0, '', '', '', 0, '', '', 0, 0);
  modeloC: componente = new componente(0, 0, 0, '', '', 0, 0, '', '', 0, 0, 0, '', '', '', 0, '', '', 0, 0);
  modelocomponente: componente[];

  lista: componente[];
  edt: number;
  responsable: boolean = false;
  alert: boolean = false;

  constructor(
    private api: ApiComponenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.OPERACION_ID = +this.route.snapshot.params.id;

    this.menu = [{ nombre: 'Crear Nuevo Sub Componente', url: '/nuevo-subcomponente/' + this.modelo.OPERACION_ID, N: true, active: 'active' }];
  }

  ngOnInit(): void {
    this.api.GetOperacion(this.modelo.OPERACION_ID).subscribe(res => {
      this.modelocomponente = res.modelo;
    })
  }

  GET() {
    this.api.GetMaxCountSubComponente(this.modelo.OPERACION_ID, this.modelo.COMPONENTE_ID).subscribe(res => {
      if (res.modelo != null) {
        this.modelo.EDT_SC = res.modelo.EDT_MAX + 1;
      } else {
        this.modelo.EDT_SC = 1;
      }

      this.edt = this.modelo.EDT_SC;

      this.api.GetId(this.modelo.COMPONENTE_ID).subscribe(res => {
        this.modeloC = res.modelo;
        this.api.GetSubComponente(this.modelo.COMPONENTE_ID).subscribe(res => {
          this.lista = res.modelo;
        })
      })
    })
  }

  onSeleccionComponente() {
    this.GET();
  }

  onRegresar() {
    this.router.navigate(['/lista-subcomponente', this.modelo.OPERACION_ID]);
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
        this.modelo.EDT = this.modeloC.EDT;

        this.modelo.EDT_DESCRIPCION = this.modelo.EDT.toString() + '.' + this.modelo.EDT_SC.toString();

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
