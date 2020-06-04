import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  modelo: usuario = new usuario(0, '', '', '', '', '', '', 0, '', 0, false, 0, 0, '', 0, '', '');

  constructor() { }

  ngOnInit(): void {
    this.modelo = JSON.parse(localStorage.getItem('_usr'));
  }
 
}
