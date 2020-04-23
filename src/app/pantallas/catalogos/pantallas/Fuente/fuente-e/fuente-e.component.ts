import { Component, OnInit } from '@angular/core';
import { fuenteFinanciamiento } from 'src/app/model/fuenteFinanciamiento';
import { ApiFuentefinanciamientoService } from 'src/app/service/api-fuentefinanciamiento.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fuente-e',
  templateUrl: './fuente-e.component.html',
  styleUrls: ['./fuente-e.component.css']
})
export class FuenteEComponent implements OnInit {
  modelo: fuenteFinanciamiento = new fuenteFinanciamiento(0, '', '');

  constructor(
    private api: ApiFuentefinanciamientoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.modelo.ID = +route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.api.GetId(this.modelo.ID).subscribe(res => {
      this.modelo = res.modelo;
    })
  }

  onGuardar() {
    if (this.modelo.NOMBRE) {
      this.modelo.USR = localStorage.getItem('_u');

      this.api.Patch(this.modelo.ID, this.modelo).subscribe(res => {
        this.router.navigate(['/fuente-a']);
      })
    }
  }

  onCancelar() {
    this.GET();
  }

  onRegresar() {
    this.router.navigate(['/fuente-a']);
  }

}
