import readline from 'readline';
import { Factura } from './Factura';
import { GeneradorFacturas } from './GeneradorFacturas';
import { FormatoHTML } from './FormatoHTML';
import { FormatoPDF } from './FormatoPDF';

// Crear instancias de las clases concretas de formatos
const formatoHTML: (factura: Factura) => string = (factura) => new FormatoHTML(factura.vendedor, factura.comprador, factura.concepto, factura.importe, factura.fecha, factura.impuesto, factura.total).generarFactura();
const formatoPDF: (factura: Factura) => string = (factura) => new FormatoPDF(factura.vendedor, factura.comprador, factura.concepto, factura.importe, factura.fecha, factura.impuesto, factura.total).generarFactura();

// Crear el generador de facturas
const generador = new GeneradorFacturas();

// Agregar formatos al generador
generador.agregarFormato('HTML', formatoHTML);
generador.agregarFormato('PDF', formatoPDF);

/**
 * Crear la interfaz readline
 * Se encarga de leer la opción del usuario desde la consola.
 * Si la opción no es válida, se vuelve a pedir la opción.
 * Si la opción es válida, se maneja la opción.
 * @param process.stdin entrada estándar
 * @param process.stdout salida estándar
 * @returns void retorna void
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * ºFunción que muestra el menú
 * Muestra el menú con las opciones disponibles.
 * @returns void retorna void
 */
function mostrarMenu(): void {
  console.log('\n===== MENÚ =====');
  console.log('1. Mostrar formatos disponibles');
  console.log('2. Agregar formato');
  console.log('3. Borrar formato');
  console.log('4. Generar factura');
  console.log('5. Salir');
}

/**
 * Función que lee la opción del usuario desde la consola
 * Para ello, se utiliza la interfaz readline.
 * Si la opción no es válida, se vuelve a pedir la opción.
 * Si la opción es válida, se maneja la opción.
 * @returns void retorna void
 */
function leerOpcion(): void {
  rl.question('Ingrese el número de la opción deseada: ', (opcion) => {
    const numOpcion = parseInt(opcion, 10);
    if (isNaN(numOpcion)) {
      console.log('Opción no válida. Por favor, ingrese una opción válida.');
      leerOpcion();
    } else {
      manejarOpcion(numOpcion);
    }
  });
}

/**
 * Función que muestra los formatos disponibles
 * Lo que hace es llamar a la función mostrarFormatosDisponibles del generador de facturas.
 * @returns void retorna void retorna void
 */
function mostrarFormatos(): void {
  const formatos = generador.mostrarFormatosDisponibles();
  console.log('\nFormatos disponibles:', formatos.join(', '));
  leerOpcion();
}


/**
 * Función que agrega un formato
 * Lo que hace es pedir el nombre del formato al usuario y llamar a la función 
 * agregarFormato del generador de facturas.
 * @returns void retorna void
 */
function agregarFormato(): void {
  rl.question('Ingrese el nombre del formato: ', (nombre) => {
    generador.agregarFormato(nombre, (factura) => `Formato personalizado para ${nombre}: ${factura.toString()}`);
    console.log(`Formato ${nombre} agregado.`);
    leerOpcion();
  });
}

/**
 * Borrar un formato de la factura
 * Lo que hace es pedir el nombre del formato al usuario y llamar a la función
 * borrarFormato del generador de facturas.
 * @returns void retorna void
 */
function borrarFormato(): void {
  rl.question('Ingrese el nombre del formato a borrar: ', (nombre) => {
    generador.borrarFormato(nombre);
    console.log(`Formato ${nombre} borrado.`);
    leerOpcion();
  });
}

/**
 * Generar una factura
 * Lo que hace es pedir el nombre del formato al usuario y llamar a la función
 * generarFactura del generador de facturas.
 * @returns void retorna void
 */
function generarFactura(): void {
  rl.question('Ingrese el nombre del formato para generar la factura: ', (nombreFormato) => {
    const facturaEjemplo: Factura = {
      vendedor: 'Vendedor',
      comprador: 'Comprador',
      concepto: 'Concepto',
      importe: 100,
      fecha: '2024-02-27',
      impuesto: 10,
      total: 110,
      toString: () => `Factura: Vendedor - Comprador - Concepto - 100 - 2024-02-27 - 10 - 110`,
      generarFactura: () => `Factura generada`,
    };
    const facturaGenerada = generador.generarFactura(nombreFormato, facturaEjemplo);
    console.log(`Factura generada:\n${facturaGenerada}`);
    leerOpcion();
  });
}

/**
 * Función que maneja la opción del usuario
 * Dependiendo de la opción, se llama a la función correspondiente.
 * Si la opción no es válida, se vuelve a pedir la opción.
 * @param opcion opción del usuario
 */
function manejarOpcion(opcion: number): void {
  switch (opcion) {
    case 1:
      mostrarFormatos();
      break;
    case 2:
      agregarFormato();
      break;
    case 3:
      borrarFormato();
      break;
    case 4:
      generarFactura();
      break;
    case 5:
      console.log('Saliendo del programa. ¡Hasta luego!');
      rl.close();
      break;
    default:
      console.log('Opción no válida. Por favor, ingrese una opción válida.');
      leerOpcion();
  }
}

// Menú principal
mostrarMenu();
leerOpcion();