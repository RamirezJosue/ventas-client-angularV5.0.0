export class Venta {
    constructor(
        public tipoComprobante: number,
        public serieComprobante: string,
        public numComprobante: string,
        public fechaHora: string,
        public impuesto?: string,
        public totalVenta?: boolean,
        public estado?: string,
        public usuario?: string,
        public cliente?: string,
        public _id?: string
    ) { }
}