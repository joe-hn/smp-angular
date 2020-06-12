import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/model/menu';
import { Router, ActivatedRoute } from '@angular/router';
import { operacion } from 'src/app/model/operacion';
import { componente } from 'src/app/model/componente';
import { indicador } from 'src/app/model/indicador';
import { poaProducto } from 'src/app/model/poaProducto';
import { ApiOperacionService } from 'src/app/service/api-operacion.service';
import { ApiComponenteService } from 'src/app/service/api-componente.service';
import { ApiIndicadorService } from 'src/app/service/api-indicador.service';
import { ApiPoaProductoService } from 'src/app/service/api-poa-producto.service';
import { ApiXlsxService } from 'src/app/service/api-xlsx.service';

@Component({
  selector: 'app-vista-operacion',
  templateUrl: './vista-operacion.component.html',
  styleUrls: ['./vista-operacion.component.css']
})
export class VistaOperacionComponent implements OnInit {
  menu: menu[];

  operacionmodelo: operacion = new operacion(0, 0, '', '', '', '', '', 0, '', '', '', 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  componentemodelo: componente[];
  subcomponentemodelo: componente[];
  indicadormodelo: indicador[];
  productomodelo: poaProducto[];
  reporte: poaProducto[];

  constructor(
    private apioperacion: ApiOperacionService,
    private apicomponente: ApiComponenteService,
    private apiindicador: ApiIndicadorService,
    private apiproducto: ApiPoaProductoService,
    private apixlsx: ApiXlsxService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.operacionmodelo.ID = +this.route.snapshot.params.id;

    this.menu = [{ nombre: 'Vista de la Operación', url: '/vista-operacion/' + this.operacionmodelo.ID, N: true, active: 'active' },
      { nombre: 'Exportar a Excell', BotonReporte: true }];
  }

  ngOnInit(): void {
    this.apioperacion.GetId(this.operacionmodelo.ID).subscribe(res => {
      this.operacionmodelo = res.modelo;

      this.apicomponente.GetOperacion(this.operacionmodelo.ID).subscribe(res => {
        this.componentemodelo = res.modelo;

        this.apicomponente.GetOperacionSubComponente(this.operacionmodelo.ID).subscribe(res => {
          this.subcomponentemodelo = res.modelo;

          this.apiindicador.GetOperacion(this.operacionmodelo.ID).subscribe(res => {
            this.indicadormodelo = res.modelo;

            this.apiproducto.GetOperacion(this.operacionmodelo.ID).subscribe(res => {
              this.productomodelo = res.modelo;
            })
          })
        })
      })
    })
  }

  onRegresar() {
    this.router.navigate(['/lista-operaciones']);
  }

  onReporte() {
    this.apioperacion.ReporteOperacionEstructura(this.operacionmodelo.ID).subscribe(res => {
      this.reporte = res.modelo;

      this.apixlsx.exportToExcel(this.reporte, 'Operacion ' + this.operacionmodelo.OPERACION);
    })    
  }

}
