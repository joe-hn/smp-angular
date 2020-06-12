import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { poa } from 'src/app/model/poa';
import { anio } from 'src/app/model/anio';
import { ApiPoaService } from 'src/app/service/api-poa.service';
import { ApiAnioService } from 'src/app/service/api-anio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-poa',
  templateUrl: './nuevo-poa.component.html',
  styleUrls: ['./nuevo-poa.component.css']
})
export class NuevoPoaComponent implements OnInit {
  menu: menu[];

  modelo: poa = new poa(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', '');
  aniomodelo: anio[];
  lista: poa[];

  constructor(
    private api: ApiPoaService,
    private apianio: ApiAnioService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.modelo.OPERACION_ID = +this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.apianio.Get().subscribe(res => {
      this.aniomodelo = res.modelo;

      this.GET();
    })
  }

  GET() {
    this.api.GetOperacion(this.modelo.OPERACION_ID).subscribe(res => {
      this.lista = res.modelo;

      console.log(this.lista);
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
      })
    }
  }

  onCancelar() {
    this.GET();
  }

}
