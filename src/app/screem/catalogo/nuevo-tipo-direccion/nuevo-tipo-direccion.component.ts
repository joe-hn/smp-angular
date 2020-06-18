import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { tipoDireccion } from 'src/app/model/tipoDireccion';
import { ApiTipoDireccionService } from 'src/app/service/api-tipo-direccion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-tipo-direccion',
  templateUrl: './nuevo-tipo-direccion.component.html',
  styleUrls: ['./nuevo-tipo-direccion.component.css']
})
export class NuevoTipoDireccionComponent implements OnInit {
  menu: menu[];

  modelo: tipoDireccion = new tipoDireccion(0, '', '');
  lista: tipoDireccion[];

  constructor(
    private api: ApiTipoDireccionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.menu = [{ nombre: 'Crear Nuevo Tipo de Dirección', url: '/nuevo-tipodireccion/', N: true, active: 'active' }];
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
    this.router.navigate(['/lista-tipodireccion']);
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
