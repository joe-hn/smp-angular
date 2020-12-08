export class reporteDireccionActividades {
    constructor(       
        public DIRECCION: string,
        public ORIGEN: string,
        public EDT_DESCRIPCION: string,
        public NOMBRE: string,
        public DESCRIPCION: string,
        public FECHA_INICIO_ESTIMADA_DESCRIPCION: string,
        public FECHA_FINAL_ESTIMADA_DESCRIPCION: string,
        public PROYECCION_REAL: number,
        public EJECUCION_REAL: number,
        public ESTADO: string,
        public CODIGO: string
    ) { }
}