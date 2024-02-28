/**
 * Interfaz Factura
 * Se encarga de representar una factura que tiene un vendedor, un comprador, un concepto, 
 * un importe, una fecha, un impuesto y un total.
 * @param vendedor Vendedor de la factura
 * @param comprador Comprador de la factura
 * @param concepto Concepto de la factura
 * @param importe Importe de la factura
 * @param fecha Fecha de la factura
 * @param impuesto Impuesto de la factura
 * @param total Total de la factura
 * @param toString Función que devuelve la representación en string de la factura
 * @param generarFactura Función que genera la factura
 */
export interface Factura {
  vendedor: string;
  comprador: string;
  concepto: string;
  importe: number;
  fecha: string;
  impuesto: number;
  total: number;
  toString(): string;
  generarFactura(): string;
}