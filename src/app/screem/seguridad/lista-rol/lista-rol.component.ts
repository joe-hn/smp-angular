import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { rol } from 'src/app/model/rol';
import { ApiRolService } from 'src/app/service/api-rol.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalEliminarComponent } from 'src/app/component/modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-lista-rol',
  templateUrl: './lista-rol.component.html',
  styleUrls: ['./lista-rol.component.css']
})
export class ListaRolComponent implements OnInit {
  menu: menu[];

  lista: rol[];

  constructor(
    private api: ApiRolService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) { 

    this.menu = [{ nombre: 'Rol', url: '/lista-rol/', N: true, active: 'active' },
    { nombre: 'Crear Nuevo Rol', url: '/nuevo-rol/', N: false, active: '' },
    { nombre: 'Exportar a Excell', BotonReporte: true },
    { nombre: 'Usuario', url: '/lista-usuario/', N: true, active: '' }];
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
