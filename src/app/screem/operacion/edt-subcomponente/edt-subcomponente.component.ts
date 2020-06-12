import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { componente } from 'src/app/model/componente';
import { ApiComponenteService } from 'src/app/service/api-componente.service';
import { ApiEdtActualizarService } from 'src/app/service/api-edt-actualizar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-edt-subcomponente',
  templateUrl: './edt-subcomponente.component.html',
  styleUrls: ['./edt-subcomponente.component.css']
})
export class EdtSubcomponenteComponent implements OnInit {
  menu: menu[];

  lista: componente[];
  modelocomponente: componente[];
  modelo: componente = new componente(0, 0, 0, '', '', 0, 0, '', '', 0, 0, 0, '', '', '', 0, '', '', 0, 0);

  validacion: boolean = false;

  constructor(
    private api: ApiComponenteService,
    private apiedt: ApiEdtActualizarService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.OPERACION_ID = +this.route.snapshot.params.id;

    this.menu = [{ nombre: 'Cambiar Orden del EDT', url: '/edt-subcomponente/' + this.modelo.OPERACION_ID, N: true, active: 'active' }];
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.api.GetOperacionSubComponente(this.modelo.OPERACION_ID).subscribe(res => {
      this.lista = res.modelo;
    })
  }

  onRegresar() {
    this.router.navigate(['/lista-subcomponente', this.modelo.OPERACION_ID]);
  }

  onGuardar() {
    for (let index = 0; index < this.lista.length; index++) {
      this.lista[index].USR = localStorage.getItem('_u');
      this.lista[index].EDT_SC = this.lista[index].EDT_M;
    }

    this.api.ModificarEdtsubComponente(this.lista).subscribe(res => {

      this.apiedt.Componente(this.modelo.OPERACION_ID, this.modelo).subscribe(res => {
        this.apiedt.SubComponente(this.modelo.OPERACION_ID, this.modelo).subscribe(res => {
          this.apiedt.ComponenteIndicador(this.modelo.OPERACION_ID, this.modelo).subscribe(res => {
            this.apiedt.SubComponenteIndicador(this.modelo.OPERACION_ID, this.modelo).subscribe(res => {
              this.apiedt.ComponenteIndicadorProducto(this.modelo.OPERACION_ID, this.modelo).subscribe(res => {
                this.apiedt.SubComponenteIndicadorProducto(this.modelo.OPERACION_ID, this.modelo).subscribe(res => {
                  this.apiedt.ComponenteIndicadorProductoActividad(this.modelo.OPERACION_ID, this.modelo).subscribe(res => {
                    this.apiedt.SubComponenteIndicadorProductoActividad(this.modelo.OPERACION_ID, this.modelo).subscribe(res => {
                      this.validacion = true;

                      this.GET();
                    })
                  })
                })
              })
            })
          })
        })

      })

    })
  }

  onCancelar() {
    this.GET();
  }

}
