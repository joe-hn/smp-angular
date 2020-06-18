import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { tipoDireccion } from 'src/app/model/tipoDireccion';
import { ApiTipoDireccionService } from 'src/app/service/api-tipo-direccion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-tipo-direccion',
  templateUrl: './editar-tipo-direccion.component.html',
  styleUrls: ['./editar-tipo-direccion.component.css']
})
export class EditarTipoDireccionComponent implements OnInit {
  menu: menu[];

  modelo: tipoDireccion = new tipoDireccion(0, '', '');

  constructor(private api: ApiTipoDireccionService,
    private route: ActivatedRoute,
    private router: Router) { 
      this.modelo.ID = +this.route.snapshot.params.id;

    this.menu = [{ nombre: 'Editar Tipo de Dirección', url: '/editar-tipodireccion/' + this.modelo.ID, N: true, active: 'active' }];
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
      this.router.navigate(['/lista-tipodireccion']);
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
