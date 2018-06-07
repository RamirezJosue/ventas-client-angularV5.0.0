import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { DetalleVenta } from '../../models/detalleVenta.model';
import { map } from 'rxjs/operators';



@Injectable()
export class DetalleVentaService {

    totalDetalleVentas: Number = 0;

    constructor(
        public http: HttpClient,
    ) { }

    login(detalleVenta: DetalleVenta, recordar: Boolean = false) {
        let url = URL_SERVICIOS + '/login';
        return this.http.post(url, detalleVenta);
    }

    cargarDetalleVentas() {
        let url = URL_SERVICIOS + '/detalleVenta';

        return this.http.get(url)
            .map((resp: any) => {
                this.totalDetalleVentas = resp.total;
                return resp.detalleVentas;
            });

    }

    buscarDetalleVentas(termino: string) {
        let url = URL_SERVICIOS + '/busqueda/coleccion/detalleVentas/' + termino;
        return this.http.get(url)
            .map((resp: any) => resp.detalleVentas);
    }

    borrarDetalleVenta(id: string) {
        let url = URL_SERVICIOS + '/detalleVenta' + id;
    }

}
