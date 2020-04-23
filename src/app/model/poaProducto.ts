export class poaProducto {
    constructor(
        public ID: number,
        public OPERACION_ID: number,
        public COMPONENTE_ID: number,
        public INDICADOR_ID: number,
        public EDT: number,
        public EDT_DESCRIPCION: string,        
        public NOMBRE: string,
        public VALOR: number,
        public TIPO: string,        
        public EDT_NOMBRE: string,
        public OPERACION: string,
        public INDICADOR: string,
        public COMPONENTE: string,
        public EDT_MAX: number,
        public EDT_INDICADOR: string,
        public PROGRAMA_ID: number,
        public USR: string,
        public TIPO_RESPONSABLE: string,
        public RESPONSABLE_ID: number,
        public RESPONSABLE: string

    ) { }
}