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

  mi: number = 2;
  mf: number = 10;

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

        var formatC = require('currency-formatter');

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

        var th_pe = document.createElement("th");
        th_pe.setAttribute("scope", "col");
        var th_pe_texto = document.createTextNode("");
        th_pe.appendChild(th_pe_texto);
        thead.appendChild(th_pe);

        for (let index = this.filtro.MES_I; index <= this.filtro.MES_F; index++) {
          var th = document.createElement("th");
          th.setAttribute("scope", "col");

          switch (index) {
            case 1:
              var th_texto = document.createTextNode("Enero");
              th.appendChild(th_texto);
              break;

            case 2:
              var th_texto = document.createTextNode("Febrero");
              th.appendChild(th_texto);
              break;

            case 3:
              var th_texto = document.createTextNode("Marzo");
              th.appendChild(th_texto);
              break;

            case 4:
              var th_texto = document.createTextNode("Abril");
              th.appendChild(th_texto);
              break;

            case 5:
              var th_texto = document.createTextNode("Mayo");
              th.appendChild(th_texto);
              break;

            case 6:
              var th_texto = document.createTextNode("Junio");
              th.appendChild(th_texto);
              break;

            case 7:
              var th_texto = document.createTextNode("Julio");
              th.appendChild(th_texto);
              break;

            case 8:
              var th_texto = document.createTextNode("Agosto");
              th.appendChild(th_texto);
              break;

            case 9:
              var th_texto = document.createTextNode("Septiembre");
              th.appendChild(th_texto);
              break;

            case 10:
              var th_texto = document.createTextNode("Octubre");
              th.appendChild(th_texto);
              break;

            case 11:
              var th_texto = document.createTextNode("Noviembre");
              th.appendChild(th_texto);
              break;

            case 12:
              var th_texto = document.createTextNode("Diciembre");
              th.appendChild(th_texto);
              break;
          }

          thead.appendChild(th);
        }

        var tbbody = document.createElement("tbody");

        this.modelo.forEach(item => {
          var tr = document.createElement("tr");

          for (let index = 0; index < 5; index++) {
            var td = document.createElement("td");            

            switch (index) {
              case 0:
                var p = document.createElement("p");
                p.setAttribute("style", "width: 32px; text-align: center; font-size: 10px;");
                var th_texto = document.createTextNode(item.NOMBRE.toString());
                p.appendChild(th_texto);
                td.appendChild(p);
                break;

              case 1:
                var th_texto = document.createTextNode(formatC.format(item.PROGRAMADO, { code: 'USD' }));
                td.appendChild(th_texto);
                break;

              case 2:
                var th_texto = document.createTextNode(formatC.format(item.EJECUCION, { code: 'USD' }));
                td.appendChild(th_texto);
                break;

              case 3:
                var th_texto = document.createTextNode(item.PE.toString());
                td.appendChild(th_texto);
                break;

              case 4:
                var th_texto = document.createTextNode(formatC.format(item.POR_EJECUTAR, { code: 'USD' }));
                td.appendChild(th_texto);
                break;
            }

            td.appendChild(th_texto);
            tr.appendChild(td);
          }



          var td_pe = document.createElement("td");
          var tr_p = document.createElement("tr");
          var p_p = document.createElement("p");
          var p_p_texto = document.createTextNode("P");
          p_p.appendChild(p_p_texto);
          tr_p.appendChild(p_p);
          td_pe.appendChild(tr_p);

          var tr_e = document.createElement("tr");
          var p_e = document.createElement("p");
          var p_e_texto = document.createTextNode("E");
          p_e.appendChild(p_e_texto);
          tr_e.appendChild(p_e);
          td_pe.appendChild(tr_e);

          tr.appendChild(td_pe);

          for (let index = this.filtro.MES_I; index <= this.filtro.MES_F; index++) {
            var td = document.createElement("td");

            switch (index) {
              case 1:
                var trp = document.createElement("tr");
                var pp = document.createElement("p");
                var pptexto = document.createTextNode(formatC.format(item.ENERO_P, { code: 'USD' }));
                pp.appendChild(pptexto);
                trp.appendChild(pp);
                td.appendChild(trp);

                var tre = document.createElement("tr");
                var pe = document.createElement("p");
                var petexto = document.createTextNode(formatC.format(item.ENERO_E, { code: 'USD' }));
                pe.appendChild(petexto);
                tre.appendChild(pe);
                td.appendChild(tre);
                break;

              case 2:
                var trp = document.createElement("tr");
                var pp = document.createElement("p");
                var pptexto = document.createTextNode(formatC.format(item.FEBRERO_P, { code: 'USD' }));
                pp.appendChild(pptexto);
                trp.appendChild(pp);
                td.appendChild(trp);

                var tre = document.createElement("tr");
                var pe = document.createElement("p");
                var petexto = document.createTextNode(formatC.format(item.FEBRERO_E, { code: 'USD' }));
                pe.appendChild(petexto);
                tre.appendChild(pe);
                td.appendChild(tre);
                break;

              case 3:
                var trp = document.createElement("tr");
                var pp = document.createElement("p");
                var pptexto = document.createTextNode(formatC.format(item.MARZO_p, { code: 'USD' }));
                pp.appendChild(pptexto);
                trp.appendChild(pp);
                td.appendChild(trp);

                var tre = document.createElement("tr");
                var pe = document.createElement("p");
                var petexto = document.createTextNode(formatC.format(item.MARZO_E, { code: 'USD' }));
                pe.appendChild(petexto);
                tre.appendChild(pe);
                td.appendChild(tre);
                break;

              case 4:
                var trp = document.createElement("tr");
                var pp = document.createElement("p");
                var pptexto = document.createTextNode(formatC.format(item.ABRIL_P, { code: 'USD' }));
                pp.appendChild(pptexto);
                trp.appendChild(pp);
                td.appendChild(trp);

                var tre = document.createElement("tr");
                var pe = document.createElement("p");
                var petexto = document.createTextNode(formatC.format(item.ABRIL_E, { code: 'USD' }));
                pe.appendChild(petexto);
                tre.appendChild(pe);
                td.appendChild(tre);
                break;

              case 5:
                var trp = document.createElement("tr");
                var pp = document.createElement("p");
                var pptexto = document.createTextNode(formatC.format(item.MAYO_P, { code: 'USD' }));
                pp.appendChild(pptexto);
                trp.appendChild(pp);
                td.appendChild(trp);

                var tre = document.createElement("tr");
                var pe = document.createElement("p");
                var petexto = document.createTextNode(formatC.format(item.MAYO_E, { code: 'USD' }));
                pe.appendChild(petexto);
                tre.appendChild(pe);
                td.appendChild(tre);
                break;

              case 6:
                var trp = document.createElement("tr");
                var pp = document.createElement("p");
                var pptexto = document.createTextNode(formatC.format(item.JUNIO_P, { code: 'USD' }));
                pp.appendChild(pptexto);
                trp.appendChild(pp);
                td.appendChild(trp);

                var tre = document.createElement("tr");
                var pe = document.createElement("p");
                var petexto = document.createTextNode(formatC.format(item.JUNIO_E, { code: 'USD' }));
                pe.appendChild(petexto);
                tre.appendChild(pe);
                td.appendChild(tre);
                break;

              case 7:
                var trp = document.createElement("tr");
                var pp = document.createElement("p");
                var pptexto = document.createTextNode(formatC.format(item.JULIO_P, { code: 'USD' }));
                pp.appendChild(pptexto);
                trp.appendChild(pp);
                td.appendChild(trp);

                var tre = document.createElement("tr");
                var pe = document.createElement("p");
                var petexto = document.createTextNode(formatC.format(item.JULIO_E, { code: 'USD' }));
                pe.appendChild(petexto);
                tre.appendChild(pe);
                td.appendChild(tre);
                break;

              case 8:
                var trp = document.createElement("tr");
                var pp = document.createElement("p");
                var pptexto = document.createTextNode(formatC.format(item.AGOSTO_P, { code: 'USD' }));
                pp.appendChild(pptexto);
                trp.appendChild(pp);
                td.appendChild(trp);

                var tre = document.createElement("tr");
                var pe = document.createElement("p");
                var petexto = document.createTextNode(formatC.format(item.AGOSTO_E, { code: 'USD' }));
                pe.appendChild(petexto);
                tre.appendChild(pe);
                td.appendChild(tre);
                break;

              case 9:
                var trp = document.createElement("tr");
                var pp = document.createElement("p");
                var pptexto = document.createTextNode(formatC.format(item.SEPTIEMBRE_P, { code: 'USD' }));
                pp.appendChild(pptexto);
                trp.appendChild(pp);
                td.appendChild(trp);

                var tre = document.createElement("tr");
                var pe = document.createElement("p");
                var petexto = document.createTextNode(formatC.format(item.SEPTIEMBRE_E, { code: 'USD' }));
                pe.appendChild(petexto);
                tre.appendChild(pe);
                td.appendChild(tre);
                break;

              case 10:
                var trp = document.createElement("tr");
                var pp = document.createElement("p");
                var pptexto = document.createTextNode(formatC.format(item.OCTUBRE_P, { code: 'USD' }));
                pp.appendChild(pptexto);
                trp.appendChild(pp);
                td.appendChild(trp);

                var tre = document.createElement("tr");
                var pe = document.createElement("p");
                var petexto = document.createTextNode(formatC.format(item.OCTUBRE_E, { code: 'USD' }));
                pe.appendChild(petexto);
                tre.appendChild(pe);
                td.appendChild(tre);
                break;

              case 11:
                var trp = document.createElement("tr");
                var pp = document.createElement("p");
                var pptexto = document.createTextNode(formatC.format(item.NOVIEMBRE_P, { code: 'USD' }));
                pp.appendChild(pptexto);
                trp.appendChild(pp);
                td.appendChild(trp);

                var tre = document.createElement("tr");
                var pe = document.createElement("p");
                var petexto = document.createTextNode(formatC.format(item.NOVIEMBRE_E, { code: 'USD' }));
                pe.appendChild(petexto);
                tre.appendChild(pe);
                td.appendChild(tre);
                break;

              case 12:
                var trp = document.createElement("tr");
                var pp = document.createElement("p");
                var pptexto = document.createTextNode(formatC.format(item.DICIEMBRE_P, { code: 'USD' }));
                pp.appendChild(pptexto);
                trp.appendChild(pp);
                td.appendChild(trp);

                var tre = document.createElement("tr");
                var pe = document.createElement("p");
                var petexto = document.createTextNode(formatC.format(item.DICIEMBRE_E, { code: 'USD' }));
                pe.appendChild(petexto);
                tre.appendChild(pe);
                td.appendChild(tre);
                break;

            }

            tr.appendChild(td);

          }


          tbbody.appendChild(tr);
        });

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
}
