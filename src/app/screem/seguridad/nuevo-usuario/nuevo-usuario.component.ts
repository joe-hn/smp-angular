import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { usuario } from 'src/app/model/usuario';
import { empleado } from 'src/app/model/empleado';
import { tipoDireccion } from 'src/app/model/tipoDireccion';
import { direccion } from 'src/app/model/direccion';
import { cargo } from 'src/app/model/cargo';
import { ApiUsuarioService } from 'src/app/service/api-usuario.service';
import { ApiEmpleadoService } from 'src/app/service/api-empleado.service';
import { ApiTipoDireccionService } from 'src/app/service/api-tipo-direccion.service';
import { ApiDireccionService } from 'src/app/service/api-direccion.service';
import { ApiCargoService } from 'src/app/service/api-cargo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { rol } from 'src/app/model/rol';
import { ApiRolService } from 'src/app/service/api-rol.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  menu: menu[];

  modelo: usuario = new usuario(0, '', '', '', '', '', '', 0, '', 0, false, 0, 0, '', 0, '', '');
  empleadomodelo: empleado = new empleado(0, '', '', '', 0, 0, '', '', '');
  listaempleado: empleado[];
  listatipodireccion: tipoDireccion[];
  listadireccion: direccion[];
  listacargo: cargo[];
  listarol: rol[];
  lista: usuario[];

  tipodireccionid: number = 0;

  constructor(
    private api: ApiUsuarioService,
    private apiempleado: ApiEmpleadoService,
    private apitipodireccion: ApiTipoDireccionService,
    private apidireccion: ApiDireccionService,
    private apicargo: ApiCargoService,
    private apirol: ApiRolService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.menu = [{ nombre: 'Crear Nuevo Usuario', url: '/nuevo-usuario/', N: true, active: 'active' }];
  }

  ngOnInit(): void {
    this.apitipodireccion.Get().subscribe(res => {
      this.listatipodireccion = res.modelo;

      this.apicargo.Get().subscribe(res => {
        this.listacargo = res.modelo;

        this.apirol.Get().subscribe(res => {
          this.listarol = res.modelo;
        })
      })
    })
  }

  onSeleccionTipoDireccion() {
    this.apidireccion.GetTipoDireccionId(this.tipodireccionid).subscribe(res => {
      this.listadireccion = res.modelo;
    })
  }

  onSeleccionDireccion() {
    this.GET_EMPLEADO();
  }

  onSeleccionCargo() {
    this.GET_EMPLEADO()
  }

  onSeleccionEmpleado() {

  }


  GET_EMPLEADO() {
    if (this.empleadomodelo.CARGO_ID != 0 && this.empleadomodelo.DIRECCION_ID != 0) {
      this.apiempleado.DireccionCargo(this.empleadomodelo.DIRECCION_ID, this.empleadomodelo.CARGO_ID).subscribe(res => {
        this.listaempleado = res.modelo;
      })
    }
  }

  onRegresar() {
    this.router.navigate(['/lista-usuario']);
  }

  onGuardar() {
    if (this.modelo.USUARIO && this.modelo.ROL_ID != 0 && this.modelo.EMPLEADO_ID != 0) {
      this.modelo.USR = localStorage.getItem('_u');

      if (this.modelo.JEFE_MARCA) {
        this.modelo.JEFE = 1;
      } else {
        this.modelo.JEFE = 0;
      }      

      this.api.Post(this.modelo).subscribe(res => {
        this.onRegresar();
      })
    }
  }

  onCancelar() {
    
  }

}
