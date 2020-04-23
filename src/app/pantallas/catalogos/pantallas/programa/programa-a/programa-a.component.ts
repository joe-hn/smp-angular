import { Component, OnInit } from '@angular/core';
import { programa } from 'src/app/model/programa';
import { ApiProgramaService } from 'src/app/service/api-programa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programa-a',
  templateUrl: './programa-a.component.html',
  styleUrls: ['./programa-a.component.css']
})
export class ProgramaAComponent implements OnInit {
  modelo: programa = new programa(0, 0, '', '', '', '', 0, '');
  modeloprograma: programa[];
  edt: number = 0;
  id: number = 0;

  constructor(
    private api: ApiProgramaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.GET_PROGRAMA();
  }

  GET_PROGRAMA() {
    this.api.GetMaxCount().subscribe(res => {
      if (res.modelo != null) {
        this.modelo.EDT = res.modelo.EDT_MAX + 1;
      } else {
        this.modelo.EDT = 1;
      }

      this.edt = this.modelo.EDT;

      this.api.Get().subscribe(res => {
        this.modeloprograma = res.modelo;
      })
    })
  }

  onRegresar() {
    this.router.navigate(['/iniciocatalogo']);
  }

  onGuardar() {
    if (this.modelo.NOMBRE) {
      this.modelo.USR = localStorage.getItem('_u');
      this.modelo.EDT_DESCRIPCION = this.modelo.EDT.toString();

      this.api.Post(this.modelo).subscribe(res => {
        this.modelo.NOMBRE = '';
        this.modelo.EDT += 1;

        this.GET_PROGRAMA();
      })
    }
  }

  onCancelar() {    
    this.modelo.NOMBRE = '';
    this.modelo.EDT = this.edt;        
  }

  onEliminar(id) {
    this.modelo.USR = localStorage.getItem('_u');

    this.api.Delete(id, this.modelo.USR).subscribe(res => {
      this.GET_PROGRAMA();
    })
  }

}
