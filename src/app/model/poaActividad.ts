export class poaActividad {
    constructor(
        public ID: number,
        public POA_ID: number,
        public PRODUCTO_ID: number,
        public INDICADOR_ID: number,
        public COMPONENTE_ID: number,
        public OPERACION_ID: number,
        public EDT: number,
        public EDT_DESCRIPCION: string,
        public NOMBRE: string,
        public DESCRIPCION: string,
        public TIPO_RESPONSABLE: string,
        public RESPONSABLE_ID: number,
        public FECHA_INICIO_ESTIMADA: string,
        public FECHA_INICIO: string,
        public DIAS: number,
        public FECHA_FINAL_ESTIMADA: string,
        public FECHA_FINAL: string,
        public FECHA_INICIO_ESTIMADA_DESCRIPCION: string,
        public FECHA_INICIO_DESCRIPCION: string,
        public FECHA_FINAL_ESTIMADA_DESCRIPCION: string,
        public FECHA_FINAL_DESCRIPCION: string,
        public REPLANIFICACION: string,
        public PROYECCION: number,
        public EJECUCION: number,
        public PROYECCION_REAL: number,
        public EJECUCION_REAL: number,
        public DIFERENCIA_PROYECCION: number,
        public DIFERENCIA_EJECUCION: number,
        public PORCENTAJE_EJECUCION: number,
        public OBJETO_GASTO_ID: number,
        public ESTADO: string,
        public OPERACION: string,
        public RESPONSABLE: string,
        public ANIO: number,
        public MES: number,
        public DIA: number,       
        public FEANIO: number,
        public FEMES: number,
        public FEDIA: number,
        public ALERTA_ESTIMADO: string,
        public ALERTA: string,
        public DIAS_FALTANTES: number,
        public USR: string,
        public EDT_NOMBRE: string,
        public DIFERENCIA_DISTRIBUCION: number,
        public SUMA_PROYECCION: number,
        public SUB_COMPONENTE: string,
        public EDT_M: number,
        public OBJETO_GASTO: string

    ) { }
}