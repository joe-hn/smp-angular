export class indicadorDetalleFisico {
    constructor(
        public ID: number,
        public POA_ID: number,        
        public INDICADOR_ID: number,
        public COMPONENTE_ID: number,
        public OPERACION_ID: number,
        public ANIO: number,
        public MES: number,
        public PROYECCION: number,
        public EJECUCION: number,        
        public PORCENTAJE_EJECUCION: number,
        public ESTADO: number,        
        public USR: string
    ) { }
}