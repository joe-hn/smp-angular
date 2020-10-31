export class reporteObjetoGasto {
    constructor(
        public ID: number,
        public CODIGO: string,
        public NOMBRE: string,
        public EJECUCION: number,
        public ENERO_E: number,
        public FEBRERO_E: number,
        public MARZO_E: number,
        public ABRIL_E: number,
        public MAYO_E: number,
        public JUNIO_E: number,
        public JULIO_E: number,
        public AGOSTO_E: number,
        public SEPTIEMBRE_E: number,
        public OCTUBRE_E: number,
        public NOVIEMBRE_E: number,
        public DICIEMBRE_E: number,        

        public TRIMESTRE_I : number,
        public TRIMESTRE_II : number,
        public TRIMESTRE_III : number,
        public TRIMESTRE_IV : number,
    ) { }
}