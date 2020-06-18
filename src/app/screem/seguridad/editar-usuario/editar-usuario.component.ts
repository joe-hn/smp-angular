import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  menu: menu[];
  

  constructor(    
    private route: ActivatedRoute,
    private router: Router
  ) {
    
    this.menu = [{ nombre: 'Editar Usuario', url: '/editar-usuario/0', N: true, active: 'active' }];
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    
  }

  onRegresar() {
    this.router.navigate(['/lista-usuario']);
  }

  onGuardar() {
    
  }

  onCancelar() {
    this.GET();
  }

}
