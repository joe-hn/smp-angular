import { Component, OnInit } from "@angular/core";
import { menu } from "src/app/model/menu";

import { ActivatedRoute, Router } from "@angular/router";
import { ObjetoGasto } from "src/app/model/objetoGasto";
import { ApiObjetogastoService } from 'src/app/service/api-objetogasto.service';

@Component({
  selector: "app-nuevo-objeto-gasto",
  templateUrl: "./nuevo-objeto-gasto.component.html",
  styleUrls: ["./nuevo-objeto-gasto.component.css"],
})
export class NuevoObjetoGastoComponent implements OnInit {
  menu: menu[];

  modelo: ObjetoGasto = new ObjetoGasto(0, "", "", "");
  lista: ObjetoGasto[];

  constructor(
    private api: ApiObjetogastoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.menu = [
      {
        nombre: "Crear Nuevo Objeto Gasto",
        url: "/nuevo-objetogasto/",
        N: true,
        active: "active",
      },
    ];
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.api.Get().subscribe((res) => {
      this.lista = res.modelo;
    });
  }

  onRegresar() {
    this.router.navigate(["/lista-objetogasto"]);
  }

  onGuardar() {
    if (this.modelo.NOMBRE && this.modelo.CODIGO) {
      this.modelo.USR = localStorage.getItem("_u");

      this.api.Post(this.modelo).subscribe((res) => {
        this.onCancelar();
        this.GET();
      });
    }
  }

  onCancelar() {
    this.modelo.NOMBRE = "";
    this.modelo.CODIGO = "";
  }
}
