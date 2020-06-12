import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-informacion-general',
  templateUrl: './modal-informacion-general.component.html',
  styleUrls: ['./modal-informacion-general.component.css']
})
export class ModalInformacionGeneralComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalInformacionGeneralComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
