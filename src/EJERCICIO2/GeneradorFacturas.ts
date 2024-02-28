import { Factura } from './Factura';

/**
 * Clase GeneradorFacturas
 * Se encarga de representar un generador de facturas que tiene un formato y una factura.
 */
export class GeneradorFacturas {
  // Mapa de formatos
  private formatos: Map<string, (factura: Factura) => string> = new Map();

  /**
   * Función que agrega un formato a la factura
   * @param nombre Nombre del formato, puede ser HTML, PDF, etc.
   * @param generarFormato Función generadora del formato.
   */
  agregarFormato(nombre: string, generarFormato: (factura: Factura) => string): void {
    this.formatos.set(nombre, generarFormato);
  }

  /**
   * Función que borra un formato de la factura
   * @param nombre Nombre del formato a borrar.
   */
  borrarFormato(nombre: string): void {
    this.formatos.delete(nombre);
  }

  /**
   * Función que muestra todos los formatos disponibles.
   * @returns Array con los nombres de los formatos disponibles.
   */
  mostrarFormatosDisponibles(): string[] {
    return Array.from(this.formatos.keys());
  }

  /**
   * Genera la factura, dependiendo del formato que se le pase
   * @param nombreFormato Nombre del formato de la factura, puede ser HTML, PDF, etc.
   * @param factura Factura a generar.
   * @returns Factura generada en el formato especificado.
   */
  generarFactura(nombreFormato: string, factura: Factura): string {
    const formato = this.formatos.get(nombreFormato);
    if (formato) {
      return formato(factura);
    } else {
      return 'No existe el formato';
    }
  }
}
