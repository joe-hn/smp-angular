import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { poa } from 'src/app/model/poa';
import { anio } from 'src/app/model/anio';
import { ApiPoaService } from 'src/app/service/api-poa.service';
import { ApiAnioService } from 'src/app/service/api-anio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { operacion } from 'src/app/model/operacion';
import { ApiOperacionService } from 'src/app/service/api-operacion.service';

@Component({
  selector: 'app-nuevo-poa',
  templateUrl: './nuevo-poa.component.html',
  styleUrls: ['./nuevo-poa.component.css']
})
export class NuevoPoaComponent implements OnInit {
  menu: menu[];

  modelo: poa = new poa(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', '');
  operacionmodelo: operacion = new operacion(0, 0, '', '', '', '', '', 0, '', '', '', 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  aniomodelo: anio[];
  lista: poa[];

  constructor(
    private api: ApiPoaService,
    private apianio: ApiAnioService,
    private apioperacion: ApiOperacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.modelo.OPERACION_ID = +this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.apioperacion.GetId(this.modelo.OPERACION_ID).subscribe(res => {
      this.operacionmodelo = res.modelo;

      this.apianio.Get(this.modelo.OPERACION_ID).subscribe(res => {
        this.aniomodelo = res.modelo;

        this.api.GetOperacion(this.modelo.OPERACION_ID).subscribe(res => {
          this.lista = res.modelo;
        })
      })
    })
  }

  onRegresar() {
    this.router.navigate(['/poa-operacion', this.modelo.OPERACION_ID]);
  }

  onGuardar() {
    if (this.modelo.ANIO != 0) {
      this.modelo.USR = localStorage.getItem('_u');
      this.modelo.ANIO_DESCRIPCION = this.modelo.ANIO.toString();

      this.api.Post(this.modelo).subscribe(res => {
        this.onCancelar();
        this.GET();
      })
    }
  }

  onCancelar() {
    this.GET();
  }

}
