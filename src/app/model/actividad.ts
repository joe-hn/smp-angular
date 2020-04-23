export class actividad {
    constructor(
        public ID: number,
        public PROGRAMA_ID: number,
        public PROYECTO_ID: number,
        public COMPONENTE_ID: number,
        public INDICADOR_ID: number,
        public EDT: number,
        public EDT_DESCRIPCION: string,
        public NOMBRE: string,
        public DESCRIPCION: string,
        public COMPONENTE: string,
        public EDT_ACTIVIDAD: string,
        public PROGRAMA: string,
        public PROYECTO: string,
        public EDT_MAX: number,
        public USR: string,
        public INDICADOR: string
    ) { }
}