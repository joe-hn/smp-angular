import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { ApiOperacionService } from 'src/app/service/api-operacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { operacion } from 'src/app/model/operacion';
import { ApiPoaService } from 'src/app/service/api-poa.service';
import { poa } from 'src/app/model/poa';

@Component({
  selector: 'app-poa-operacion',
  templateUrl: './poa-operacion.component.html',
  styleUrls: ['./poa-operacion.component.css']
})
export class PoaOperacionComponent implements OnInit {
  menu: menu[];

  operacionmodelo: operacion = new operacion(0, 0, '', '', '', '', '', 0, '', '', '', 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  lista: poa[];
  reporte: poa[];

  constructor(
    private api: ApiPoaService,
    private apioperacion: ApiOperacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.operacionmodelo.ID = +this.route.snapshot.params.id;

    this.menu = [{ nombre: 'POA', url: '/poa-operacion/' + this.operacionmodelo.ID, N: true, active: 'active' },
    { nombre: 'Crear Nuevo POA', url: '/nuevo-poa/' + this.operacionmodelo.ID, N: false, active: '' },
    { nombre: 'Exportar a Excell', BotonReporte: true }];
  }

  ngOnInit(): void {
    this.apioperacion.GetId(this.operacionmodelo.ID).subscribe(res => {
      this.operacionmodelo = res.modelo;

      this.api.GetOperacion(this.operacionmodelo.ID).subscribe(res => {
        this.lista = res.modelo;
      })
    })
  }

  onRegresar() {
    this.router.navigate(['/lista-operaciones']);
  }

  onReporte() {

  }

}
