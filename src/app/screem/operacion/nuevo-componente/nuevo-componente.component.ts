import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { componente } from 'src/app/model/componente';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiComponenteService } from 'src/app/service/api-componente.service';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.css']
})
export class NuevoComponenteComponent implements OnInit {
  menu: menu[];

  modelo: componente = new componente(0, 0, 0, '', '', 0, 0, '', '', 0, 0, 0, '', '', '', 0, '', '', 0, 0);

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

    this.menu = [{ nombre: 'Crear Nueva Componente', url: '/nuevo-componente/' + this.modelo.OPERACION_ID, N: true, active: 'active' }];
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.api.GetMaxCount(this.modelo.OPERACION_ID).subscribe(res => {
      if (res.modelo != null) {
        this.modelo.EDT = res.modelo.EDT_MAX + 1;
      } else {
        this.modelo.EDT = 1;
      }

      this.edt = this.modelo.EDT;

      this.api.GetOperacion(this.modelo.OPERACION_ID).subscribe(res => {
        this.lista = res.modelo;
      })
    })

  }

  onRegresar() {
    this.router.navigate(['/lista-componente', this.modelo.OPERACION_ID]);
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
        this.modelo.EDT_DESCRIPCION = this.modelo.EDT.toString();

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
