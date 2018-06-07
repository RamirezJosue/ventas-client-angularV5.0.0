import { Component, OnInit } from '@angular/core';
import { DetalleVentaService } from '../../services/detalleVenta/detalleVenta.service';
import { DetalleVenta } from '../../models/detalleVenta.model';

@Component({
    selector: 'app-detalleVentas',
    templateUrl: './detalleVentas.component.html',
    styles: []
})
export class DetalleVentasComponent implements OnInit {

    detalleVentas: DetalleVenta[] = [];

    constructor(
        public _detalleVentaService: DetalleVentaService
    ) { }

    ngOnInit() {
        this.cargarDetalleVentas();
    }

    cargarDetalleVentas() {
        this._detalleVentaService.cargarDetalleVentas()
            .subscribe(detalleVentas => this.detalleVentas = detalleVentas)
    }

    buscarDetalleVenta(termino: string) {
        if (termino.length <= 0) {
            this.cargarDetalleVentas();
            return;
        }
        this._detalleVentaService.buscarDetalleVentas(termino)
            .subscribe(detalleVentas => this.detalleVentas = detalleVentas);
    }

    borrarDetalleVenta(detalleVenta: DetalleVenta) {

    }
}


