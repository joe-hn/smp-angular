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
  selector: "app-reporte-direccion-riesgo",
  templateUrl: "./reporte-direccion-riesgo.component.html",
  styleUrls: ["./reporte-direccion-riesgo.component.css"],
})
export class ReporteDireccionRiesgoComponent implements OnInit {
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
        active: "active",
      },
      { nombre: "Exportar a Excell", BotonReporte: true },
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
    this.apireporte.GetReporteDireccionRiesgo(this.filtro).subscribe((res) => {
      this.modelo = res.modelo;

      this.modelosuma = new reporteDireccionAcumulado(
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

      this.modelosuma.PROGRAMADO = this.modelo.reduce(
        (value, current) => value + current.PROGRAMADO,
        0
      );
      this.modelosuma.EJECUCION = this.modelo.reduce(
        (value, current) => value + current.EJECUCION,
        0
      );
      this.modelosuma.MONTO_RIESGO = this.modelo.reduce(
        (value, current) => value + current.MONTO_RIESGO,
        0
      );

      this.modelosuma.ENERO_P = this.modelo.reduce(
        (value, current) => value + current.ENERO_P,
        0
      );
      this.modelosuma.ENERO_R = this.modelo.reduce(
        (value, current) => value + current.ENERO_R,
        0
      );

      this.modelosuma.FEBRERO_P = this.modelo.reduce(
        (value, current) => value + current.FEBRERO_P,
        0
      );
      this.modelosuma.FEBRERO_R = this.modelo.reduce(
        (value, current) => value + current.FEBRERO_R,
        0
      );

      this.modelosuma.MARZO_P = this.modelo.reduce(
        (value, current) => value + current.MARZO_P,
        0
      );
      this.modelosuma.MARZO_R = this.modelo.reduce(
        (value, current) => value + current.MARZO_R,
        0
      );

      this.modelosuma.ABRIL_P = this.modelo.reduce(
        (value, current) => value + current.ABRIL_P,
        0
      );
      this.modelosuma.ABRIL_R = this.modelo.reduce(
        (value, current) => value + current.ABRIL_R,
        0
      );

      this.modelosuma.MAYO_P = this.modelo.reduce(
        (value, current) => value + current.MAYO_P,
        0
      );
      this.modelosuma.MAYO_R = this.modelo.reduce(
        (value, current) => value + current.MAYO_R,
        0
      );

      this.modelosuma.JUNIO_P = this.modelo.reduce(
        (value, current) => value + current.JUNIO_P,
        0
      );
      this.modelosuma.JUNIO_R = this.modelo.reduce(
        (value, current) => value + current.JUNIO_R,
        0
      );

      this.modelosuma.JULIO_P = this.modelo.reduce(
        (value, current) => value + current.JULIO_P,
        0
      );
      this.modelosuma.JULIO_R = this.modelo.reduce(
        (value, current) => value + current.JULIO_R,
        0
      );

      this.modelosuma.AGOSTO_P = this.modelo.reduce(
        (value, current) => value + current.AGOSTO_P,
        0
      );
      this.modelosuma.AGOSTO_R = this.modelo.reduce(
        (value, current) => value + current.AGOSTO_R,
        0
      );

      this.modelosuma.SEPTIEMBRE_P = this.modelo.reduce(
        (value, current) => value + current.SEPTIEMBRE_P,
        0
      );
      this.modelosuma.SEPTIEMBRE_R = this.modelo.reduce(
        (value, current) => value + current.SEPTIEMBRE_R,
        0
      );

      this.modelosuma.OCTUBRE_P = this.modelo.reduce(
        (value, current) => value + current.OCTUBRE_P,
        0
      );
      this.modelosuma.OCTUBRE_R = this.modelo.reduce(
        (value, current) => value + current.OCTUBRE_R,
        0
      );

      this.modelosuma.NOVIEMBRE_P = this.modelo.reduce(
        (value, current) => value + current.NOVIEMBRE_P,
        0
      );
      this.modelosuma.NOVIEMBRE_R = this.modelo.reduce(
        (value, current) => value + current.NOVIEMBRE_R,
        0
      );

      this.modelosuma.DICIEMBRE_P = this.modelo.reduce(
        (value, current) => value + current.DICIEMBRE_P,
        0
      );
      this.modelosuma.DICIEMBRE_R = this.modelo.reduce(
        (value, current) => value + current.DICIEMBRE_R,
        0
      );

      console.log(this.modelosuma);

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
            var th_texto = document.createTextNode("% Presupuesto");
            th.appendChild(th_texto);
            break;

          case 4:
            var th_texto = document.createTextNode("Monto en Riesgo");
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
            var th_texto_e = document.createTextNode("Ene");
            the.appendChild(th_texto_e);
            break;

          case 2:
            var th_texto_e = document.createTextNode("Feb");
            the.appendChild(th_texto_e);
            break;

          case 3:
            var th_texto_e = document.createTextNode("Mar");
            the.appendChild(th_texto_e);
            break;

          case 4:            
            var th_texto_e = document.createTextNode("Abr");
            the.appendChild(th_texto_e);
            break;

          case 5:            
            var th_texto_e = document.createTextNode("May");
            the.appendChild(th_texto_e);
            break;

          case 6:            
            var th_texto_e = document.createTextNode("Jun");
            the.appendChild(th_texto_e);
            break;

          case 7:            
            var th_texto_e = document.createTextNode("Jul");
            the.appendChild(th_texto_e);
            break;

          case 8:            
            var th_texto_e = document.createTextNode("Ago");
            the.appendChild(th_texto_e);
            break;

          case 9:            
            var th_texto_e = document.createTextNode("Sep");
            the.appendChild(th_texto_e);
            break;

          case 10:            
            var th_texto_e = document.createTextNode("Oct");
            the.appendChild(th_texto_e);
            break;

          case 11:            
            var th_texto_e = document.createTextNode("Nov");
            the.appendChild(th_texto_e);
            break;

          case 12:            
            var th_texto_e = document.createTextNode("Dic");
            the.appendChild(th_texto_e);
            break;
        }
        
        thead.appendChild(the);
      }

      var tbbody = document.createElement("tbody");

      this.modelo.forEach((item) => {
        var tr = document.createElement("tr");

        for (let index = 0; index < 5; index++) {
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
                formatC.format(item.MONTO_RIESGO, { code: "USD" })
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
              var petexto = document.createTextNode(
                formatC.format(item.ENERO_R, { code: "USD" })
              );
              tde.appendChild(petexto);
              break;

            case 2:                            
              var petexto = document.createTextNode(
                formatC.format(item.FEBRERO_R, { code: "USD" })
              );
              tde.appendChild(petexto);
              break;

            case 3:              
              var petexto = document.createTextNode(
                formatC.format(item.MARZO_R, { code: "USD" })
              );
              tde.appendChild(petexto);
              break;

            case 4:              
              var petexto = document.createTextNode(
                formatC.format(item.ABRIL_R, { code: "USD" })
              );
              tde.appendChild(petexto);
              break;

            case 5:              
              var petexto = document.createTextNode(
                formatC.format(item.MAYO_R, { code: "USD" })
              );
              tde.appendChild(petexto);
              break;

            case 6:              
              var petexto = document.createTextNode(
                formatC.format(item.JUNIO_R, { code: "USD" })
              );
              tde.appendChild(petexto);
              break;

            case 7:              
              var petexto = document.createTextNode(
                formatC.format(item.JULIO_R, { code: "USD" })
              );
              tde.appendChild(petexto);
              break;

            case 8:              
              var petexto = document.createTextNode(
                formatC.format(item.AGOSTO_R, { code: "USD" })
              );
              tde.appendChild(petexto);
              break;

            case 9:              
              var petexto = document.createTextNode(
                formatC.format(item.SEPTIEMBRE_R, { code: "USD" })
              );
              tde.appendChild(petexto);
              break;

            case 10:              
              var petexto = document.createTextNode(
                formatC.format(item.OCTUBRE_R, { code: "USD" })
              );
              tde.appendChild(petexto);
              break;

            case 11:              
              var petexto = document.createTextNode(
                formatC.format(item.NOVIEMBRE_R, { code: "USD" })
              );
              tde.appendChild(petexto);
              break;

            case 12:              
              var petexto = document.createTextNode(
                formatC.format(item.DICIEMBRE_R, { code: "USD" })
              );
              tde.appendChild(petexto);
              break;
          }

          
          tr.appendChild(tde);
        }

        tbbody.appendChild(tr);
      });

      var tr = document.createElement("tr");

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
            var th_texto = document.createTextNode(" ");
            td.appendChild(th_texto);
            break;

          case 4:
            var th_texto = document.createTextNode(
              formatC.format(this.modelosuma.MONTO_RIESGO, { code: "USD" })
            );
            td.appendChild(th_texto);
            break;
        }

        td.appendChild(th_texto);
        tr.appendChild(td);
      }

      for (let index = this.filtro.MES_I; index <= this.filtro.MES_F; index++) {
        var tdp = document.createElement("td");
        var tde = document.createElement("td");

        switch (index) {
          case 1:            
            var petexto = document.createTextNode(
              formatC.format(this.modelosuma.ENERO_R, { code: "USD" })
            );
            tde.appendChild(petexto);
            break;

          case 2:           
            var petexto = document.createTextNode(
              formatC.format(this.modelosuma.FEBRERO_R, { code: "USD" })
            );
            tde.appendChild(petexto);
            break;

          case 3:            
            var petexto = document.createTextNode(
              formatC.format(this.modelosuma.MARZO_R, { code: "USD" })
            );
            tde.appendChild(petexto);
            break;

          case 4:           
            var petexto = document.createTextNode(
              formatC.format(this.modelosuma.ABRIL_R, { code: "USD" })
            );
            tde.appendChild(petexto);
            break;

          case 5:           
            var petexto = document.createTextNode(
              formatC.format(this.modelosuma.MAYO_R, { code: "USD" })
            );
            tde.appendChild(petexto);
            break;

          case 6:           
            var petexto = document.createTextNode(
              formatC.format(this.modelosuma.JUNIO_R, { code: "USD" })
            );
            tde.appendChild(petexto);
            break;

          case 7:           
            var petexto = document.createTextNode(
              formatC.format(this.modelosuma.JULIO_R, { code: "USD" })
            );
            tde.appendChild(petexto);
            break;

          case 8:           
            var petexto = document.createTextNode(
              formatC.format(this.modelosuma.AGOSTO_R, { code: "USD" })
            );
            tde.appendChild(petexto);
            break;

          case 9:           
            var petexto = document.createTextNode(
              formatC.format(this.modelosuma.SEPTIEMBRE_R, { code: "USD" })
            );
            tde.appendChild(petexto);
            break;

          case 10:           
            var petexto = document.createTextNode(
              formatC.format(this.modelosuma.OCTUBRE_R, { code: "USD" })
            );
            tde.appendChild(petexto);
            break;

          case 11:           
            var petexto = document.createTextNode(
              formatC.format(this.modelosuma.NOVIEMBRE_R, { code: "USD" })
            );
            tde.appendChild(petexto);
            break;

          case 12:            
            var petexto = document.createTextNode(
              formatC.format(this.modelosuma.DICIEMBRE_R, { code: "USD" })
            );
            tde.appendChild(petexto);
            break;
        }

        tr.appendChild(tde);
      }

      tbbody.appendChild(tr);

      tabla.appendChild(thead);
      tabla.appendChild(tbbody);
      body.appendChild(tabla);

      /*
        var tblBody = document.createElement("tbody");
    
        // Crea las celdas
        for (var i = 0; i < 2; i++) {
          // Crea las hileras de la tabla
          var hilera = document.createElement("tr");
    
          for (var j = 0; j < 2; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("celda en la hilera " + i + ", columna " + j);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
          }
    
          // agrega la hilera al final de la tabla (al final del elemento tblbody)
          tblBody.appendChild(hilera);
        }
    
        // posiciona el <tbody> debajo del elemento <table>
        tabla.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tabla);
        // modifica el atributo "border" de la tabla y lo fija a "2";
    
        */
    });

    // Obtener la referencia del elemento body
  }

  onReporte() {
    this.apireporte.GetReporteDireccionRiesgo(this.filtro).subscribe((res) => {
      this.apixlsx.exportToExcel(res.modelo, "Dirección");
    });

    // if (this.modelo != null) {
    //   var reporte = [];
    //   var fila = [];

    //   this.modelo.forEach((item) => {
    //     fila.push({
    //       Direccion: item.NOMBRE,
    //       Programado: item.PROGRAMADO,
    //       Ejecutado: item.EJECUCION,
    //       "% Ejecucion": item.PE,
    //       "Por Ejecutar": item.POR_EJECUTAR,
    //       "Enero P": item.ENERO_P,
    //       "Enero E": item.ENERO_E,
    //       "Febrero P": item.FEBRERO_P,
    //       "Febrero E": item.FEBRERO_E,
    //       "Marzo P": item.MARZO_P,
    //       "Marzo E": item.MARZO_E,
    //       "Abril P": item.ABRIL_P,
    //       "Abril E": item.ABRIL_E,
    //       "Mayo P": item.MAYO_P,
    //       "Mayo E": item.MAYO_E,
    //       "Junio P": item.JUNIO_P,
    //       "Junio E": item.JUNIO_E,
    //       "Julio P": item.JULIO_P,
    //       "Julio E": item.JULIO_E,
    //       "Agosto P": item.AGOSTO_P,
    //       "Agosto E": item.AGOSTO_E,
    //       "Septiembre P": item.SEPTIEMBRE_P,
    //       "Septiembre E": item.SEPTIEMBRE_E,
    //       "Octubre P": item.OCTUBRE_P,
    //       "Octubre E": item.OCTUBRE_E,
    //       "Noviembre P": item.NOVIEMBRE_P,
    //       "Noviembre E": item.NOVIEMBRE_E,
    //       "Diciembre P": item.DICIEMBRE_P,
    //       "Diciembre E": item.DICIEMBRE_E,
    //     });
    //   });

    //   console.log(fila);
    //   this.apixlsx.exportToExcel(fila, "Dirección");
    // }
  }
}
