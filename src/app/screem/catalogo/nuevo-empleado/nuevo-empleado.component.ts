import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { empleado } from 'src/app/model/empleado';
import { ApiEmpleadoService } from 'src/app/service/api-empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiTipoDireccionService } from 'src/app/service/api-tipo-direccion.service';
import { ApiDireccionService } from 'src/app/service/api-direccion.service';
import { ApiCargoService } from 'src/app/service/api-cargo.service';
import { tipoDireccion } from 'src/app/model/tipoDireccion';
import { direccion } from 'src/app/model/direccion';
import { cargo } from 'src/app/model/cargo';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent implements OnInit {
  menu: menu[];

  modelo: empleado = new empleado(0, '', '', '', 0, 0, '', '', '');
  listatipodireccion: tipoDireccion[];
  listadireccion: direccion[];
  listacargo: cargo[];
  lista: empleado[];

  tipodireccionid: number = 0;

  constructor(
    private api: ApiEmpleadoService,
    private apitipodireccion: ApiTipoDireccionService,
    private apidireccion: ApiDireccionService,
    private apicargo: ApiCargoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.menu = [{ nombre: 'Crear Nuevo Cargo', url: '/nuevo-cargo/', N: true, active: 'active' }];
  }

  ngOnInit(): void {
    this.apitipodireccion.Get().subscribe(res => {
      this.listatipodireccion = res.modelo;

      this.apicargo.Get().subscribe(res => {
        this.listacargo = res.modelo;

      })
    })
  }

  onSeleccionTipoDireccion() {
    this.apidireccion.GetTipoDireccionId(this.tipodireccionid).subscribe(res => {
      this.listadireccion = res.modelo;
    })
  }

  onSeleccionDireccion() {
    this.GET();
  }

  onSeleccionCargo() {
    this.GET();
  }

  GET() {
    if (this.modelo.CARGO_ID != 0 && this.modelo.DIRECCION_ID != 0) {
      this.api.DireccionCargo(this.modelo.DIRECCION_ID, this.modelo.CARGO_ID).subscribe(res => {
        this.lista = res.modelo;
      })
    }
  }

  onRegresar() {
    this.router.navigate(['/lista-empleado']);
  }

  onGuardar() {
    if (this.modelo.NOMBRE) {
      this.modelo.USR = localStorage.getItem('_u');

      this.api.Post(this.modelo).subscribe(res => {
        this.onCancelar();
        this.GET();
      })
    }
  }

  onCancelar() {
    this.modelo.NOMBRE = '';
    this.modelo.EMAIL = '';
  }
}
