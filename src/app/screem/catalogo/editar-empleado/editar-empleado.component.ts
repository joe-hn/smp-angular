import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { empleado } from 'src/app/model/empleado';
import { ApiEmpleadoService } from 'src/app/service/api-empleado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  menu: menu[];

  modelo: empleado = new empleado(0, '', '', '', 0, 0, '', '', '');

  constructor(
    private api: ApiEmpleadoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.ID = +this.route.snapshot.params.id;

    this.menu = [{ nombre: 'Editar Empleado', url: '/editar-empleado/' + this.modelo.ID, N: true, active: 'active' }];
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.api.GetId(this.modelo.ID).subscribe(res => {
      this.modelo = res.modelo;
    })
  }

  onRegresar() {
    this.router.navigate(['/lista-empleado']);
  }

  onGuardar() {
    if (this.modelo.NOMBRE) {
      this.modelo.USR = localStorage.getItem('_u');

      this.api.Patch(this.modelo.ID, this.modelo).subscribe(res => {
        this.onRegresar();
      })
    }
  }

  onCancelar() {
    this.GET();
  }

}
