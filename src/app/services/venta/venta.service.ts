import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Venta } from '../../models/venta.model';
import { map } from 'rxjs/operators';



@Injectable()
export class VentaService {

    totalVentas: Number = 0;

    constructor(
        public http: HttpClient,
    ) { }

    login(venta: Venta, recordar: Boolean = false) {
        let url = URL_SERVICIOS + '/login';
        return this.http.post(url, venta);
    }

    cargarVentas() {
        let url = URL_SERVICIOS + '/venta';

        return this.http.get(url)
            .map((resp: any) => {
                this.totalVentas = resp.total;
                return resp.ventas;
            });

    }

    buscarVentas(termino: string) {
        let url = URL_SERVICIOS + '/busqueda/coleccion/ventas/' + termino;
        return this.http.get(url)
            .map((resp: any) => resp.ventas);
    }

    borrarVenta(id: string) {
        let url = URL_SERVICIOS + '/venta' + id;
    }

}
