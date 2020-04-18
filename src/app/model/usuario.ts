export class usuario {
    constructor(
        public ID: number,
        public ROL: string,
        public NOMBRE: string,
        public USUARIO: string,
        public ESTADO: string,
        public PASS: string,
        public USR: string,
        public ROL_ID: number,
        public EMAIL: string,
        public DIRECCION_ID: number,
        public JEFE_MARCA: boolean,
        public JEFE: number,
        public TIPO_DIRECCION_ID: number,
        public JEFE_DESCRIPCION: string,
        public EMPLEADO_ID: number,
        public DIRECCION: string,
        public TIPO_DIRECCION: string
    ) { }
}