import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { usuario } from 'src/app/model/usuario';
import { ApiUsuarioService } from 'src/app/service/api-usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalEliminarComponent } from 'src/app/component/modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  menu: menu[];

  lista: usuario[];

  constructor(
    private api: ApiUsuarioService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.menu = [{ nombre: 'Rol', url: '/lista-rol/', N: true, active: '' },
    { nombre: 'Usuario', url: '/lista-usuario/', N: true, active: 'active' },
    { nombre: 'Crear Nuevo Usuario', url: '/nuevo-usuario/', N: false, active: '' },
    { nombre: 'Exportar a Excell', BotonReporte: true }];
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
    this.router.navigate(['/lista-operaciones']);
  }

  onEliminar(valor) {
    const dialogRef = this.dialog.open(ModalEliminarComponent);

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.api.Delete(valor.ID, localStorage.getItem('_u')).subscribe(res => {
          this.GET();
        })
      }
    })
  }

  onReporte() {

  }

}
