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
import * as moment from "moment";

@Component({
  selector: "app-reporte-direccion",
  templateUrl: "./reporte-direccion.component.html",
  styleUrls: ["./reporte-direccion.component.css"],
})
export class ReporteDireccionComponent implements OnInit {
  menu: menu[];

  listaDireccion: direccion[];
  listaOperaciones: operacion[];
  listaAnio: anio[];
  listaMesInicio: mes[];
  listaMesFinal: mes[];
  modelo: reporteDireccionAcumulado[];
  modeloOperacion: reporteDireccionAcumulado[];
  modelosuma: reporteDireccionAcumulado = new reporteDireccionAcumulado(
    0,
    0,
    0,
    "",
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
        nombre: "Reporte Proyeccion Vs Ejecucion",
        url: "/reporte-direccion",
        N: true,
        active: "active",
      },
      { nombre: "Exportar a Excell", BotonReporte: true },
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
        active: "",
      },
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
    this.apireporte.GetReporteDireccion(this.filtro).subscribe((res) => {
      this.modelo = res.modelo;

      if (this.modelo != null) {
        this.apireporte
          .GetReporteDireccionOperacion(this.filtro)
          .subscribe((res) => {
            this.modeloOperacion = res.modelo;

            this.modelosuma = new reporteDireccionAcumulado(
              0,
              0,
              0,
              "",
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

            this.modelosuma.PROGRAMADO = this.modelo.reduce(
              (value, current) => value + current.PROGRAMADO,
              0
            );
            this.modelosuma.EJECUCION = this.modelo.reduce(
              (value, current) => value + current.EJECUCION,
              0
            );

            if (this.modelosuma.EJECUCION > 0) {
              this.modelosuma.PE = Math.round(
                (this.modelosuma.EJECUCION / this.modelosuma.PROGRAMADO) * 100
              );
            }

            this.modelosuma.POR_EJECUTAR = this.modelo.reduce(
              (value, current) => value + current.POR_EJECUTAR,
              0
            );

            this.modelosuma.ENERO_P = this.modelo.reduce(
              (value, current) => value + current.ENERO_P,
              0
            );
            this.modelosuma.ENERO_E = this.modelo.reduce(
              (value, current) => value + current.ENERO_E,
              0
            );

            this.modelosuma.FEBRERO_P = this.modelo.reduce(
              (value, current) => value + current.FEBRERO_P,
              0
            );
            this.modelosuma.FEBRERO_E = this.modelo.reduce(
              (value, current) => value + current.FEBRERO_E,
              0
            );

            this.modelosuma.MARZO_P = this.modelo.reduce(
              (value, current) => value + current.MARZO_P,
              0
            );
            this.modelosuma.MARZO_E = this.modelo.reduce(
              (value, current) => value + current.MARZO_E,
              0
            );

            this.modelosuma.ABRIL_P = this.modelo.reduce(
              (value, current) => value + current.ABRIL_P,
              0
            );
            this.modelosuma.ABRIL_E = this.modelo.reduce(
              (value, current) => value + current.ABRIL_E,
              0
            );

            this.modelosuma.MAYO_P = this.modelo.reduce(
              (value, current) => value + current.MAYO_P,
              0
            );
            this.modelosuma.MAYO_E = this.modelo.reduce(
              (value, current) => value + current.MAYO_E,
              0
            );

            this.modelosuma.JUNIO_P = this.modelo.reduce(
              (value, current) => value + current.JUNIO_P,
              0
            );
            this.modelosuma.JUNIO_E = this.modelo.reduce(
              (value, current) => value + current.JUNIO_E,
              0
            );

            this.modelosuma.JULIO_P = this.modelo.reduce(
              (value, current) => value + current.JULIO_P,
              0
            );
            this.modelosuma.JULIO_E = this.modelo.reduce(
              (value, current) => value + current.JULIO_E,
              0
            );

            this.modelosuma.AGOSTO_P = this.modelo.reduce(
              (value, current) => value + current.AGOSTO_P,
              0
            );
            this.modelosuma.AGOSTO_E = this.modelo.reduce(
              (value, current) => value + current.AGOSTO_E,
              0
            );

            this.modelosuma.SEPTIEMBRE_P = this.modelo.reduce(
              (value, current) => value + current.SEPTIEMBRE_P,
              0
            );
            this.modelosuma.SEPTIEMBRE_E = this.modelo.reduce(
              (value, current) => value + current.SEPTIEMBRE_E,
              0
            );

            this.modelosuma.OCTUBRE_P = this.modelo.reduce(
              (value, current) => value + current.OCTUBRE_P,
              0
            );
            this.modelosuma.OCTUBRE_E = this.modelo.reduce(
              (value, current) => value + current.OCTUBRE_E,
              0
            );

            this.modelosuma.NOVIEMBRE_P = this.modelo.reduce(
              (value, current) => value + current.NOVIEMBRE_P,
              0
            );
            this.modelosuma.NOVIEMBRE_E = this.modelo.reduce(
              (value, current) => value + current.NOVIEMBRE_E,
              0
            );

            this.modelosuma.DICIEMBRE_P = this.modelo.reduce(
              (value, current) => value + current.DICIEMBRE_P,
              0
            );
            this.modelosuma.DICIEMBRE_E = this.modelo.reduce(
              (value, current) => value + current.DICIEMBRE_E,
              0
            );

            var formatC = require("currency-formatter");

            var body = document.getElementById("tabla-reporte");

            // Crea un elemento <table> y un elemento <tbody>
            var tabla = document.getElementById("reporte");
            console.log(tabla);

            if (tabla != null) {
              tabla.remove();
            }

            tabla = document.createElement("table");
            tabla.setAttribute("id", "reporte");

            tabla.setAttribute("class", "table");
            tabla.setAttribute("style", "font-size:smaller;");

            var thead = document.createElement("thead");
            thead.setAttribute("style", "text-align: center;");

            //  TITULO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

            for (let index = 0; index < 5; index++) {
              var th = document.createElement("th");
              th.setAttribute("scope", "col");

              switch (index) {
                case 0:
                  var th_texto = document.createTextNode("Dirección");
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

                case 4:
                  var th_texto = document.createTextNode("Por Ejecutar");
                  th.appendChild(th_texto);
                  break;
              }

              thead.appendChild(th);
            }

            for (
              let index = this.filtro.MES_I;
              index <= this.filtro.MES_F;
              index++
            ) {
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

            //  TITULO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

            var tbbody = document.createElement("tbody");

            this.modelo.forEach((item) => {
              var tr = document.createElement("tr");
              tr.setAttribute("style", "font-weight: bold");

              //  DIRECCION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

              for (let index = 0; index < 5; index++) {
                var td = document.createElement("td");

                switch (index) {
                  case 0:
                    var p = document.createElement("p");
                    p.setAttribute(
                      "style",
                      "width: 32px; text-align: center; font-size: 10px;"
                    );
                    var th_texto = document.createTextNode(
                      item.NOMBRE.toString()
                    );
                    p.appendChild(th_texto);
                    td.appendChild(p);
                    break;

                  case 1:
                    var th_texto = document.createTextNode(
                      formatC.format(item.PROGRAMADO, { code: "USD" })
                    );
                    td.appendChild(th_texto);
                    break;

                  case 2:
                    var th_texto = document.createTextNode(
                      formatC.format(item.EJECUCION, { code: "USD" })
                    );
                    td.appendChild(th_texto);
                    break;

                  case 3:
                    var th_texto = document.createTextNode(item.PE.toString());
                    td.appendChild(th_texto);
                    break;

                  case 4:
                    var th_texto = document.createTextNode(
                      formatC.format(item.POR_EJECUTAR, { code: "USD" })
                    );
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
                    var pptexto = document.createTextNode(
                      formatC.format(item.ENERO_P, { code: "USD" })
                    );
                    tdp.appendChild(pptexto);
                    tdp.setAttribute(
                      "style",
                      "color: blue"
                    );

                    var petexto = document.createTextNode(
                      formatC.format(item.ENERO_E, { code: "USD" })
                    );
                    tde.appendChild(petexto);
                    tde.setAttribute(
                      "style",
                      "color: Green"
                    );
                    break;

                  case 2:
                    var pptexto = document.createTextNode(
                      formatC.format(item.FEBRERO_P, { code: "USD" })
                    );
                    tdp.appendChild(pptexto);
                    tdp.setAttribute(
                      "style",
                      "color: blue"
                    );

                    var petexto = document.createTextNode(
                      formatC.format(item.FEBRERO_E, { code: "USD" })
                    );
                    tde.appendChild(petexto);
                    tde.setAttribute(
                      "style",
                      "color: Green"
                    );
                    break;

                  case 3:
                    var pptexto = document.createTextNode(
                      formatC.format(item.MARZO_P, { code: "USD" })
                    );
                    tdp.appendChild(pptexto);
                    tdp.setAttribute(
                      "style",
                      "color: blue"
                    );

                    var petexto = document.createTextNode(
                      formatC.format(item.MARZO_E, { code: "USD" })
                    );
                    tde.appendChild(petexto);
                    tde.setAttribute(
                      "style",
                      "color: Green"
                    );
                    break;

                  case 4:
                    var pptexto = document.createTextNode(
                      formatC.format(item.ABRIL_P, { code: "USD" })
                    );
                    tdp.appendChild(pptexto);
                    tdp.setAttribute(
                      "style",
                      "color: blue"
                    );

                    var petexto = document.createTextNode(
                      formatC.format(item.ABRIL_E, { code: "USD" })
                    );
                    tde.appendChild(petexto);
                    tde.setAttribute(
                      "style",
                      "color: Green"
                    );
                    break;

                  case 5:
                    var pptexto = document.createTextNode(
                      formatC.format(item.MAYO_P, { code: "USD" })
                    );
                    tdp.appendChild(pptexto);
                    tdp.setAttribute(
                      "style",
                      "color: blue"
                    );

                    var petexto = document.createTextNode(
                      formatC.format(item.MAYO_E, { code: "USD" })
                    );
                    tde.appendChild(petexto);
                    tde.setAttribute(
                      "style",
                      "color: Green"
                    );
                    break;

                  case 6:
                    var pptexto = document.createTextNode(
                      formatC.format(item.JUNIO_P, { code: "USD" })
                    );
                    tdp.appendChild(pptexto);
                    tdp.setAttribute(
                      "style",
                      "color: blue"
                    );

                    var petexto = document.createTextNode(
                      formatC.format(item.JUNIO_E, { code: "USD" })
                    );
                    tde.appendChild(petexto);
                    tde.setAttribute(
                      "style",
                      "color: Green"
                    );
                    break;

                  case 7:
                    var pptexto = document.createTextNode(
                      formatC.format(item.JULIO_P, { code: "USD" })
                    );
                    tdp.appendChild(pptexto);
                    tdp.setAttribute(
                      "style",
                      "color: blue"
                    );

                    var petexto = document.createTextNode(
                      formatC.format(item.JULIO_E, { code: "USD" })
                    );
                    tde.appendChild(petexto);
                    tde.setAttribute(
                      "style",
                      "color: Green"
                    );
                    break;

                  case 8:
                    var pptexto = document.createTextNode(
                      formatC.format(item.AGOSTO_P, { code: "USD" })
                    );
                    tdp.appendChild(pptexto);
                    tdp.setAttribute(
                      "style",
                      "color: blue"
                    );

                    var petexto = document.createTextNode(
                      formatC.format(item.AGOSTO_E, { code: "USD" })
                    );
                    tde.appendChild(petexto);
                    tde.setAttribute(
                      "style",
                      "color: Green"
                    );
                    break;

                  case 9:
                    var pptexto = document.createTextNode(
                      formatC.format(item.SEPTIEMBRE_P, { code: "USD" })
                    );
                    tdp.appendChild(pptexto);
                    tdp.setAttribute(
                      "style",
                      "color: blue"
                    );

                    var petexto = document.createTextNode(
                      formatC.format(item.SEPTIEMBRE_E, { code: "USD" })
                    );
                    tde.appendChild(petexto);
                    tde.setAttribute(
                      "style",
                      "color: Green"
                    );
                    break;

                  case 10:
                    var pptexto = document.createTextNode(
                      formatC.format(item.OCTUBRE_P, { code: "USD" })
                    );
                    tdp.appendChild(pptexto);
                    tdp.setAttribute(
                      "style",
                      "color: blue"
                    );

                    var petexto = document.createTextNode(
                      formatC.format(item.OCTUBRE_E, { code: "USD" })
                    );
                    tde.appendChild(petexto);
                    tde.setAttribute(
                      "style",
                      "color: Green"
                    );
                    break;

                  case 11:
                    var pptexto = document.createTextNode(
                      formatC.format(item.NOVIEMBRE_P, { code: "USD" })
                    );
                    tdp.appendChild(pptexto);
                    tdp.setAttribute(
                      "style",
                      "color: blue"
                    );

                    var petexto = document.createTextNode(
                      formatC.format(item.NOVIEMBRE_E, { code: "USD" })
                    );
                    tde.appendChild(petexto);
                    tde.setAttribute(
                      "style",
                      "color: Green"
                    );
                    break;

                  case 12:
                    var pptexto = document.createTextNode(
                      formatC.format(item.DICIEMBRE_P, { code: "USD" })
                    );
                    tdp.appendChild(pptexto);
                    tdp.setAttribute(
                      "style",
                      "color: blue"
                    );

                    var petexto = document.createTextNode(
                      formatC.format(item.DICIEMBRE_E, { code: "USD" })
                    );
                    tde.appendChild(petexto);
                    tde.setAttribute(
                      "style",
                      "color: Green"
                    );
                    break;
                }

                tr.appendChild(tdp);
                tr.appendChild(tde);
              }

              tbbody.appendChild(tr);
              //  DIRECCION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

              //OPERACION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
              this.modeloOperacion.forEach((itemO) => {
                if (itemO.DIRECCION_ID == item.ID) {
                  var trO = document.createElement("tr");

                  for (let index = 0; index < 5; index++) {
                    var td = document.createElement("td");

                    switch (index) {
                      case 0:
                        var p = document.createElement("p");
                        p.setAttribute(
                          "style",
                          "width: 32px; text-align: center; font-size: 10px;"
                        );
                        var th_texto = document.createTextNode(
                          itemO.CODIGO.toString()
                        );
                        p.appendChild(th_texto);
                        td.appendChild(p);
                        break;

                      case 1:
                        var th_texto = document.createTextNode(
                          formatC.format(itemO.PROGRAMADO, { code: "USD" })
                        );
                        td.appendChild(th_texto);
                        break;

                      case 2:
                        var th_texto = document.createTextNode(
                          formatC.format(itemO.EJECUCION, { code: "USD" })
                        );
                        td.appendChild(th_texto);
                        break;

                      case 3:
                        var th_texto = document.createTextNode(
                          itemO.PE.toString()
                        );
                        td.appendChild(th_texto);
                        break;

                      case 4:
                        var th_texto = document.createTextNode(
                          formatC.format(itemO.POR_EJECUTAR, { code: "USD" })
                        );
                        td.appendChild(th_texto);
                        break;
                    }

                    td.appendChild(th_texto);
                    trO.appendChild(td);
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
                        var pptexto = document.createTextNode(
                          formatC.format(itemO.ENERO_P, { code: "USD" })
                        );
                        tdp.appendChild(pptexto);
                        tdp.setAttribute(
                          "style",
                          "color: blue"
                        );

                        var petexto = document.createTextNode(
                          formatC.format(itemO.ENERO_E, { code: "USD" })
                        );
                        tde.appendChild(petexto);
                        tde.setAttribute(
                          "style",
                          "color: Green"
                        );
                        break;

                      case 2:
                        var pptexto = document.createTextNode(
                          formatC.format(itemO.FEBRERO_P, { code: "USD" })
                        );
                        tdp.appendChild(pptexto);
                        tdp.setAttribute(
                          "style",
                          "color: blue"
                        );

                        var petexto = document.createTextNode(
                          formatC.format(itemO.FEBRERO_E, { code: "USD" })
                        );
                        tde.appendChild(petexto);
                        tde.setAttribute(
                          "style",
                          "color: Green"
                        );
                        break;

                      case 3:
                        var pptexto = document.createTextNode(
                          formatC.format(itemO.MARZO_P, { code: "USD" })
                        );
                        tdp.appendChild(pptexto);
                        tdp.setAttribute(
                          "style",
                          "color: blue"
                        );

                        var petexto = document.createTextNode(
                          formatC.format(itemO.MARZO_E, { code: "USD" })
                        );
                        tde.appendChild(petexto);
                        tde.setAttribute(
                          "style",
                          "color: Green"
                        );
                        break;

                      case 4:
                        var pptexto = document.createTextNode(
                          formatC.format(itemO.ABRIL_P, { code: "USD" })
                        );
                        tdp.appendChild(pptexto);
                        tdp.setAttribute(
                          "style",
                          "color: blue"
                        );

                        var petexto = document.createTextNode(
                          formatC.format(itemO.ABRIL_E, { code: "USD" })
                        );
                        tde.appendChild(petexto);
                        tde.setAttribute(
                          "style",
                          "color: Green"
                        );
                        break;

                      case 5:
                        var pptexto = document.createTextNode(
                          formatC.format(itemO.MAYO_P, { code: "USD" })
                        );
                        tdp.appendChild(pptexto);
                        tdp.setAttribute(
                          "style",
                          "color: blue"
                        );

                        var petexto = document.createTextNode(
                          formatC.format(itemO.MAYO_E, { code: "USD" })
                        );
                        tde.appendChild(petexto);
                        tde.setAttribute(
                          "style",
                          "color: Green"
                        );
                        break;

                      case 6:
                        var pptexto = document.createTextNode(
                          formatC.format(itemO.JUNIO_P, { code: "USD" })
                        );
                        tdp.appendChild(pptexto);
                        tdp.setAttribute(
                          "style",
                          "color: blue"
                        );

                        var petexto = document.createTextNode(
                          formatC.format(itemO.JUNIO_E, { code: "USD" })
                        );
                        tde.appendChild(petexto);
                        tde.setAttribute(
                          "style",
                          "color: Green"
                        );
                        break;

                      case 7:
                        var pptexto = document.createTextNode(
                          formatC.format(itemO.JULIO_P, { code: "USD" })
                        );
                        tdp.appendChild(pptexto);
                        tdp.setAttribute(
                          "style",
                          "color: blue"
                        );

                        var petexto = document.createTextNode(
                          formatC.format(itemO.JULIO_E, { code: "USD" })
                        );
                        tde.appendChild(petexto);
                        tde.setAttribute(
                          "style",
                          "color: Green"
                        );
                        break;

                      case 8:
                        var pptexto = document.createTextNode(
                          formatC.format(itemO.AGOSTO_P, { code: "USD" })
                        );
                        tdp.appendChild(pptexto);
                        tdp.setAttribute(
                          "style",
                          "color: blue"
                        );

                        var petexto = document.createTextNode(
                          formatC.format(itemO.AGOSTO_E, { code: "USD" })
                        );
                        tde.appendChild(petexto);
                        tde.setAttribute(
                          "style",
                          "color: Green"
                        );
                        break;

                      case 9:
                        var pptexto = document.createTextNode(
                          formatC.format(itemO.SEPTIEMBRE_P, { code: "USD" })
                        );
                        tdp.appendChild(pptexto);
                        tdp.setAttribute(
                          "style",
                          "color: blue"
                        );

                        var petexto = document.createTextNode(
                          formatC.format(itemO.SEPTIEMBRE_E, { code: "USD" })
                        );
                        tde.appendChild(petexto);
                        tde.setAttribute(
                          "style",
                          "color: Green"
                        );
                        break;

                      case 10:
                        var pptexto = document.createTextNode(
                          formatC.format(itemO.OCTUBRE_P, { code: "USD" })
                        );
                        tdp.appendChild(pptexto);
                        tdp.setAttribute(
                          "style",
                          "color: blue"
                        );

                        var petexto = document.createTextNode(
                          formatC.format(itemO.OCTUBRE_E, { code: "USD" })
                        );
                        tde.appendChild(petexto);
                        tde.setAttribute(
                          "style",
                          "color: Green"
                        );
                        break;

                      case 11:
                        var pptexto = document.createTextNode(
                          formatC.format(itemO.NOVIEMBRE_P, { code: "USD" })
                        );
                        tdp.appendChild(pptexto);
                        tdp.setAttribute(
                          "style",
                          "color: blue"
                        );

                        var petexto = document.createTextNode(
                          formatC.format(itemO.NOVIEMBRE_E, { code: "USD" })
                        );
                        tde.appendChild(petexto);
                        tde.setAttribute(
                          "style",
                          "color: Green"
                        );
                        break;

                      case 12:
                        var pptexto = document.createTextNode(
                          formatC.format(itemO.DICIEMBRE_P, { code: "USD" })
                        );
                        tdp.appendChild(pptexto);
                        tdp.setAttribute(
                          "style",
                          "color: blue"
                        );

                        var petexto = document.createTextNode(
                          formatC.format(itemO.DICIEMBRE_E, { code: "USD" })
                        );
                        tde.appendChild(petexto);
                        tde.setAttribute(
                          "style",
                          "color: Green"
                        );
                        break;
                    }

                    trO.appendChild(tdp);
                    trO.appendChild(tde);
                  }

                  tbbody.appendChild(trO);
                }
              });

              //OPERACION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
            });

            //  TOTALES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            var tr = document.createElement("tr");
            tr.setAttribute("style", "font-weight: bold");

            for (let index = 0; index < 5; index++) {
              var td = document.createElement("td");

              switch (index) {
                case 0:
                  var p = document.createElement("p");
                  p.setAttribute(
                    "style",
                    "width: 32px; text-align: center; font-size: 10px;"
                  );
                  var th_texto = document.createTextNode("Totales");
                  p.appendChild(th_texto);
                  td.appendChild(p);
                  break;

                case 1:
                  var th_texto = document.createTextNode(
                    formatC.format(this.modelosuma.PROGRAMADO, { code: "USD" })
                  );
                  td.appendChild(th_texto);
                  break;

                case 2:
                  var th_texto = document.createTextNode(
                    formatC.format(this.modelosuma.EJECUCION, { code: "USD" })
                  );
                  td.appendChild(th_texto);
                  break;

                case 3:
                  var th_texto = document.createTextNode(
                    this.modelosuma.PE.toString()
                  );
                  td.appendChild(th_texto);
                  break;

                case 4:
                  var th_texto = document.createTextNode(
                    formatC.format(this.modelosuma.POR_EJECUTAR, {
                      code: "USD",
                    })
                  );
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
                  var pptexto = document.createTextNode(
                    formatC.format(this.modelosuma.ENERO_P, { code: "USD" })
                  );
                  tdp.appendChild(pptexto);
                  tdp.setAttribute(
                    "style",
                    "color: blue"
                  );

                  var petexto = document.createTextNode(
                    formatC.format(this.modelosuma.ENERO_E, { code: "USD" })
                  );
                  tde.appendChild(petexto);
                  tde.setAttribute(
                    "style",
                    "color: Green"
                  );
                  break;

                case 2:
                  var pptexto = document.createTextNode(
                    formatC.format(this.modelosuma.FEBRERO_P, { code: "USD" })
                  );
                  tdp.appendChild(pptexto);
                  tdp.setAttribute(
                    "style",
                    "color: blue"
                  );

                  var petexto = document.createTextNode(
                    formatC.format(this.modelosuma.FEBRERO_E, { code: "USD" })
                  );
                  tde.appendChild(petexto);
                  tde.setAttribute(
                    "style",
                    "color: Green"
                  );
                  break;

                case 3:
                  var pptexto = document.createTextNode(
                    formatC.format(this.modelosuma.MARZO_P, { code: "USD" })
                  );
                  tdp.appendChild(pptexto);
                  tdp.setAttribute(
                    "style",
                    "color: blue"
                  );

                  var petexto = document.createTextNode(
                    formatC.format(this.modelosuma.MARZO_E, { code: "USD" })
                  );
                  tde.appendChild(petexto);
                  tde.setAttribute(
                    "style",
                    "color: Green"
                  );
                  break;

                case 4:
                  var pptexto = document.createTextNode(
                    formatC.format(this.modelosuma.ABRIL_P, { code: "USD" })
                  );
                  tdp.appendChild(pptexto);
                  tdp.setAttribute(
                    "style",
                    "color: blue"
                  );

                  var petexto = document.createTextNode(
                    formatC.format(this.modelosuma.ABRIL_E, { code: "USD" })
                  );
                  tde.appendChild(petexto);
                  tde.setAttribute(
                    "style",
                    "color: Green"
                  );
                  break;

                case 5:
                  var pptexto = document.createTextNode(
                    formatC.format(this.modelosuma.MAYO_P, { code: "USD" })
                  );
                  tdp.appendChild(pptexto);
                  tdp.setAttribute(
                    "style",
                    "color: blue"
                  );

                  var petexto = document.createTextNode(
                    formatC.format(this.modelosuma.MAYO_E, { code: "USD" })
                  );
                  tde.appendChild(petexto);
                  tde.setAttribute(
                    "style",
                    "color: Green"
                  );
                  break;

                case 6:
                  var pptexto = document.createTextNode(
                    formatC.format(this.modelosuma.JUNIO_P, { code: "USD" })
                  );
                  tdp.appendChild(pptexto);
                  tdp.setAttribute(
                    "style",
                    "color: blue"
                  );

                  var petexto = document.createTextNode(
                    formatC.format(this.modelosuma.JUNIO_E, { code: "USD" })
                  );
                  tde.appendChild(petexto);
                  tde.setAttribute(
                    "style",
                    "color: Green"
                  );
                  break;

                case 7:
                  var pptexto = document.createTextNode(
                    formatC.format(this.modelosuma.JULIO_P, { code: "USD" })
                  );
                  tdp.appendChild(pptexto);
                  tdp.setAttribute(
                    "style",
                    "color: blue"
                  );

                  var petexto = document.createTextNode(
                    formatC.format(this.modelosuma.JULIO_E, { code: "USD" })
                  );
                  tde.appendChild(petexto);
                  tde.setAttribute(
                    "style",
                    "color: Green"
                  );
                  break;

                case 8:
                  var pptexto = document.createTextNode(
                    formatC.format(this.modelosuma.AGOSTO_P, { code: "USD" })
                  );
                  tdp.appendChild(pptexto);
                  tdp.setAttribute(
                    "style",
                    "color: blue"
                  );

                  var petexto = document.createTextNode(
                    formatC.format(this.modelosuma.AGOSTO_E, { code: "USD" })
                  );
                  tde.appendChild(petexto);
                  tde.setAttribute(
                    "style",
                    "color: Green"
                  );
                  break;

                case 9:
                  var pptexto = document.createTextNode(
                    formatC.format(this.modelosuma.SEPTIEMBRE_P, {
                      code: "USD",
                    })
                  );
                  tdp.appendChild(pptexto);
                  tdp.setAttribute(
                    "style",
                    "color: blue"
                  );

                  var petexto = document.createTextNode(
                    formatC.format(this.modelosuma.SEPTIEMBRE_E, {
                      code: "USD",
                    })
                  );
                  tde.appendChild(petexto);
                  tde.setAttribute(
                    "style",
                    "color: Green"
                  );
                  break;

                case 10:
                  var pptexto = document.createTextNode(
                    formatC.format(this.modelosuma.OCTUBRE_P, { code: "USD" })
                  );
                  tdp.appendChild(pptexto);
                  tdp.setAttribute(
                    "style",
                    "color: blue"
                  );

                  var petexto = document.createTextNode(
                    formatC.format(this.modelosuma.OCTUBRE_E, { code: "USD" })
                  );
                  tde.appendChild(petexto);
                  tde.setAttribute(
                    "style",
                    "color: Green"
                  );
                  break;

                case 11:
                  var pptexto = document.createTextNode(
                    formatC.format(this.modelosuma.NOVIEMBRE_P, { code: "USD" })
                  );
                  tdp.appendChild(pptexto);
                  tdp.setAttribute(
                    "style",
                    "color: blue"
                  );

                  var petexto = document.createTextNode(
                    formatC.format(this.modelosuma.NOVIEMBRE_E, { code: "USD" })
                  );
                  tde.appendChild(petexto);
                  tde.setAttribute(
                    "style",
                    "color: Green"
                  );
                  break;

                case 12:
                  var pptexto = document.createTextNode(
                    formatC.format(this.modelosuma.DICIEMBRE_P, { code: "USD" })
                  );
                  tdp.appendChild(pptexto);
                  tdp.setAttribute(
                    "style",
                    "color: blue"
                  );

                  var petexto = document.createTextNode(
                    formatC.format(this.modelosuma.DICIEMBRE_E, { code: "USD" })
                  );
                  tde.appendChild(petexto);
                  tde.setAttribute(
                    "style",
                    "color: Green"
                  );
                  break;
              }

              tr.appendChild(tdp);
              tr.appendChild(tde);
            }

            //  TOTALES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

            tbbody.appendChild(tr);

            tabla.appendChild(thead);
            tabla.appendChild(tbbody);
            body.appendChild(tabla);
          });
      } else {
        // Crea un elemento <table> y un elemento <tbody>
        var tabla = document.getElementById("reporte");

        if (tabla != null) {
          tabla.remove();
        }
      }
    });

    // Obtener la referencia del elemento body
  }

  onReporte() {
    var downloadLink;
    var dataType = "application/vnd.ms-excel;charset=utf-8;";
    var tableSelect = document.getElementById("reporte");
    var tableHTML = tableSelect.outerHTML.replace(/ /g, "%20");
    var nombre =
      "Reporte Proyeccion vs ejecucion - fecha generacion " +
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
