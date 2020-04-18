import { Component, OnInit } from '@angular/core';
import { operacion } from 'src/app/model/operacion';
import { ApiOperacionService } from 'src/app/service/api-operacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-operacion',
  templateUrl: './inicio-operacion.component.html',
  styleUrls: ['./inicio-operacion.component.css']
})
export class InicioOperacionComponent implements OnInit {
  modelo: operacion[];

  constructor(
    private api: ApiOperacionService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.api.Get().subscribe(res => {
      this.modelo = res.modelo;     
    })
  }

}
