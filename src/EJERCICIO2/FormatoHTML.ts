import { Factura} from './Factura';

export class FormatoHTML implements Factura {
  vendedor: string;
  comprador: string;
  concepto: string;
  importe: number;
  fecha: string;
  impuesto: number;
  total: number;

  /**
   * Constructor de la clase FormatoHTML
   * @param vendedor  Vendedor de la factura
   * @param comprador Comprador de la factura
   * @param concepto  Concepto de la factura
   * @param importe  Importe de la factura
   * @param fecha Fecha de la factura
   * @param impuesto  Impuesto de la factura
   * @param total Total de la factura --> importe + impuesto
   */
  constructor(vendedor: string, comprador: string, concepto: string, importe: number, fecha: string, impuesto: number, total: number) {
    this.vendedor = vendedor;
    this.comprador = comprador;
    this.concepto = concepto;
    this.importe = importe;
    this.fecha = fecha;
    this.impuesto = impuesto;
    this.total = total;
  }
  /**
   * Getters de la clase FormatoHTML
   * @returns devuelve el vendedor.
   */
  getVendedor(): string {
    return this.vendedor;
  }

  /**
   * Getters de la clase FormatoHTML
   * @returns devuelve el comprador.
   */
  getComprador(): string {
    return this.comprador;
  }

  /**
   * Getters de la clase FormatoHTML
   * @returns devuelve el concepto.
   */
  getConcepto(): string {
    return this.concepto;
  }

  /**
   * Getters de la clase FormatoHTML
   * @returns devuelve el importe.
   */
  getImporte(): number {
    return this.importe;
  }

  /**
   * Getters de la clase FormatoHTML
   * @returns devuelve la fecha.
   */
  getFecha(): string {
    return this.fecha;
  }

  /**
   * Getters de la clase FormatoHTML
   * @returns retorna el impuesto.
   */
  getImpuesto(): number {
    return this.impuesto;
  }

  /**
   * Getters de la clase FormatoHTML
   * @returns retorna el total.
   */
  getTotal(): number {
    return this.total;
  }

  /**
   * Función que genera la factura
   * Devuelve un string con el formato de la factura en HTML
   * @returns formato de la factura en HTML
   */
  public generarFactura(): string {
    return `<html>
    <head>
      <title>Factura</title>
    </head>
    <body>
      <h1>Factura</h1>
      <p>Vendedor: ${this.vendedor}</p>
      <p>Comprador: ${this.comprador}</p>
      <p>Concepto: ${this.concepto}</p>
      <p>Importe: ${this.importe}</p>
      <p>Fecha: ${this.fecha}</p>
      <p>Impuesto: ${this.impuesto}</p>
      <p>Total: ${this.total}</p>
    </body>
    </html>`;
  }

  /**
   * Función que devuelve la representación en string de la factura
   * Devuelve un string con el vendedor, el comprador, el concepto, el importe, la fecha, el impuesto y el total de la factura.
   * @returns representación en string de la factura
   */
  public toString(): string {
    return `${this.vendedor} - ${this.comprador} - ${this.concepto} - ${this.importe} - ${this.fecha} - ${this.impuesto} - ${this.total}`;
  }
}
