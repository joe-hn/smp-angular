import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { direccion } from 'src/app/model/direccion';
import { ApiDireccionService } from 'src/app/service/api-direccion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-direccion',
  templateUrl: './editar-direccion.component.html',
  styleUrls: ['./editar-direccion.component.css']
})
export class EditarDireccionComponent implements OnInit {
  menu: menu[];

  modelo: direccion = new direccion(0, 0, '', '', '');

  constructor(
    private api: ApiDireccionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.ID = +this.route.snapshot.params.id;

    this.menu = [{ nombre: 'Editar Dirección', url: '/editar-direccion/' + this.modelo.ID, N: true, active: 'active' }];
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
    this.router.navigate(['/lista-direccion']);
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
