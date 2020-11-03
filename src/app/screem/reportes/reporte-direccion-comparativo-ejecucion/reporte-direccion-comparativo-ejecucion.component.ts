import { Component, OnInit } from "@angular/core";
import { menu } from "src/app/model/menu";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ApiOperacionService } from "src/app/service/api-operacion.service";
import { operacion } from "src/app/model/operacion";
import { ApiMesService } from "src/app/service/api-mes.service";
import { mes } from "src/app/model/mes";
import { ApiReportesService } from "src/app/service/api-reportes.service";
import { reporteDireccionAcumulado } from "src/app/model/reporteDireccionAcumulado";
import { reporteFiltro } from "src/app/model/reporteFiltro";
import { ApiXlsxService } from "src/app/service/api-xlsx.service";
import { anio } from "src/app/model/anio";
import { ApiAnioService } from "src/app/service/api-anio.service";
import { direccion } from "src/app/model/direccion";
import { ApiDireccionService } from "src/app/service/api-direccion.service";

@Component({
  selector: "app-reporte-direccion-comparativo-ejecucion",
  templateUrl: "./reporte-direccion-comparativo-ejecucion.component.html",
  styleUrls: ["./reporte-direccion-comparativo-ejecucion.component.css"],
})
export class ReporteDireccionComparativoEjecucionComponent implements OnInit {
  menu: menu[];

  listaDireccion: direccion[];
  listaOperaciones: operacion[];
  listaAnio: anio[];

  listaAnioA: reporteDireccionAcumulado[];
  listaAnioB: reporteDireccionAcumulado[];

  anioA: number;
  anioB: number;

  filtro: reporteFiltro = new reporteFiltro(0, 0, 0, 0, 0, "", 0);

  constructor(
    private apioperacion: ApiOperacionService,
    private apidireccion: ApiDireccionService,
    private apianio: ApiAnioService,
    private apimes: ApiMesService,
    private apireporte: ApiReportesService,
    private apixlsx: ApiXlsxService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.menu = [
      {
        nombre: "Dirección: Proyeccion Vs Ejecucion",
        url: "/reporte-direccion",
        N: true,
        active: "",
      },

      {
        nombre: "Dirección: Presupuesto en Riesgo",
        url: "/reporte-direccion-riesgo/",
        N: true,
        active: "",
      },

      {
        nombre: "Dirección: Actividades Vencidas",
        url: "/reporte-direccion-actividades/",
        N: true,
        active: "",
      },
      {
        nombre: "Dirección: Comparativo Ejecución",
        url: "/reporte-direccion-comparativa-ejecucion/",
        N: true,
        active: "active",
      },
      { nombre: "Exportar a Excell", BotonReporte: true },
      {
        nombre: "Ejecución Por Grupo de Gasto",
        url: "/reporte-objeto-gasto/",
        N: true,
        active: "",
      },
      {
        nombre: "Dirección: Ejecución Indicadores",
        url: "/reporte-indicador-fisico/",
        N: true,
        active: "",
      },
    ];
  }

  ngOnInit(): void {
    this.apioperacion.Get().subscribe((res) => {
      this.listaOperaciones = res.modelo;

      this.apianio.GetAnio().subscribe((res) => {
        this.listaAnio = res.modelo;

        this.apidireccion.Get().subscribe((res) => {
          this.listaDireccion = res.modelo;
        });
      });
    });
  }

  onRegresar() {
    this.router.navigate(["/lista-operaciones"]);
  }

  onGenerarReporte() {
    this.filtro.ANIO = this.anioA;
    this.apireporte
      .GetReporteDireccionComparativoEjecucion(this.filtro)
      .subscribe((res) => {
        this.listaAnioA = res.modelo;

        this.filtro.ANIO = this.anioB;
        this.apireporte
          .GetReporteDireccionComparativoEjecucion(this.filtro)
          .subscribe((res) => {
            this.listaAnioB = res.modelo;
          });
      });
  }

  onReporte() {
    var downloadLink;
    var dataType = "application/vnd.ms-excel";
    var tableSelect = document.getElementById("tabla");
    var tableHTML = tableSelect.outerHTML.replace(/ /g, "%20");

    // referencia agregada
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      var blob = new Blob(["\ufeff", tableHTML], {
        type: dataType,
      });
      navigator.msSaveOrOpenBlob(blob, "Nombre.xls");
    } else {
      // link de archivo
      downloadLink.href = "data:" + dataType + ", " + tableHTML;

      //el nombre archivo a link
      downloadLink.download = "Nombre.xls";

      //ejecutando la descarga
      downloadLink.click();
    }
  }
  
}
