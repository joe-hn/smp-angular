import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { programa } from 'src/app/model/programa';
import { ApiProgramaService } from 'src/app/service/api-programa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-programa',
  templateUrl: './editar-programa.component.html',
  styleUrls: ['./editar-programa.component.css']
})
export class EditarProgramaComponent implements OnInit {
  menu: menu[];

  modelo: programa = new programa(0, 0, '', '', '', '', 0, '');

  constructor(
    private api: ApiProgramaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.ID = +this.route.snapshot.params.id;

    this.menu = [{ nombre: 'Editar Programa', url: '/editar-programa/' + this.modelo.ID, N: true, active: 'active' }];
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
    this.router.navigate(['/lista-programa']);
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
