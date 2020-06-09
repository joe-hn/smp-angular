import { Component, OnInit } from '@angular/core';
import { componente } from 'src/app/model/componente';
import { ApiComponenteService } from 'src/app/service/api-componente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { menu } from 'src/app/model/menu';
import { ApiEdtActualizarService } from 'src/app/service/api-edt-actualizar.service';

@Component({
  selector: 'app-edt-componente',
  templateUrl: './edt-componente.component.html',
  styleUrls: ['./edt-componente.component.css']
})
export class EdtComponenteComponent implements OnInit {
  menu: menu[];

  modelo: componente = new componente(0, 0, 0, '', '', 0, 0, '', '', 0, 0, 0, '', '', '', 0, '', '', 0, 0);
  lista: componente[];

  validacion: boolean = false;

  constructor(
    private api: ApiComponenteService,
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
    this.router.navigate(['/lista-componente', this.modelo.OPERACION_ID]);
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
