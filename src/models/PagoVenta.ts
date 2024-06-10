export class pagoVenta {
    efectivo?: number;
    digital?: number;
    entrega?: number;
    restante?: number;
    realizado?: boolean;
    tipoPago?: string;

    constructor(data?: any) {
        if (data) {
          this.efectivo = data.efectivo;
          this.digital = data.digital;
          this.entrega = data.entrega;
          this.restante = data.restante;
          this.tipoPago = data.tipoPago;
          this.realizado = (data.realizado==1) ? true : false;
        }
    }
}