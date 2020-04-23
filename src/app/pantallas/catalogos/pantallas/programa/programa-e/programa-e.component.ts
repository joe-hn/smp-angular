import { Component, OnInit } from '@angular/core';
import { programa } from 'src/app/model/programa';
import { ApiProgramaService } from 'src/app/service/api-programa.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-programa-e',
  templateUrl: './programa-e.component.html',
  styleUrls: ['./programa-e.component.css']
})
export class ProgramaEComponent implements OnInit {
  modelo: programa = new programa(0, 0, '', '', '', '', 0, '');

  constructor(
    private api: ApiProgramaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.modelo.ID = +this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.GET();
  }

  GET() {
    this.api.GetId(this.modelo.ID).subscribe(res => {
      this.modelo = res.modelo;
    })
  }

  onGuardar() {
    if (this.modelo.EDT != 0 && this.modelo.NOMBRE) {
      this.modelo.USR = localStorage.getItem('_u');

      this.api.Patch(this.modelo.ID, this.modelo).subscribe(res => {
        this.router.navigate(['/programa-a']);
      })
    }
  }

  onCancelar() {
    this.GET();
  }

  onRegresar(){
    this.router.navigate(['/programa-a']);
  }

}
