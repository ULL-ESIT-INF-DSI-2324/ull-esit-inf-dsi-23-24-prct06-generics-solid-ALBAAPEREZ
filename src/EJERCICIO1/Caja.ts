import { Enser } from '../EJERCICIO1/Enser';

/**
 * Clase que representa una caja
 * Las cajas se utilizan para trasladar enseres de un lugar a otro.
 * Cada caja tiene una capacidad máxima y un peso máximo.
 * @param T tipo de enser que se trasladará en la caja
 * @param enseres array de enseres que contiene la caja
 * @param capacidadMaxima capacidad máxima de la caja
 * @param pesoMaximo peso máximo de la caja
 * @param pesoActual peso actual de la caja
 */
export class Caja<T extends Enser> {
  private enseres: T[] = [];
  private capacidadMaxima: number;
  private pesoMaximo: number;
  private pesoActual: number = 0;

  /**
   * Constructor de la clase Caja
   * Para el traslado de enseres, se necesita una caja con una capacidad máxima y un peso máximo.
   * @param capacidadMaxima 
   * @param pesoMaximo 
   */
  constructor(capacidadMaxima: number, pesoMaximo: number) {
    this.capacidadMaxima = capacidadMaxima;
    this.pesoMaximo = pesoMaximo;
  }

  /**
   * Función que agrega un enser a la caja
   * Se encarga de verificar si la caja tiene espacio y si el peso del enser no excede el peso máximo.
   * Si se cumple, agrega el enser a la caja y actualiza el peso actual.
   * @param enser enser a agregar
   */
  agregarEnser(enser: T): void {
    if (this.pesoActual + enser.peso <= this.pesoMaximo && this.enseres.length < this.capacidadMaxima) {
      this.enseres.push(enser);
      this.pesoActual += enser.peso;
    } else {
      console.log('No se puede agregar el enser. La caja está llena o excede el peso máximo.');
    }
  }

  /**
   * Función que elimina un enser de la caja por nombre
   * Se encarga de buscar el enser por nombre y eliminarlo de la caja.
   * Si lo encuentra, lo elimina y actualiza el peso actual.
   * @param nombre nombre del enser a eliminar
   */
  eliminarEnserPorNombre(nombre: string): void {
    const enserIndex = this.enseres.findIndex(enser => enser.nombre === nombre);
    if (enserIndex !== -1) {
      const enserEliminado = this.enseres.splice(enserIndex, 1)[0];
      this.pesoActual -= enserEliminado.peso;
    } else {
      console.log('Enser no encontrado en la caja.');
    }
  }

  /**
   * Función que lista los enseres de la caja
   * Muestra por consola el contenido de la caja.
   * Recorre el array de enseres y muestra el nombre de cada enser.
   */
  listarEnseres(): void {
    console.log('Contenido de la caja:');
    this.enseres.forEach(enser => console.log(enser.nombre));
  }

  /**
   * Función que busca un enser por nombre
   * Para ello, recorre el array de enseres y compara el nombre con el parámetro.
   * @param nombre nombre del enser a buscar
   * @returns retorna el enser si lo encuentra, de lo contrario retorna undefined
   */
  buscarEnserPorNombre(nombre: string): T | undefined {
    return this.enseres.find(enser => enser.nombre === nombre);
  }
}