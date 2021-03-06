export class operacion {
    constructor(
        public ID: number,
        public FUENTE_ID: number,
        public CODIGO: string,
        public NOMBRE: string,
        public DESCRIPCION: string,
        public INICIO: string,
        public FINALIZACION: string,
        public MONTO: number,
        public FUENTE: string,
        public USR: string,             
        public OPERACION: string,
        public PROGRAMA_ID: number,
        public EDT_PROGRAMA: string,
        public PROGRAMA: string,
        public INICIO_DESCRIPCION: string,
        public FINALIZACION_DESCRIPCION: string,
        public IANIO: number,
        public IMES: number,
        public IDIA: number,
        public FANIO: number,
        public FMES: number,
        public FDIA: number,
        public COSTO_PLANIFICADO: number,
        public COSTO_REAL: number,
        public COSTO_RESTANTE: number,
        public ANIO_POA: number
    ){}
}