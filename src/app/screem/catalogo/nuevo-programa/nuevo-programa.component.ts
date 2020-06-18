import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { programa } from 'src/app/model/programa';
import { ApiProgramaService } from 'src/app/service/api-programa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-programa',
  templateUrl: './nuevo-programa.component.html',
  styleUrls: ['./nuevo-programa.component.css']
})
export class NuevoProgramaComponent implements OnInit {
  menu: menu[];

  modelo: programa = new programa(0, 0, '', '', '', '', 0, '');
  lista: programa[];
  edt: number = 0;

  constructor(
    private api: ApiProgramaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.menu = [{ nombre: 'Crear Nuevo Programa', url: '/nuevo-programa/', N: true, active: 'active' }];
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.api.GetMaxCount().subscribe(res => {
      if (res.modelo != null) {
        this.modelo.EDT = res.modelo.EDT_MAX + 1;
      } else {
        this.modelo.EDT = 1;
      }

      this.edt = this.modelo.EDT;

      this.api.Get().subscribe(res => {
        this.lista = res.modelo;
      })

    })
  }

  onRegresar() {
    this.router.navigate(['/lista-programa']);
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
    this.modelo.EDT = this.edt;
  }

}
