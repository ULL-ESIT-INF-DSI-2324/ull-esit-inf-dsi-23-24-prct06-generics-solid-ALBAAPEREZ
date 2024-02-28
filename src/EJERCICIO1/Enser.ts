/**
 * Interfaz que representa un enser
 * Los enseres deben trasladarse de un lugar a otro. 
 * Debemos tener en cuenta el nombre, la descripción, la cantidad y el peso de cada enser.
 * @param nombre Nombre del enser
 * @param descripcion Descripción del enser
 * @param cantidad Cantidad de enseres
 * @param peso Peso del enser
 */
export interface Enser {
  nombre: string;
  descripcion: string;  
  cantidad: number;
  peso: number;
}