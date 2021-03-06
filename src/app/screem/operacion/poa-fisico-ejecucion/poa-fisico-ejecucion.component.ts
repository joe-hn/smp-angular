import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalInformacionIndicadorGeneralComponent } from "src/app/component/modal-informacion-indicador-general/modal-informacion-indicador-general.component";
import { indicador } from "src/app/model/indicador";
import { indicadorDetalleFisico } from "src/app/model/indicadorDetalleFisico";
import { menu } from "src/app/model/menu";
import { poa } from "src/app/model/poa";
import { ApiIndicadorDetalleFisicoService } from "src/app/service/api-indicador-detalle-fisico.service";
import { ApiIndicadorService } from "src/app/service/api-indicador.service";
import { ApiPoaService } from "src/app/service/api-poa.service";

@Component({
  selector: "app-poa-fisico-ejecucion",
  templateUrl: "./poa-fisico-ejecucion.component.html",
  styleUrls: ["./poa-fisico-ejecucion.component.css"],
})
export class PoaFisicoEjecucionComponent implements OnInit {
  menu: menu[];

  poamodelo: poa = new poa(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "", "", "", "");
  indicadormodelo: indicador = new indicador(
    0,
    0,
    0,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    0,
    "",
    0,
    "",
    "",
    0,
    "",
    "",
    0,
    0,
    false
  );
  listaIndiadorValidacion: indicador[];
  lista: indicador[];
  poadetallemodelo: indicadorDetalleFisico[];
  indicadordetallefisicomodelo: indicadorDetalleFisico[];

  indicadorasociado: boolean = false;
  barraestado: boolean = false;
  estadoEdicion: boolean = false;

  constructor(
    private dialog: MatDialog,
    private api: ApiPoaService,
    private apiIndicadorFisico: ApiIndicadorDetalleFisicoService,
    private apiindicador: ApiIndicadorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.poamodelo.ID = +this.route.snapshot.params.id;

    this.api.GetId(this.poamodelo.ID).subscribe((res) => {
      this.poamodelo = res.modelo;

      this.menu = [
        {
          nombre: "Programación Fisica",
          url: "/poa-fisico-ejecucion/" + this.poamodelo.ID,
          N: true,
          active: "active",
        },
        { nombre: "Exportar a Excell", BotonReporte: true },
      ];
    });
  }

  ngOnInit(): void {
    this.poamodelo.ID = +this.route.snapshot.params.id;

    this.api.GetId(this.poamodelo.ID).subscribe((res) => {
      this.poamodelo = res.modelo;
      this.GET();
    });
  }

  GET() {
    this.apiindicador
      .GetOperacionPoa(this.poamodelo.OPERACION_ID, this.poamodelo.ID)
      .subscribe((res) => {
        this.lista = res.modelo;

        this.apiIndicadorFisico
          .GetPoaOperacion(this.poamodelo.ID, this.poamodelo.OPERACION_ID)
          .subscribe((res) => {
            this.poadetallemodelo = res.modelo;
          });
      });
  }

  onRegresar() {
    this.router.navigate(["/poa-operacion", this.poamodelo.OPERACION_ID]);
  }

  onReporte() {}

  onInformacionGeneral(data) {
    console.log(data);
    const dialogRef = this.dialog.open(
      ModalInformacionIndicadorGeneralComponent,
      {
        width: "800px",
        data: {
          COMPONENTE: data.COMPONENTE,
          SUB_COMPONENTE: data.SUB_COMPONENTE,
          INDICADOR: data.EDT_NOMBRE,
          DESCRIPCION_CONCEPTUAL: data.DESCRIPCION_CONCEPTUAL,
          DESCRIPCION_TECNICA: data.DESCRIPCION_TECNICA,
          DESCRIPCION_FORMULA: data.DESCRIPCION_FORMULA,
          BASE_DATOS: data.BASE_DATOS,
          FRECUENCIA_MEDICION: data.FRECUENCIA_MEDICION,
          FECHA_REPORTE: data.FECHA_REPORTE,
          COMENTARIOS: data.COMENTARIOS,
          RESPONSABLE: data.RESPONSABLE,
          ID: data.ID,
          OPERACION_ID: data.OPERACION_ID,
          mostrarEdicion: true,
        },
      }
    );
  }

  onGuardar(indicadorseleccionado) {
    this.indicadormodelo = indicadorseleccionado;
    this.indicadordetallefisicomodelo = this.poadetallemodelo.filter(
      (c) => c.INDICADOR_ID == this.indicadormodelo.ID
    );

    for (
      let index = 0;
      index < this.indicadordetallefisicomodelo.length;
      index++
    ) {
      this.indicadordetallefisicomodelo[index].USR = localStorage.getItem("_u");
    }

    this.apiIndicadorFisico
      .editarEjecucion(this.indicadordetallefisicomodelo)
      .subscribe((res) => {
        this.GET();
      });
  }
}
