import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { direccion } from 'src/app/model/direccion';
import { ApiDireccionService } from 'src/app/service/api-direccion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiTipoDireccionService } from 'src/app/service/api-tipo-direccion.service';
import { tipoDireccion } from 'src/app/model/tipoDireccion';

@Component({
  selector: 'app-nueva-direccion',
  templateUrl: './nueva-direccion.component.html',
  styleUrls: ['./nueva-direccion.component.css']
})
export class NuevaDireccionComponent implements OnInit {
  menu: menu[];

  modelo: direccion = new direccion(0, 0, '', '', '');
  lista: direccion[];
  listatipodireccion: tipoDireccion[];

  constructor(
    private api: ApiDireccionService,
    private apitipodireccion: ApiTipoDireccionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.menu = [{ nombre: 'Crear Nueva Dirección', url: '/nueva-direccion/', N: true, active: 'active' }];
  }

  ngOnInit(): void {
    this.apitipodireccion.Get().subscribe(res => {
      this.listatipodireccion = res.modelo;      
    })
  }

  onSeleccionTipoDireccion(){
    this.GET();
  }

  GET() {
    this.api.GetTipoDireccionId(this.modelo.TIPO_DIRECCION_ID).subscribe(res => {
      this.lista = res.modelo;
    })
  }

  onRegresar() {
    this.router.navigate(['/lista-direccion']);
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
