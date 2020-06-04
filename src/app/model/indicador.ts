export class indicador{
    constructor(
        public ID: number,
        public COMPONENTE_ID: number,        
        public EDT: number,
        public EDT_DESCRIPCION: string,        
        public NOMBRE: string,
        public DESCRIPCION_CONCEPTUAL: string,
        public DESCRIPCION_TECNICA: string,
        public DESCRIPCION_FORMULA: string,
        public BASE_DATOS: string,
        public FRECUENCIA_MEDICION: string,
        public FECHA_REPORTE: string,
        public COMENTARIOS: string,
        public COMPONENTE: string,
        public EDT_COMPONENTE: string,
        public OPERACION: string,
        public OPERACION_ID: number,
        public EDT_NOMBRE: string,
        public PROGRAMA_ID: number,
        public USR: string,
        public TIPO_RESPONSABLE: string,
        public RESPONSABLE_ID: number,
        public RESPONSABLE: string
        
       
    ){}
}