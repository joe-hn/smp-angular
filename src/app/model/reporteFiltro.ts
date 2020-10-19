export class reporteFiltro{
    constructor(
        public OPERACION_ID: number,
        public DIRECCION_ID: number,
        public MES_I: number,
        public MES_F: number,
        public ANIO: number,
        public FECHA_F: string,
        public OBJETO_GASTO_ID: number        
    ){}
}