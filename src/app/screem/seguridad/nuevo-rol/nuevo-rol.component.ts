import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { rol } from 'src/app/model/rol';
import { ApiRolService } from 'src/app/service/api-rol.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-rol',
  templateUrl: './nuevo-rol.component.html',
  styleUrls: ['./nuevo-rol.component.css']
})
export class NuevoRolComponent implements OnInit {
  menu: menu[];

  modelo: rol = new rol(0, '', '', '', '');
  lista: rol[];

  constructor(
    private api: ApiRolService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.menu = [{ nombre: 'Crear Nuevo Rol', url: '/nuevo-rol/', N: true, active: 'active' }];
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.api.Get().subscribe(res => {
      this.lista = res.modelo;
    })
  }

  onRegresar() {
    this.router.navigate(['/lista-rol']);
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
  }

}
