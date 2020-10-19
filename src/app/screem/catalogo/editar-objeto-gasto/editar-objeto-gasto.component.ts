import { Component, OnInit } from "@angular/core";
import { menu } from "src/app/model/menu";
import { ActivatedRoute, Router } from "@angular/router";
import { ObjetoGasto } from "src/app/model/objetoGasto";
import { ApiObjetogastoService } from 'src/app/service/api-objetogasto.service';

@Component({
  selector: "app-editar-objeto-gasto",
  templateUrl: "./editar-objeto-gasto.component.html",
  styleUrls: ["./editar-objeto-gasto.component.css"],
})
export class EditarObjetoGastoComponent implements OnInit {
  menu: menu[];

  modelo: ObjetoGasto = new ObjetoGasto(0, "", "", "");

  constructor(
    private api: ApiObjetogastoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelo.ID = +this.route.snapshot.params.id;

    this.menu = [
      {
        nombre: "Editar Objeto Gasto",
        url: "/editar-objetogasto/" + this.modelo.ID,
        N: true,
        active: "active",
      },
    ];
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.api.GetId(this.modelo.ID).subscribe((res) => {
      this.modelo = res.modelo;
    });
  }

  onRegresar() {
    this.router.navigate(["/lista-objetogasto"]);
  }

  onGuardar() {
    if (this.modelo.NOMBRE) {
      this.modelo.USR = localStorage.getItem("_u");

      this.api.Patch(this.modelo.ID, this.modelo).subscribe((res) => {
        console.log('ENTRO --------------------');
        this.onRegresar();
      });
    }
  }

  onCancelar() {
    this.GET();
  }
}
