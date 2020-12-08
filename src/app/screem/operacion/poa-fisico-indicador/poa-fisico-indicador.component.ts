import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { indicador } from "src/app/model/indicador";
import { menu } from "src/app/model/menu";
import { poa } from "src/app/model/poa";
import { ApiIndicadorDetalleFisicoService } from "src/app/service/api-indicador-detalle-fisico.service";
import { ApiPoaService } from "src/app/service/api-poa.service";

@Component({
  selector: "app-poa-fisico-indicador",
  templateUrl: "./poa-fisico-indicador.component.html",
  styleUrls: ["./poa-fisico-indicador.component.css"],
})
export class PoaFisicoIndicadorComponent implements OnInit {
  menu: menu[];

  poamodelo: poa = new poa(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "", "", "", "");
  listaIndiador: indicador[];
  indicadorAsociado: boolean;

  constructor(
    private dialog: MatDialog,
    private api: ApiPoaService,
    private apiIndicadorFisico: ApiIndicadorDetalleFisicoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.poamodelo.ID = +this.route.snapshot.params.poa;

    this.api.GetId(this.poamodelo.ID).subscribe((res) => {
      this.poamodelo = res.modelo;

      this.menu = [
        {
          nombre: "Asociar Indicadores al POA",
          url: "/poa-fisico-indicador/" + this.poamodelo.ID,
          N: true,
          active: "active",
        },
      ];

      this.apiIndicadorFisico
        .GetValidacionIndicador(this.poamodelo.ID, this.poamodelo.OPERACION_ID)
        .subscribe((res) => {
          this.listaIndiador = res.modelo;

          if (this.listaIndiador != null) {
            this.indicadorAsociado = true;
          } else {
            this.indicadorAsociado = false;
          }
        });
    });
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.poamodelo.ID = +this.route.snapshot.params.poa;

    this.api.GetId(this.poamodelo.ID).subscribe((res) => {
      this.poamodelo = res.modelo;

      this.apiIndicadorFisico
        .GetValidacionIndicador(this.poamodelo.ID, this.poamodelo.OPERACION_ID)
        .subscribe((res) => {
          this.listaIndiador = res.modelo;

          if (this.listaIndiador != null) {
            this.indicadorAsociado = true;
          } else {
            this.indicadorAsociado = false;
          }
        });
    });
  }

  onRegresar() {
    this.router.navigate([
      "/poa-fisico-proyeccion",
      this.poamodelo.OPERACION_ID,
    ]);
  }

  onReporte() {}

  onGuardar() {
    for (let index = 0; index < this.listaIndiador.length; index++) {
      if (this.listaIndiador[index]._S) {
        let indicadorPoa: indicador = new indicador(
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

        indicadorPoa.POA_ID = this.poamodelo.ID;
        indicadorPoa.COMPONENTE_ID = this.listaIndiador[index].COMPONENTE_ID;
        indicadorPoa.OPERACION_ID = this.poamodelo.OPERACION_ID;
        indicadorPoa.ID = this.listaIndiador[index].ID;

        indicadorPoa.USR = localStorage.getItem("_u");

        this.apiIndicadorFisico.Post(indicadorPoa).subscribe((res) => {
          this.GET();
        });
      }
    }
  }

  onCancelar() {}
}
