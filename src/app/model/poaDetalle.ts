export class poaDetalle {
    constructor(
        public POA_ID: number,
        public ACTIVIDAD_ID: number,
        public PRODUCTO_ID: number,
        public INDICADOR_ID: number,
        public COMPONENTE_ID: number,
        public OPERACION_ID: number,
        public ANIO: number,
        public MES: number,
        public PROYECCION: number,
        public EJECUCION: number,
        public PROYECCION_REAL: number,
        public EJECUCION_REAL: number,
        public DIFERENCIA_PROYECCION: number,
        public DIFERENCIA_EJECUCION: number,
        public PORCENTAJE_EJECUCION: number,
        public ESTADO: number,
        public ACTIVIDAD: string,
        public PRODUCTO: string,
        public INDICADOR: string,
        public COMPONENTE: string,
        public OPERACION: string,
        public PROYECCION_CRUD: number,
        public EJECUCION_CRUD: number,
        public USR: string
    ) { }
}