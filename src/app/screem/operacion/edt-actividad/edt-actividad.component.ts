import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { poaActividad } from 'src/app/model/poaActividad';
import { ApiPoaActividadService } from 'src/app/service/api-poa-actividad.service';
import { ApiEdtActualizarService } from 'src/app/service/api-edt-actualizar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edt-actividad',
  templateUrl: './edt-actividad.component.html',
  styleUrls: ['./edt-actividad.component.css']
})
export class EdtActividadComponent implements OnInit {
  menu: menu[];

  lista: poaActividad[];
  modelo: poaActividad = new poaActividad(0, 0, 0, 0, 0, 0, 0, '', '', '', '', 0, '', '', 0, '', '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', 0, 0, 0, 0, 0, 0, '', '', 0, '', '', 0, 0, '', 0, '');
  validacion: boolean = false;

  constructor(
    private api: ApiPoaActividadService,
    private apiedt: ApiEdtActualizarService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.POA_ID = +this.route.snapshot.params.poa;
    this.modelo.OPERACION_ID = +this.route.snapshot.params.operacion;

    this.menu = [{ nombre: 'Cambiar Orden de EDT', url: '/edt-actividad/' + this.modelo.OPERACION_ID, N: true, active: 'active' }];
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
    this.router.navigate(['/lista-actividad', this.modelo.POA_ID, this.modelo.OPERACION_ID]);
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
