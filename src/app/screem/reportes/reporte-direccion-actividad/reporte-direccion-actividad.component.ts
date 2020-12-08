import { Component, OnInit } from "@angular/core";
import { menu } from "src/app/model/menu";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ApiOperacionService } from "src/app/service/api-operacion.service";
import { operacion } from "src/app/model/operacion";
import { ApiReportesService } from "src/app/service/api-reportes.service";
import { reporteFiltro } from "src/app/model/reporteFiltro";
import { ApiXlsxService } from "src/app/service/api-xlsx.service";
import { direccion } from "src/app/model/direccion";
import { ApiDireccionService } from "src/app/service/api-direccion.service";
import * as moment from "moment";
import { _global } from "src/app/_global";
import { reporteDireccionActividades } from "src/app/model/reporteDireccionActividades";

@Component({
  selector: "app-reporte-direccion-actividad",
  templateUrl: "./reporte-direccion-actividad.component.html",
  styleUrls: ["./reporte-direccion-actividad.component.css"],
})
export class ReporteDireccionActividadComponent implements OnInit {
  menu: menu[];

  listaDireccion: direccion[];
  listaOperaciones: operacion[];
  dateFinal: Date = new Date();
  modelo: reporteDireccionActividades[];

  filtro: reporteFiltro = new reporteFiltro(0, 0, 0, 0, 0, "", 0);

  constructor(
    private apioperacion: ApiOperacionService,
    private apidireccion: ApiDireccionService,
    private apireporte: ApiReportesService,
    private apixlsx: ApiXlsxService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.menu = [
      {
        nombre: "Reporte Proyeccion Vs Ejecucion",
        url: "/reporte-direccion",
        N: true,
        active: "",
      },

      {
        nombre: "Reporte Presupuesto en Riesgo",
        url: "/reporte-direccion-riesgo/",
        N: true,
        active: "",
      },
      {
        nombre: "Reporte Actividades Vencidas",
        url: "/reporte-direccion-actividades/",
        N: true,
        active: "active",
      },
      { nombre: "Exportar a Excell", BotonReporte: true },
      {
        nombre: "Reporte Comparativo Ejecución",
        url: "/reporte-direccion-comparativa-ejecucion/",
        N: true,
        active: "",
      },
      {
        nombre: "Reporte Por Grupo de Gasto",
        url: "/reporte-objeto-gasto/",
        N: true,
        active: "",
      },
      {
        nombre: "Reporte Ejecución Indicadores",
        url: "/reporte-indicador-fisico/",
        N: true,
        active: "",
      },
    ];
  }

  ngOnInit(): void {
    this.apioperacion.Get().subscribe((res) => {
      this.listaOperaciones = res.modelo;

      this.apidireccion.Get().subscribe((res) => {
        this.listaDireccion = res.modelo;
      });
    });
  }

  onRegresar() {
    this.router.navigate(["/lista-operaciones"]);
  }

  onGenerarReporte() {
    this.filtro.FECHA_F = moment(this.dateFinal).format("YYYYMMDD");

    this.apireporte
      .GetReporteDireccionActividad(this.filtro)
      .subscribe((res) => {
        this.modelo = res.modelo;
      });
  }

  onReporte() {
    var downloadLink;
    var dataType = "application/vnd.ms-excel;charset=utf-8;";
    var tableSelect = document.getElementById("reporte");
    var tableHTML = tableSelect.outerHTML.replace(/ /g, "%20");
    var nombre =
      "Actividades Vencidas - fecha generacion " +
      moment(new Date()).locale("es").format("LLLL");

    // referencia agregada
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      var blob = new Blob(["\ufeff", tableHTML], {
        type: dataType,
      });
      navigator.msSaveOrOpenBlob(blob, nombre + ".xls");
    } else {
      // link de archivo
      downloadLink.href = "data:" + dataType + ", " + tableHTML;

      //el nombre archivo a link
      downloadLink.download = nombre + ".xls";

      //ejecutando la descarga
      downloadLink.click();
    }
  }
}
