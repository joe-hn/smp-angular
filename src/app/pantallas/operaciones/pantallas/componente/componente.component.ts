import { Component, OnInit } from '@angular/core';
import { componente } from 'src/app/model/componente';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent implements OnInit {
  modelo: componente = new componente(0, 0, 0, '', '', 0, 0, '', '', 0, 0, 0, '', '', '', 0, '', '', 0, 0);

  constructor(
    private route: ActivatedRoute,
    private routes: Router
  ) {
    this.modelo.OPERACION_ID = +this.route.snapshot.params.id;
  }

  ngOnInit(): void {
  }

  onRegresar() {

  }

}
