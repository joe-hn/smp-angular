import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { cargo } from 'src/app/model/cargo';
import { ApiCargoService } from 'src/app/service/api-cargo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-cargo',
  templateUrl: './nuevo-cargo.component.html',
  styleUrls: ['./nuevo-cargo.component.css']
})
export class NuevoCargoComponent implements OnInit {
  menu: menu[];

  modelo: cargo = new cargo(0, '', '', '');
  lista: cargo[];

  constructor(
    private api: ApiCargoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.menu = [{ nombre: 'Crear Nuevo Cargo', url: '/nuevo-cargo/', N: true, active: 'active' }];
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
    this.router.navigate(['/lista-cargo']);
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
