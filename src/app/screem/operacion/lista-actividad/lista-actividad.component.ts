import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { poaActividad } from 'src/app/model/poaActividad';
import { MatDialog } from '@angular/material/dialog';
import { ApiPoaActividadService } from 'src/app/service/api-poa-actividad.service';
import { ApiXlsxService } from 'src/app/service/api-xlsx.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalEliminarComponent } from 'src/app/component/modal-eliminar/modal-eliminar.component';
import { poa } from 'src/app/model/poa';
import { ApiPoaService } from 'src/app/service/api-poa.service';

@Component({
  selector: 'app-lista-actividad',
  templateUrl: './lista-actividad.component.html',
  styleUrls: ['./lista-actividad.component.css']
})
export class ListaActividadComponent implements OnInit {
  menu: menu[];

  lista: poaActividad[];
  modelo: poa = new poa(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', '');

  constructor(private dialog: MatDialog,
    private api: ApiPoaActividadService,
    private apipoa: ApiPoaService,
    private apixlsx: ApiXlsxService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.modelo.ID = +this.route.snapshot.params.poa;

    this.apipoa.GetId(this.modelo.ID).subscribe(res => {
      this.modelo = res.modelo;

      this.menu = [{ nombre: 'Lista de Actividades', url: '/lista-actividad/' + this.modelo.ID + '/' + this.modelo.OPERACION_ID, N: true, active: '' },
      { nombre: 'Cambiar Orden de EDT', url: '/edt-actividad/' + this.modelo.ID + '/' + this.modelo.OPERACION_ID, N: false, active: '' },
      { nombre: 'Exportar a Excell', BotonReporte: true }];

      this.GET();
    })

  }

  GET() {
    this.apipoa.GetId(this.modelo.ID).subscribe(res => {
      this.modelo = res.modelo;

      this.api.GetPoa(this.modelo.ID, this.modelo.OPERACION_ID).subscribe(res => {
        this.lista = res.modelo;
      })
    })
  }

  onRegresar() {
    this.router.navigate(['/poa-proyeccion', this.modelo.ID]);
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
