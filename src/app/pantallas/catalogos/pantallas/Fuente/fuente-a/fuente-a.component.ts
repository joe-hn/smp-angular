import { Component, OnInit } from '@angular/core';
import { fuenteFinanciamiento } from 'src/app/model/fuenteFinanciamiento';
import { ApiFuentefinanciamientoService } from 'src/app/service/api-fuentefinanciamiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fuente-a',
  templateUrl: './fuente-a.component.html',
  styleUrls: ['./fuente-a.component.css']
})
export class FuenteAComponent implements OnInit {
  modelo: fuenteFinanciamiento = new fuenteFinanciamiento(0, '', '');
  modelolista: fuenteFinanciamiento[];
  id: number = 0;

  constructor(
    private api: ApiFuentefinanciamientoService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.api.Get().subscribe(res => {
      this.modelolista = res.modelo;
    })
  }

  onGuardar() {
    if (this.modelo.NOMBRE) {
      this.modelo.USR = localStorage.getItem('_u');

      this.api.Post(this.modelo).subscribe(res => {
        this.modelo.NOMBRE = '';

        this.GET();
      })
    }
  }

  onRegresar() {
    this.router.navigate(['/iniciocatalogo']);
  }

  onCancelar() {
    this.modelo.NOMBRE;
  }

  onEliminar(id) {
    this.modelo.USR = localStorage.getItem('_u');

    this.api.Delete(id, this.modelo.USR).subscribe(res => {
      this.GET();
    })
  }

}
