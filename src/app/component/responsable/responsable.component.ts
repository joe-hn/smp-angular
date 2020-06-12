import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { direccion } from 'src/app/model/direccion';
import { empleado } from 'src/app/model/empleado';
import { ApiDireccionService } from 'src/app/service/api-direccion.service';
import { ApiEmpleadoService } from 'src/app/service/api-empleado.service';
import { cargo } from 'src/app/model/cargo';
import { ApiCargoService } from 'src/app/service/api-cargo.service';

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css']
})
export class ResponsableComponent implements OnInit {
  modelodireccion: direccion[];
  modeloempleado: empleado[];
  modelocargo: cargo[];

  direccionResponsable: number = 0;
  empleadoResponsable: number = 0;
  cargoResponsable: number = 0;

  responsable: boolean = false;
  sinResponsable: boolean = false;

  texto: string;

  @Output() onResponsable = new EventEmitter<{ idResponsable: number, tipoResponsable: string, seleccionado: boolean, SinResponable: boolean }>();
  @Input() isEdicion: boolean = false;
  @Input() isObligatorio?: boolean = false;

  constructor(
    private apidireccion: ApiDireccionService,
    private apiempleado: ApiEmpleadoService,
    private apicargo: ApiCargoService
  ) {
    if (this.isEdicion) {
      this.texto = 'Modificar Responsabe';
    } else {
      this.texto = 'Asignar Responsable';
    }
   
  }

  ngOnInit(): void {
    this.apidireccion.Get().subscribe(res => {
      this.modelodireccion = res.modelo;

      this.apicargo.Get().subscribe(res => {
        this.modelocargo = res.modelo;
      })
    })

    if (this.isObligatorio) {
      this.responsable = true;
    } 
  }

  onSelectDireccion() {
    this.onResponsable.emit({ idResponsable: 0, tipoResponsable: '', seleccionado: this.responsable, SinResponable: false });

    this.GET_EMPLEADO();
  }

  onSelectCargo() {

    this.GET_EMPLEADO();
  }

  onSelectEmpleado() {
    this.onResponsable.emit({ idResponsable: this.empleadoResponsable, tipoResponsable: 'OFICIAL', seleccionado: this.responsable, SinResponable: false });
  }

  GET_EMPLEADO() {
    if (this.direccionResponsable != 0 && this.cargoResponsable != 0) {
      this.apiempleado.DireccionCargo(this.direccionResponsable, this.cargoResponsable).subscribe(res => {
        this.modeloempleado = res.modelo;
      })
    }
  }

  onChkResponsable() {
    this.onResponsable.emit({ idResponsable: 0, tipoResponsable: '', seleccionado: this.responsable, SinResponable: false });
  }

  onchkSinResponsable(event) {
    this.sinResponsable = event.checked;
    this.onResponsable.emit({ idResponsable: 0, tipoResponsable: '', seleccionado: this.responsable, SinResponable: true });
    console.log('--- SIN RESPONSABLE', this.sinResponsable);
  }

}
