export class DetalleVenta {
    constructor(
        public cantidad: number,
        public precioVenta: number,
        public descuento: number,
        public venta: string,
        public articulo?: string,
        public _id?: string
    ) { }
}