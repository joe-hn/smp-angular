export class poa {
    constructor(
        public ID: number,
        public OPERACION_ID: number,
        public ANIO: number,
        public PROYECTADO: number,
        public EJECUTADO: number,
        public PROYECTADO_REAL: number,
        public EJECUTADO_REAL: number,
        public DIFERENCIA_PROYECCION: number,
        public DIFERENCIA_EJECUCION: number,
        public PORCENTAJE_EJECUCION: number,
        public ESTADO: string,
        public ANIO_DESCRIPCION: string,
        public OPERACION: string,
        public USR: string
    ) { }
}