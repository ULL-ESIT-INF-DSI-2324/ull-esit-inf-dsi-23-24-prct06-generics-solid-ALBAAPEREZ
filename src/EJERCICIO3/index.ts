// index.ts
import { FileManager } from './FileManager';
import { FileReader } from './FileReader';
import { FileSystemHandler } from './FileSystemHandler';

const filePath = 'example.txt';

// Crear FileManager para leer el archivo
const fileReader = new FileReader(filePath);
const fileManagerReader = new FileManager(fileReader, filePath);

// Leer contenido
const currentContent = fileManagerReader.readFile();
console.log('Current content:', currentContent);

// Crear FileManager para escribir en el archivo
const fileWriter = new FileSystemHandler();
const fileManagerWriter = new FileManager(fileWriter, filePath);

// Escribir contenido usando FileSystemHandler
const newData = 'This is new content to be written into the file.';
fileManagerWriter.writeFile(newData);

// Crear FileManager para leer el archivo actualizado
const fileManagerUpdatedReader = new FileManager(fileReader, filePath);

// Actualizar contenido
const updatedContent = fileManagerUpdatedReader.readFile();
console.log('Updated content:', updatedContent);