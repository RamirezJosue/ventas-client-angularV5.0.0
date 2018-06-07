import { Component, OnInit } from '@angular/core';
import { VentaService } from '../../services/venta/venta.service';
import { Venta } from '../../models/venta.model';

@Component({
    selector: 'app-ventas',
    templateUrl: './ventas.component.html',
    styles: []
})
export class VentasComponent implements OnInit {

    ventas: Venta[] = [];

    constructor(
        public _ventaService: VentaService
    ) { }

    ngOnInit() {
        this.cargarVentas();
    }

    cargarVentas() {
        this._ventaService.cargarVentas()
            .subscribe(ventas => this.ventas = ventas)
    }

    buscarVenta(termino: string) {
        if (termino.length <= 0) {
            this.cargarVentas();
            return;
        }
        this._ventaService.buscarVentas(termino)
            .subscribe(ventas => this.ventas = ventas);
    }

    borrarVenta(venta: Venta) {

    }
}


