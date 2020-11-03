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
  selector: 'app-reporte-indicador-fisico',
  templateUrl: './reporte-indicador-fisico.component.html',
  styleUrls: ['./reporte-indicador-fisico.component.css']
})
export class ReporteIndicadorFisicoComponent implements OnInit {
  menu: menu[];

  listaDireccion: direccion[];
  listaOperaciones: operacion[];
  listaAnio: anio[];
  listaMesInicio: mes[];
  listaMesFinal: mes[];
  modelo: reporteDireccionAcumulado[];
  modelosuma: reporteDireccionAcumulado = new reporteDireccionAcumulado(
    0,
    "",
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  );
  filtro: reporteFiltro = new reporteFiltro(0, 0, 0, 0, 0, "", 0);

  mi: number = 2;
  mf: number = 10;
  value: number = 0;

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
        active: "",
      },
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
        active: "active",
      },
      { nombre: "Exportar a Excell", BotonReporte: true },
    ];
  }

  ngOnInit(): void {
    this.apioperacion.Get().subscribe((res) => {
      this.listaOperaciones = res.modelo;

      this.apimes.Get().subscribe((res) => {
        this.listaMesInicio = res.modelo;
        this.listaMesFinal = res.modelo;

        this.apianio.GetAnio().subscribe((res) => {
          this.listaAnio = res.modelo;

          this.apidireccion.Get().subscribe((res) => {
            this.listaDireccion = res.modelo;
          });
        });
      });
    });
  }

  onRegresar() {
    this.router.navigate(["/lista-operaciones"]);
  }

  onGenerarReporte() {
    this.apireporte.GetDireccionIndicadorFisico(this.filtro).subscribe((res) => {
      this.modelo = res.modelo;
      
      console.log(this.modelo);

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

      for (let index = 0; index <= 3; index++) {
        var th = document.createElement("th");
        th.setAttribute("scope", "col");

        switch (index) {
          case 0:
            var th_texto = document.createTextNode("Indicador");
            th.appendChild(th_texto);
            break;

          case 1:
            var th_texto = document.createTextNode("Programado");
            th.appendChild(th_texto);
            break;

          case 2:
            var th_texto = document.createTextNode("Ejecutado");
            th.appendChild(th_texto);
            break;

          case 3:
            var th_texto = document.createTextNode("% Ejecución");
            th.appendChild(th_texto);
            break;          
        }

        thead.appendChild(th);
      }

      for (let index = this.filtro.MES_I; index <= this.filtro.MES_F; index++) {
        var thp = document.createElement("th");
        thp.setAttribute("scope", "col");

        var the = document.createElement("th");
        the.setAttribute("scope", "col");

        switch (index) {
          case 1:
            var th_texto_p = document.createTextNode("Ene P");
            thp.appendChild(th_texto_p);

            var th_texto_e = document.createTextNode("Ene E");
            the.appendChild(th_texto_e);
            break;

          case 2:
            var th_texto_p = document.createTextNode("Feb P");
            thp.appendChild(th_texto_p);

            var th_texto_e = document.createTextNode("Feb E");
            the.appendChild(th_texto_e);
            break;

          case 3:
            var th_texto_p = document.createTextNode("Mar P");
            thp.appendChild(th_texto_p);

            var th_texto_e = document.createTextNode("Mar E");
            the.appendChild(th_texto_e);
            break;

          case 4:
            var th_texto_p = document.createTextNode("Abr P");
            thp.appendChild(th_texto_p);

            var th_texto_e = document.createTextNode("Abr E");
            the.appendChild(th_texto_e);
            break;

          case 5:
            var th_texto_p = document.createTextNode("May P");
            thp.appendChild(th_texto_p);

            var th_texto_e = document.createTextNode("May E");
            the.appendChild(th_texto_e);
            break;

          case 6:
            var th_texto_p = document.createTextNode("Jun P");
            thp.appendChild(th_texto_p);

            var th_texto_e = document.createTextNode("Jun E");
            the.appendChild(th_texto_e);
            break;

          case 7:
            var th_texto_p = document.createTextNode("Jul P");
            thp.appendChild(th_texto_p);

            var th_texto_e = document.createTextNode("Jul E");
            the.appendChild(th_texto_e);
            break;

          case 8:
            var th_texto_p = document.createTextNode("Ago P");
            thp.appendChild(th_texto_p);

            var th_texto_e = document.createTextNode("Ago E");
            the.appendChild(th_texto_e);
            break;

          case 9:
            var th_texto_p = document.createTextNode("Sep P");
            thp.appendChild(th_texto_p);

            var th_texto_e = document.createTextNode("Sep E");
            the.appendChild(th_texto_e);
            break;

          case 10:
            var th_texto_p = document.createTextNode("Oct P");
            thp.appendChild(th_texto_p);

            var th_texto_e = document.createTextNode("Oct E");
            the.appendChild(th_texto_e);
            break;

          case 11:
            var th_texto_p = document.createTextNode("Nov P");
            thp.appendChild(th_texto_p);

            var th_texto_e = document.createTextNode("Nov E");
            the.appendChild(th_texto_e);
            break;

          case 12:
            var th_texto_p = document.createTextNode("Dic P");
            thp.appendChild(th_texto_p);

            var th_texto_e = document.createTextNode("Dic E");
            the.appendChild(th_texto_e);
            break;
        }

        thead.appendChild(thp);
        thead.appendChild(the);
      }

      var tbbody = document.createElement("tbody");

      this.modelo.forEach((item) => {
        var tr = document.createElement("tr");

        for (let index = 0; index <= 3; index++) {
          var td = document.createElement("td");

          switch (index) {
            case 0:
              var p = document.createElement("p");
              p.setAttribute(
                "style",
                "width: 32px; text-align: center; font-size: 10px;"
              );
              var th_texto = document.createTextNode(item.NOMBRE.toString());
              p.appendChild(th_texto);
              td.appendChild(p);
              break;

            case 1:
              var th_texto = document.createTextNode(item.PROGRAMADO.toString());
              td.appendChild(th_texto);
              break;

            case 2:
              var th_texto = document.createTextNode(item.EJECUCION.toString());
              td.appendChild(th_texto);
              break;

            case 3:
              var th_texto = document.createTextNode(item.PE.toString());
              td.appendChild(th_texto);
              break;            
          }

          td.appendChild(th_texto);
          tr.appendChild(td);
        }

        for (
          let index = this.filtro.MES_I;
          index <= this.filtro.MES_F;
          index++
        ) {
          var tdp = document.createElement("td");
          var tde = document.createElement("td");

          switch (index) {
            case 1:
              var pptexto = document.createTextNode(item.ENERO_P.toString());
              tdp.appendChild(pptexto);

              var petexto = document.createTextNode(item.ENERO_E.toString());
              tde.appendChild(petexto);
              break;

            case 2:
              var pptexto = document.createTextNode(item.FEBRERO_P.toString());
              tdp.appendChild(pptexto);

              var petexto = document.createTextNode(item.FEBRERO_E.toString());
              tde.appendChild(petexto);
              break;

            case 3:
              var pptexto = document.createTextNode(item.MARZO_P.toString());
              tdp.appendChild(pptexto);

              var petexto = document.createTextNode(item.MARZO_E.toString());
              tde.appendChild(petexto);
              break;

            case 4:
              var pptexto = document.createTextNode(item.ABRIL_P.toString());
              tdp.appendChild(pptexto);

              var petexto = document.createTextNode(item.ABRIL_E.toString());
              tde.appendChild(petexto);
              break;

            case 5:
              var pptexto = document.createTextNode(item.MAYO_P.toString());
              tdp.appendChild(pptexto);

              var petexto = document.createTextNode(item.MAYO_E.toString());
              tde.appendChild(petexto);
              break;

            case 6:
              var pptexto = document.createTextNode(item.JUNIO_P.toString());
              tdp.appendChild(pptexto);

              var petexto = document.createTextNode(item.JUNIO_E.toString());
              tde.appendChild(petexto);
              break;

            case 7:
              var pptexto = document.createTextNode(item.JULIO_P.toString());
              tdp.appendChild(pptexto);

              var petexto = document.createTextNode(item.JULIO_E.toString());
              tde.appendChild(petexto);
              break;

            case 8:
              var pptexto = document.createTextNode(item.AGOSTO_P.toString());
              tdp.appendChild(pptexto);

              var petexto = document.createTextNode(item.AGOSTO_E.toString());
              tde.appendChild(petexto);
              break;

            case 9:
              var pptexto = document.createTextNode(item.SEPTIEMBRE_P.toString());
              tdp.appendChild(pptexto);

              var petexto = document.createTextNode(item.SEPTIEMBRE_E.toString());
              tde.appendChild(petexto);
              break;

            case 10:
              var pptexto = document.createTextNode(item.OCTUBRE_P.toString());
              tdp.appendChild(pptexto);

              var petexto = document.createTextNode(item.OCTUBRE_E.toString());
              tde.appendChild(petexto);
              break;

            case 11:
              var pptexto = document.createTextNode(item.NOVIEMBRE_P.toString());
              tdp.appendChild(pptexto);

              var petexto = document.createTextNode(item.NOVIEMBRE_E.toString());
              tde.appendChild(petexto);
              break;

            case 12:
              var pptexto = document.createTextNode(item.DICIEMBRE_P.toString());
              tdp.appendChild(pptexto);

              var petexto = document.createTextNode(item.DICIEMBRE_E.toString());
              tde.appendChild(petexto);
              break;
          }

          tr.appendChild(tdp);
          tr.appendChild(tde);
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
