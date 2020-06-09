import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { componente } from 'src/app/model/componente';
import { operacion } from 'src/app/model/operacion';
import { MatDialog } from '@angular/material/dialog';
import { ApiComponenteService } from 'src/app/service/api-componente.service';
import { ApiOperacionService } from 'src/app/service/api-operacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalEliminarComponent } from 'src/app/component/modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-lista-subcomponente',
  templateUrl: './lista-subcomponente.component.html',
  styleUrls: ['./lista-subcomponente.component.css']
})
export class ListaSubcomponenteComponent implements OnInit {
  menu: menu[];

  lista: componente[];
  modelo: componente = new componente(0, 0, 0, '', '', 0, 0, '', '', 0, 0, 0, '', '', '', 0, '', '', 0, 0);
  modelooperacion: operacion = new operacion(0, 0, '', '', '', '', '', 0, '', '', '', 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

  constructor(
    private dialog: MatDialog,
    private api: ApiComponenteService,
    private apioperacion: ApiOperacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.OPERACION_ID = +this.route.snapshot.params.id;

    this.menu = [{ nombre: 'Componentes', url: '/lista-componente/' + this.modelo.OPERACION_ID, N: true, active: '' },
    { nombre: 'Sub Componente', url: '/lista-subcomponente/' + this.modelo.OPERACION_ID, N: true, active: 'active' },
    { nombre: 'Crear Nuevo Sub Componente', url: '/nuevo-subcomponente/' + this.modelo.OPERACION_ID, N: false, active: '' },
    { nombre: 'Cambiar Orden del EDT', url: '/edt-subcomponente/' + this.modelo.OPERACION_ID, N: false, active: '' },
    { nombre: 'Inidicadores', url: '/lista-indicador/' + this.modelo.OPERACION_ID, N: true, active: '' },
    { nombre: 'Productos', url: '/lista-producto/' + this.modelo.OPERACION_ID, N: true, active: '' }];
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.apioperacion.GetId(this.modelo.OPERACION_ID).subscribe(res => {
      this.modelooperacion = res.modelo;

      this.api.GetOperacionSubComponente(this.modelo.OPERACION_ID).subscribe(res => {
        this.lista = res.modelo;
      })
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

}
