import { Factura } from './Factura';

/**
 * Clase FormatoPDF
 * Se encarga de representar una factura que tiene un vendedor, un comprador, un concepto, 
 * un importe, una fecha, un impuesto y un total.
 */
export class FormatoPDF implements Factura {
  vendedor: string;
  comprador: string;
  concepto: string;
  importe: number;
  fecha: string;
  impuesto: number;
  total: number;

  /**
   * Constructor de la clase FormatoPDF
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
   * Getters de la clase FormatoPDF
   * @returns devuelve el vendedor.
   */
  getVendedor(): string {
    return this.vendedor;
  }

  /**
   * Getters de la clase FormatoPDF
   * @returns devuelve el comprador.
   */
  getComprador(): string {
    return this.comprador;
  }

  /**
   * Getters de la clase FormatoPDF
   * @returns devuelve el concepto.
   */
  getConcepto(): string {
    return this.concepto;
  }

  /**
   * Getters de la clase FormatoPDF
   * @returns retorna el importe.
   */
  getImporte(): number {
    return this.importe;
  }

  /**
   * Getters de la clase FormatoPDF
   * @returns devuelve la fecha.
   */
  getFecha(): string {
    return this.fecha;
  }

  /**
   * Getters de la clase FormatoPDF
   * @returns devuelve el impuesto.
   */
  getImpuesto(): number {
    return this.impuesto;
  }

  /**
   * Getters de la clase FormatoPDF
   * @returns retorna el total.
   */
  getTotal(): number {
    return this.total;
  }

  /**
   * Genera la factura en PDF
   * @returns devuelve la factura en formato PDF.
   */
  generarFactura(): string {
    return `Factura en PDF: ${this.toString()}`;
  }

  toString(): string {
    return `Vendedor: ${this.vendedor}, Comprador: ${this.comprador}, Concepto: ${this.concepto}, Importe: ${this.importe}, Fecha: ${this.fecha}, Impuesto: ${this.impuesto}, Total: ${this.total}`;
  }
}
