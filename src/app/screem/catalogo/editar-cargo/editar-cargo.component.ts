import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { cargo } from 'src/app/model/cargo';
import { ApiCargoService } from 'src/app/service/api-cargo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cargo',
  templateUrl: './editar-cargo.component.html',
  styleUrls: ['./editar-cargo.component.css']
})
export class EditarCargoComponent implements OnInit {
  menu: menu[];

  modelo: cargo = new cargo(0, '', '', '');

  constructor(
    private api: ApiCargoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.ID = +this.route.snapshot.params.id;

    this.menu = [{ nombre: 'Editar Cargo', url: '/editar-cargo/' + this.modelo.ID, N: true, active: 'active' }];
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
    this.router.navigate(['/lista-cargo']);
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
