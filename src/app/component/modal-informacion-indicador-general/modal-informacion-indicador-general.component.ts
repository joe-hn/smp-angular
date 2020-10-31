import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-informacion-indicador-general',
  templateUrl: './modal-informacion-indicador-general.component.html',
  styleUrls: ['./modal-informacion-indicador-general.component.css']
})
export class ModalInformacionIndicadorGeneralComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalInformacionIndicadorGeneralComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
