import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { fuenteFinanciamiento } from 'src/app/model/fuenteFinanciamiento';
import { ApiFuentefinanciamientoService } from 'src/app/service/api-fuentefinanciamiento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-fuente',
  templateUrl: './editar-fuente.component.html',
  styleUrls: ['./editar-fuente.component.css']
})
export class EditarFuenteComponent implements OnInit {
  menu: menu[];

  modelo: fuenteFinanciamiento = new fuenteFinanciamiento(0, '', '');

  constructor(
    private api: ApiFuentefinanciamientoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.ID = +this.route.snapshot.params.id;

    this.menu = [{ nombre: 'Editar Funente de Financiamiento', url: '/editar-fuente/' + this.modelo.ID, N: true, active: 'active' }];
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
    this.router.navigate(['/lista-fuente']);
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
