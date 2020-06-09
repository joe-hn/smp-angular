import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { indicador } from 'src/app/model/indicador';
import { ApiIndicadorService } from 'src/app/service/api-indicador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiEdtActualizarService } from 'src/app/service/api-edt-actualizar.service';

@Component({
  selector: 'app-edt-indicador',
  templateUrl: './edt-indicador.component.html',
  styleUrls: ['./edt-indicador.component.css']
})
export class EdtIndicadorComponent implements OnInit {
  menu: menu[];

  lista: indicador[];
  modelo: indicador = new indicador(0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', '', 0, '', '', 0);
  validacion: boolean = false;

  constructor(
    private api: ApiIndicadorService,
    private apiedt: ApiEdtActualizarService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.OPERACION_ID = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.api.GetOperacion(this.modelo.OPERACION_ID).subscribe(res => {
      this.lista = res.modelo;
    })
  }

  onRegresar() {
    this.router.navigate(['/lista-indicador', this.modelo.OPERACION_ID]);
  }

  onGuardar() {
    for (let index = 0; index < this.lista.length; index++) {
      this.lista[index].USR = localStorage.getItem('_u');
      this.lista[index].EDT = this.lista[index].EDT_M;
    }   

    this.api.ModificarEdt(this.lista).subscribe(res => {

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
