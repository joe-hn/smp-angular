import { Component, OnInit } from "@angular/core";
import { menu } from "src/app/model/menu";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ModalEliminarComponent } from "src/app/component/modal-eliminar/modal-eliminar.component";
import { ApiOperacionService } from "src/app/service/api-operacion.service";
import { operacion } from "src/app/model/operacion";
import { ApiPoaService } from "src/app/service/api-poa.service";
import { poa } from "src/app/model/poa";
import { ApiMesService } from "src/app/service/api-mes.service";
import { mes } from "src/app/model/mes";
import { ApiReportesService } from "src/app/service/api-reportes.service";
import { reporteDireccionAcumulado } from "src/app/model/reporteDireccionAcumulado";
import { reporteFiltro } from "src/app/model/reporteFiltro";

@Component({
  selector: "app-reporte-direccion",
  templateUrl: "./reporte-direccion.component.html",
  styleUrls: ["./reporte-direccion.component.css"],
})
export class ReporteDireccionComponent implements OnInit {
  menu: menu[];

  listaOperaciones: operacion[];
  listaPoa: poa[];
  listaMesInicio: mes[];
  listaMesFinal: mes[];
  modelo: reporteDireccionAcumulado[];
  filtro: reporteFiltro = new reporteFiltro(0, 0, 0, 0);

  constructor(
    private apioperacion: ApiOperacionService,
    private apipoa: ApiPoaService,
    private apimes: ApiMesService,
    private apireporte: ApiReportesService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.menu = [
      {
        nombre: "Dirección",
        url: "/lista-programa/",
        N: true,
        active: "active",
      },
    ];
  }

  ngOnInit(): void {
    this.apioperacion.Get().subscribe((res) => {
      this.listaOperaciones = res.modelo;

      this.apimes.Get().subscribe((res) => {
        this.listaMesInicio = res.modelo;
        this.listaMesFinal = res.modelo;
      });
    });
  }

  onSeleccionOperacion() {
    this.apipoa.GetOperacion(this.filtro.OPERACION_ID).subscribe((res) => {
      this.listaPoa = res.modelo;
    });
  }

  onRegresar() {
    this.router.navigate(["/lista-operaciones"]);
  }

  onGenerarReporte() {
    this.apireporte
      .GetReporteDireccionAcumulado(this.filtro)
      .subscribe((res) => {
        this.modelo = res.modelo;
        console.log(this.modelo);
      });
  }
}
