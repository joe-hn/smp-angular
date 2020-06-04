import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { menu } from 'src/app/model/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  lista: menu[];

  @Output() regresar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  
  }

  emitir_regresar() {
    this.regresar.emit('');
  }

}
