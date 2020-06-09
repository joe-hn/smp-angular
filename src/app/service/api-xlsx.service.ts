import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import * as moment from 'moment';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UFT-8';
const EXCEL_EXT = '.xlsx';

@Injectable({
  providedIn: 'root'
})

export class ApiXlsxService {
  headerStyle: {
    fill: { fgColor: { rgb: "D3D3D3" } },
    font: { name: 'Arial', sz: 10, bold: true },
    alignment: { wrapText: true, vertical: 'bottom', horizontal: 'center' }
  }

  constructor() { }

  exportToExcel(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = {
      Sheets: { 'data': worksheet },
      SheetNames: ['data']
    };

    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    this.saveAsExcel(excelBuffer, excelFileName);
  }

  private saveAsExcel(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + ' (Generado ' + moment(new Date()).locale('es').format('LLLL') + ')' + EXCEL_EXT);
  }

}
