import { Caja } from './Caja';
import { Mueble } from './Mueble';
import { Electrodomestico } from './Electrodomestico';
import { Ropa } from './Ropa';
import { Libro } from './Libros';
import { Enser } from './Enser';

// Crear una caja con capacidad máxima de 5 y peso máximo de 50 kg
const cajaMudanza = new Caja<Enser>(5, 50);

// Crear enseres para agregar a la caja
const sofa = new Mueble('Sofá', 2, 'Sofá de 3 plazas', 50);
const lavadora = new Electrodomestico('Lavadora', 30);
const camiseta = new Ropa('Camiseta', 5, 'Camiseta de algodón', 0.2);
const novela = new Libro('Novela', 3, 'Novela de ciencia ficción', 0.5);

// Agregar enseres a la caja
cajaMudanza.agregarEnser(sofa);
cajaMudanza.agregarEnser(lavadora);
cajaMudanza.agregarEnser(camiseta);
cajaMudanza.agregarEnser(novela);

// Intentar agregar más enseres de lo permitido
const mesa = new Mueble('Mesa', 1, 'Mesa de comedor', 20);
const pantalon = new Ropa('Pantalón', 3, 'Pantalón vaquero', 0.5);
const secadora = new Electrodomestico('Secadora', 18);

cajaMudanza.agregarEnser(mesa);
cajaMudanza.agregarEnser(secadora);
cajaMudanza.agregarEnser(pantalon);

// Mostrar el contenido de la caja
cajaMudanza.listarEnseres();

// Buscar un enser por nombre
const buscarEnser = 'Lavadora';
const enserEncontrado = cajaMudanza.buscarEnserPorNombre(buscarEnser);
// si el enser es encontrado, mostrarlo por consola
if (enserEncontrado) {
  console.log(`Enser encontrado: ${enserEncontrado.nombre}`);
} else {
  console.log(`Enser no encontrado: ${buscarEnser}`);
}

// Eliminar un enser por nombre
const enserAEliminar = 'Camiseta';
cajaMudanza.eliminarEnserPorNombre(enserAEliminar);

// Mostrar el contenido actualizado de la caja
cajaMudanza.listarEnseres();
