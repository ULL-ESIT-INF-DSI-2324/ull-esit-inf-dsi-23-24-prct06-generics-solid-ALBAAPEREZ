import { Printer } from './Printer';
import { Scanner } from './Scanner';
import { PrinterScanner } from './PrinterScanner';

// Instancias de un Printer
const printer = new Printer();
// Impresión
printer.print();

// Instancias de un Scanner
const scanner = new Scanner();
// Scanning
scanner.scan();

// Instancias de un PrinterScanner
const printerScanner = new PrinterScanner();
// Printing
printerScanner.print();
// Scanning
printerScanner.scan();