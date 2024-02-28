import { Arithmeticable } from './Aritmeticable';

/**
 * clase que representa una colección de elementos que implementan la interfaz Arithmeticable.
 * @param T Tipo de dato sobre el que se realizarán las operaciones aritméticas.
 * Contiene los métodos addArithmeticable, getArithmeticable y getNumberOfArithmeticables.
 * Contiene un array de elementos de tipo T. 
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  /**
   * Array de elementos de tipo T.
   */
  private elements: T[] = [];

  /**
   * Funcion que añade un elemento a la colección.
   * Para ello, recibe un elemento de tipo T y lo añade al array de elementos.
   * @param element elemento de tipo T que se añadirá a la colección.
   */
  addArithmeticable(element: T): void {
    this.elements.push(element);
  }

  /**
   * Método que devuelve un elemento de la colección.
   * Para ello, recibe un índice y devuelve el elemento que se encuentra en esa posición del array.
   * @param index indice del elemento que se quiere obtener.
   * @returns retorna el elemento que se encuentra en la posición index del array.
   */
  getArithmeticable(index: number): T {
    if (index >= 0 && index < this.elements.length) {
      return this.elements[index];
    } else {
      throw new Error('Index out of bounds');
    }
  }

  /**
   * Método que devuelve el número de elementos de la colección.
   * Para ello, devuelve la longitud del array de elementos.    
   * @returns retorna el número de elementos de la colección.
   */
  getNumberOfArithmeticables(): number {
    return this.elements.length;
  }

  /**
   * Otro método añadido
   * Método que devuelve el resultado de la suma de todos los elementos de la colección.
   * Para ello, recorre el array de elementos y va sumando los elementos.
   * @returns retorna el resultado de la suma de todos los elementos de la colección.
   */
  sum(): T {
    let result = this.elements[0];
    for (let i = 1; i < this.elements.length; i++) {
      result = result.add(this.elements[i]);
    }
    return result;
  }

  /**
   * Otro método añadido
   * Método que devuelve el resultado de la resta de todos los elementos de la colección.
   * Para ello, recorre el array de elementos y va restando los elementos.
   * @returns retorna el resultado de la resta de todos los elementos de la colección.
   */
  subtract(): T {
    let result = this.elements[0];
    for (let i = 1; i < this.elements.length; i++) {
      result = result.subtract(this.elements[i]);
    }
    return result;
  }
}
