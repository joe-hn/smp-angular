import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { fuenteFinanciamiento } from 'src/app/model/fuenteFinanciamiento';
import { ApiFuentefinanciamientoService } from 'src/app/service/api-fuentefinanciamiento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nueva-fuente',
  templateUrl: './nueva-fuente.component.html',
  styleUrls: ['./nueva-fuente.component.css']
})
export class NuevaFuenteComponent implements OnInit {
  menu: menu[];

  modelo: fuenteFinanciamiento = new fuenteFinanciamiento(0, '', '');
  lista: fuenteFinanciamiento[];  

  constructor(
    private api: ApiFuentefinanciamientoService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.menu = [{ nombre: 'Crear Nueva Fuente de Financiamiento', url: '/nuevo-fuente/', N: true, active: 'active' }];
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
    this.router.navigate(['/lista-fuente']);
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
