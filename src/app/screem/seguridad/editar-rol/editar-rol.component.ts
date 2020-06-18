import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { rol } from 'src/app/model/rol';
import { ApiRolService } from 'src/app/service/api-rol.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-rol',
  templateUrl: './editar-rol.component.html',
  styleUrls: ['./editar-rol.component.css']
})
export class EditarRolComponent implements OnInit {
  menu: menu[];

  modelo: rol = new rol(0, '', '', '', '');

  constructor(
    private api: ApiRolService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.ID = +this.route.snapshot.params.id;

    this.menu = [{ nombre: 'Editar Rol', url: '/editar-rol/' + this.modelo.ID, N: true, active: 'active' }];
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
    this.router.navigate(['/lista-rol']);
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
