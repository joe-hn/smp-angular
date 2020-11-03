import { Component, OnInit } from "@angular/core";
import { menu } from "src/app/model/menu";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ApiOperacionService } from "src/app/service/api-operacion.service";
import { operacion } from "src/app/model/operacion";
import { ApiMesService } from "src/app/service/api-mes.service";
import { ApiReportesService } from "src/app/service/api-reportes.service";
import { reporteFiltro } from "src/app/model/reporteFiltro";
import { ApiXlsxService } from "src/app/service/api-xlsx.service";
import { anio } from "src/app/model/anio";
import { ApiAnioService } from "src/app/service/api-anio.service";
import { ObjetoGasto } from "src/app/model/objetoGasto";
import { ApiObjetogastoService } from "src/app/service/api-objetogasto.service";
import { reporteDireccionAcumulado } from "src/app/model/reporteDireccionAcumulado";
import { reporteObjetoGasto } from "src/app/model/reporteObjetoGasto";

@Component({
  selector: "app-reporte-objeto-gasto",
  templateUrl: "./reporte-objeto-gasto.component.html",
  styleUrls: ["./reporte-objeto-gasto.component.css"],
})
export class ReporteObjetoGastoComponent implements OnInit {
  menu: menu[];

  listaOperaciones: operacion[];
  listaAnio: anio[];
  listaObjetoGasto: ObjetoGasto[];

  filtro: reporteFiltro = new reporteFiltro(0, 0, 0, 0, 0, "", 0);
  modelo: reporteObjetoGasto[];

  constructor(
    private apioperacion: ApiOperacionService,
    private apiobjetogasto: ApiObjetogastoService,
    private apianio: ApiAnioService,
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
        active: "",
      },

      {
        nombre: "Ejecución Por Grupo de Gasto",
        url: "/reporte-objeto-gasto/",
        N: true,
        active: "active",
      },
      { nombre: "Exportar a Excell", BotonReporte: true },
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

        this.apiobjetogasto.Get().subscribe((res) => {
          this.listaObjetoGasto = res.modelo;
        });
      });
    });
  }

  onRegresar() {
    this.router.navigate(["/lista-operaciones"]);
  }

  onGenerarReporte() {
    this.apireporte.GetReporteObjetoGasto(this.filtro).subscribe((res) => {
      this.modelo = res.modelo;

      var formatC = require("currency-formatter");

      var body = document.getElementById("tabla-reporte");

      // Crea un elemento <table> y un elemento <tbody>
      var tabla = document.getElementById("reporte");
      if (tabla != null) {
        tabla.remove();
      }

      tabla = document.createElement("table");
      tabla.setAttribute("id", "reporte");

      tabla.setAttribute("class", "table");
      tabla.setAttribute("style", "font-size:smaller;");

      var thead = document.createElement("thead");
      thead.setAttribute("style", "text-align: center;");

      for (let index = 0; index < 18; index++) {
        var th = document.createElement("th");
        th.setAttribute("scope", "col");

        switch (index) {
          case 0:
            var th_texto = document.createTextNode("Grupo del Gasto");
            th.appendChild(th_texto);
            break;

          case 1:
            var th_texto = document.createTextNode("Totales");
            th.appendChild(th_texto);
            break;

          case 2:
            var th_texto = document.createTextNode("Enero");
            th.appendChild(th_texto);
            break;

          case 3:
            var th_texto = document.createTextNode("Febrero");
            th.appendChild(th_texto);
            break;

          case 4:
            var th_texto = document.createTextNode("Marzo");
            th.appendChild(th_texto);
            break;

          case 5:
            var th_texto = document.createTextNode("Trimestre I");
            th.appendChild(th_texto);
            break;

          case 6:
            var th_texto = document.createTextNode("Abril");
            th.appendChild(th_texto);
            break;

          case 7:
            var th_texto = document.createTextNode("Mayo");
            th.appendChild(th_texto);
            break;

          case 8:
            var th_texto = document.createTextNode("Junio");
            th.appendChild(th_texto);
            break;

          case 9:
            var th_texto = document.createTextNode("Trimestre II");
            th.appendChild(th_texto);
            break;

          case 10:
            var th_texto = document.createTextNode("Julio");
            th.appendChild(th_texto);
            break;

          case 11:
            var th_texto = document.createTextNode("Agosto");
            th.appendChild(th_texto);
            break;

          case 12:
            var th_texto = document.createTextNode("Septiembre");
            th.appendChild(th_texto);
            break;

          case 13:
            var th_texto = document.createTextNode("Trimestre III");
            th.appendChild(th_texto);
            break;

          case 14:
            var th_texto = document.createTextNode("Octubre");
            th.appendChild(th_texto);
            break;

          case 15:
            var th_texto = document.createTextNode("Noviembre");
            th.appendChild(th_texto);
            break;

          case 16:
            var th_texto = document.createTextNode("Diciembre");
            th.appendChild(th_texto);
            break;

          case 17:
            var th_texto = document.createTextNode("Trimestre IV");
            th.appendChild(th_texto);
            break;
        }

        thead.appendChild(th);
      }

      var tbbody = document.createElement("tbody");

      this.modelo.forEach((item) => {
        var tr = document.createElement("tr");

        for (let index = 0; index < 18; index++) {
          var td = document.createElement("td");

          switch (index) {
            case 0:
              var p = document.createElement("p");
              p.setAttribute(
                "style",
                "width: 32px; text-align: center; font-size: 10px;"
              );
              var th_texto = document.createTextNode(item.CODIGO.toString());
              p.appendChild(th_texto);
              td.appendChild(p);
              break;

            case 1:
              var th_texto = document.createTextNode(
                formatC.format(item.EJECUCION, { code: "USD" })
              );
              td.appendChild(th_texto);
              break;

            case 2:
              var th_texto = document.createTextNode(
                formatC.format(item.ENERO_E, { code: "USD" })
              );
              td.appendChild(th_texto);
              break;

            case 3:
              var th_texto = document.createTextNode(
                formatC.format(item.FEBRERO_E, { code: "USD" })
              );
              td.appendChild(th_texto);
              break;

            case 4:
              var th_texto = document.createTextNode(
                formatC.format(item.MARZO_E, { code: "USD" })
              );
              td.appendChild(th_texto);
              break;

            case 5:
              var th_texto = document.createTextNode(
                formatC.format(item.TRIMESTRE_I, { code: "USD" })
              );
              td.appendChild(th_texto);
              break;

            case 6:
              var th_texto = document.createTextNode(
                formatC.format(item.ABRIL_E, { code: "USD" })
              );
              td.appendChild(th_texto);
              break;

            case 7:
              var th_texto = document.createTextNode(
                formatC.format(item.MAYO_E, { code: "USD" })
              );
              td.appendChild(th_texto);
              break;

            case 8:
              var th_texto = document.createTextNode(
                formatC.format(item.JUNIO_E, { code: "USD" })
              );
              td.appendChild(th_texto);
              break;

            case 9:
              var th_texto = document.createTextNode(
                formatC.format(item.TRIMESTRE_II, { code: "USD" })
              );
              td.appendChild(th_texto);
              break;

            case 10:
              var th_texto = document.createTextNode(
                formatC.format(item.JULIO_E, { code: "USD" })
              );
              td.appendChild(th_texto);
              break;

            case 11:
              var th_texto = document.createTextNode(
                formatC.format(item.AGOSTO_E, { code: "USD" })
              );
              td.appendChild(th_texto);
              break;

            case 12:
              var th_texto = document.createTextNode(
                formatC.format(item.SEPTIEMBRE_E, { code: "USD" })
              );
              td.appendChild(th_texto);
              break;

            case 13:
              var th_texto = document.createTextNode(
                formatC.format(item.TRIMESTRE_III, { code: "USD" })
              );
              td.appendChild(th_texto);
              break;

            case 14:
              var th_texto = document.createTextNode(
                formatC.format(item.OCTUBRE_E, { code: "USD" })
              );
              td.appendChild(th_texto);
              break;

            case 15:
              var th_texto = document.createTextNode(
                formatC.format(item.NOVIEMBRE_E, { code: "USD" })
              );
              td.appendChild(th_texto);
              break;

            case 16:
              var th_texto = document.createTextNode(
                formatC.format(item.DICIEMBRE_E, { code: "USD" })
              );
              td.appendChild(th_texto);
              break;

            case 17:
              var th_texto = document.createTextNode(
                formatC.format(item.TRIMESTRE_IV, { code: "USD" })
              );
              td.appendChild(th_texto);
              break;
          }

          td.appendChild(th_texto);
          tr.appendChild(td);
        }

        tbbody.appendChild(tr);
      });

      tabla.appendChild(thead);
      tabla.appendChild(tbbody);
      body.appendChild(tabla);
    });
  }

  onReporte() {
    var downloadLink;
    var dataType = "application/vnd.ms-excel";
    var tableSelect = document.getElementById("tabla-reporte");
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
