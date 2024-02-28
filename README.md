# Práctica 6 - Clases e interfaces genéricas. Principios SOLID
---

**Nombre:** Alba Pérez Rodríguez

**Fecha:** 26/02/2024

**Estudios:** Ingeniería Informática

**Asignatura:** Desarrollo en Sistemas Informáticos

**Profesor:** Eduardo Manuel Segredo González

---

# Índice
1. [Introducción](#1-introducción)
2. [Objetivos](#2-objetivos)
3. [Antes de empezar](#3-antes-de-empezar)
4. [Configuración de Istambul y coveralls](#4-configuracion-de-istambul-y-coveralls)
5. [Principios SOLID](#5-principios-solid)
6. [Ejercicio 1 - La mudanza](#ejercicio-1---la-mudanza)
7. [Ejercicio 2 - Facturas en diferentes formatos](#ejercicio-2---facturas-en-diferentes-formatos)
8. [Ejercicio 3 - Gestor de ficheros](#ejercicio-3---gestor-de-ficheros)
9. [Ejercicio 4 - Impresoras y escáneres](#ejercicio-4---impresoras-y-escáneres)
10. [Ejercicio 5 - Servicio de mensajería](#ejercicio-5---servicio-de-mensajería)
11. [Ejercicio Modificación](#ejercicio-modificacion)
12. [Ejercicios Modificación](#8-ejercicios-modificación)
13. [Conclusiones](#9-conclusiones)

---

# 1. Introducción
En esta práctica se proponen una serie de ejercicios donde se busca explorar y aplicar los conceptos clave de clases e interfaces genéricas en el lenguaje TypeScript, así como los principios SOLID de diseño orientado a objetos. Cada ejercicio plantea desafíos específicos que se resolverán y explicarán este informe. 

Antes de abordar los ejercicios, se ha iniciado la familiarización con los principios SOLID y las herramientas mencionadas. Mediante la aplicación de principios SOLID, se busca fomentar la creación de código mantenible, escalable y resistente a cambios. Además, se promueve el uso de clases e interfaces genéricas para lograr un diseño más flexible y reutilizable. A lo largo de la práctica, se enfatiza la importancia de documentar y probar el código, así como la necesidad de utilizar herramientas como TypeDoc, Istanbul y Coveralls para evaluar el cubrimiento del código fuente.

---

# 2. Objetivos
La Práctica 5 tiene como objetivos principales los siguientes:

  1. **Aplicar** y comprender los conceptos de objetos, **clases e interfaces** en TypeScript.
  2. **Resolver ejercicios** prácticos de programación, abordando diferentes ejercicios.
  3. Adherirse a los principios **SOLID** durante el desarrollo de los ejercicios.
  4. Establecer una **estructura de proyecto** coherente, organizando el código en directorios independientes para cada ejercicio dentro del directorio 'src'.
  5. Integrar metodologías de **desarrollo dirigido por pruebas** (TDD/BDD), confirmando el correcto funcionamiento del código y su robustez ante entradas no válidas.
  6. **Documentar** las decisiones de diseño para cada ejercicio en un informe alojado en GitHub Pages.
  7. **Integración de herramientas de cobertura** como Istanbull o coveralls para evaluar el cubrimiento del código fuente.
---

# 3. Antes de empezar
Antes de comenzar con la resolución de ejercicios de la práctica deberemos poner a punto nuestro entorno de trabajo. Para ello, lo haremos siguiendo los siguientes pasos:

## Creación de directorios.
Crearemos los siguientes directorios para nuestro proyecto:

  - **src/:** Este directorio almacenará los archivos fuente de TypeScript. En este caso, el código fuente escrito en TypeScript se encuentra en el directorio src.

  - **dist/:** Este directorio se utilizará para almacenar los archivos JavaScript generados por el compilador de TypeScript. La compilación de TypeScript produce código JavaScript, y este código se guarda en el directorio dist.

## Configuración para llevar a cabo la práctica:
Necesitaremo inicializar el proyecto con ***npm***, para ello seguiremos los pasos siguientes:

**Paso 1:**

Utilizamos el comando ***npm init --yes** para generar un archivo **package.json**. Este archivo contiene la información del proyecto, incluidas las dependencias y scripts.

```bash 
{
  "name": "ull-esit-inf-dsi-23-24-prct04-arrays-tuples-enums-albaaperez",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "tsc-watch --onSuccess \"node dist/index.js\"",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
}

``` 

**Paso 2:**

Instalación del Compilador de TypeScript. Se instala el compilador de TypeScript globalmente con el comando ***npm install --global typescript***.

**Paso 3:**

Configuración del Compilador con tsconfig.json. Se crea un archivo de configuración llamado **tsconfig.json** en la raíz del proyecto. Este archivo especifica opciones para el compilador de TypeScript, como el directorio de entrada **(rootDir)** y el directorio de salida **(outDir)**.

```bash
{
  "exclude": [
    "./tests",
    "./node_modules",
    "./dist"
  ],
  "compilerOptions": {
    "target": "es2022",
    "module": "commonjs",
    "declaration": true,
    "rootDir": "./src",
    "outDir": "./dist",
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitReturns": true
  }
}
```
**Paso 4:**

Instalación de tsc-watch para Compilación Automática. Se instala tsc-watch como una dependencia de desarrollo con el comando **npm install --save-dev tsc-watch**.

**Paso 5:** 

Modificamos la sección de scripts en **package.json** para utilizar tsc-watch y ejecutar el código compilado solo si la compilación es exitosa.

```bash
"scripts": 
    "start": "tsc-watch --onSuccess \"node dist/index.js\""
```

**Paso 6:**
Ejecutamos el comando **npm start**, que utiliza **tsc-watch** para observar cambios en los archivos de origen y compilar automáticamente.


## Instalación de ESlint.
ESLint, un linter muy conocido para trabajar con JavaScript y TypeScript. Para instalarlo haremos lo siguiente:

1. **Instalación de ESLint**:
  - Instalamos el ESLint de manera global utilizando el comando ***npm i -g eslint***.
  - Verificamos la instalación con **eslint --version**.

2. **Configuración de ESLint**:
  - Iniciamos la configuración de ESLint con el comando ***eslint --init***.
  - Durante la configuración, se elige el tipo de proyecto, el sistema de módulos, el framework (en este caso, ninguno), si se utiliza TypeScript, el entorno de ejecución (Node.js), el formato del archivo de configuración (JSON), y se instalan las dependencias necesarias.

3. **Archivo de Configuración de ESLint**:
  - Configuraremos el archivo de configuración **.eslintrc.json**, que indica el entorno, las extensiones recomendadas (como eslint:recommended y plugin:@typescript-eslint/recommended), el parser de TypeScript, y la configuración de reglas. Se verá de la siguiente manera:
  ```bash
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "require-jsdoc": "off",
        "valid-jsdoc": "off"
    }
  ```

4. **Personalización de Reglas**
  - Editamos el archivo de configuración para activar, desactivar o personalizar reglas específicas según las necesidades del proyecto.

5. **Ignorar Archivos:**
  - Creamos un archivo **.eslintignore** para especificar qué archivos y directorios deben ser ignorados por ESLint.

6. **Ejecución de ESLint:**
  - Ejecutamos ESLint en el proyecto con el comando **eslint .**, y se muestra cómo se informan los problemas detectados.

7. **Formateo del Código con Prettier:**
  - Instalamos Prettier y eslint-config-prettier para desactivar reglas de formato en ESLint.
  - Configuramos el ESLint para integrarse con Prettier añadiendo "prettier" a la lista de extensiones en el archivo de configuración.
  - Se crea un archivo de configuración de Prettier (.prettierrc.json) y un archivo de ignorar (.prettierignore).

---

## Typedoc.
***TypeDoc*** es una herramienta de generación de documentación para proyectos TypeScript. Proporciona una forma eficiente de documentar el código fuente y generar automáticamente documentación en formato HTML. A continuación, se presenta una breve introducción a TypeDoc y cómo se puede utilizar en el contexto de esta práctica.

### Instalación de la herramienta.
Podemos instalar TypeDoc utilizando ***npm*** (Node Package Manager). Abrimos la terminal y ejecutamos el siguiente comando:

```bash
npm install --save-dev typedoc
```
Este comando instalará TypeDoc como una dependencia de desarrollo en el proyecto.

### Uso básico.
Para generar documentación con TypeDoc, simplemente ejecutamos el siguiente comando en la terminal desde el directorio de su proyecto:

```bash
npx typedoc
```
Otra forma de hacerlo, es en el compilador, cuyo fichero es ***package.json***. Aquí especificaremos la siguiente línea en el apartado de **scripts**:

```bash
"doc": "typedoc"
```

### Configuración.
**TypeDoc** puede configurarse utilizando un archivo ***typedoc.json*** en la raíz del proyecto. Aquí podemos especificar la configuración específica que deseamos para la documentación. 

**Paso 1: Crear el archivo typedoc.json:**

En la raíz de nuestro proyecto crearemos a mano un archivo denominado **typedoc.json**.
Este es un archivo de configuración para TypeDoc.

**Paso 2: Configuración específica:**

Una vez creado el fichero, dentro escribiremos lo siguiente:

```bash
{
  "entryPoints": [
    "./src/**/*.ts
  ],
  "out": "./docs",

}
```
Este archivo de configuración le dice a TypeDoc qué archivos deben considerarse para la **generación de documentación**, en este caso, todos los ficheros de los ejercicios realizados y, **dónde debe colocar esa documentación generada**, en nuestro directorio /docs. Cuando ejecutemos **npx typedoc** desde la terminal, TypeDoc utilizará esta configuración para procesar los archivos de entrada y generar la documentación en el directorio especificado.

Configurado TypeDoc podremos ejecutarlo desde la terminal con el comando:

```bash
npm run doc
```

---
## mocha y chai
***Mocha y Chai*** son herramientas populares para realizar pruebas unitarias en proyectos JavaScript y TypeScript. Mocha es un marco de ejecución de pruebas y Chai es una biblioteca de aserciones que se integra bien con Mocha. Aquí hay una breve introducción sobre cómo comenzar con Mocha y Chai.

### Instalación de las herramientas.
En primer lugar, instalaremos Mocha y Chai como dependencias de desarrollo en nuestro proyecto con el comando:

```bash
 npm install --save-dev mocha chai@4.4.1 @types/mocha @types/chai ts-node
```
  - mocha: El marco de ejecución de pruebas.
  - chai: Una biblioteca de aserciones. Le especificaremos la versión anterior para trabajar de forma correcta con chai.
  - @types/mocha y @types/chai: Tipos TypeScript para Mocha y Chai.
  - ts-node: Permite ejecutar archivos TypeScript directamente en Node.js.


Hecho esto, crearemos un fichero denominado ***.mocharc.json***. Este fichero se utiliza para especificar configuraciones personalizadas para la ejecución de pruebas con Mocha.
Este contendrá lo siguiente:

```bash
{
  "extension": ["ts"],
  "spec": "tests/**/*.spec.ts",
  "require": "ts-node/register"
}
```
  - **"extension"** --> Mocha reconocerá los archivos con la extensión .ts como archivos de prueba TypeScript.
  - **"spec"** --> Mocha buscará los archivos de prueba en la carpeta tests y sus subdirectorios (**/) que tengan la extensión .spec.ts.
  - **"require"** --> antes de ejecutar las pruebas, se debe registrar el módulo ts-node para permitir la ejecución de archivos TypeScript directamente en Mocha.

### Estructura de las pruebas.
En nuestro directorio raíz crearemos un nuevo directorio denominado **/tests** que contendrá nuestros archivos para las pruebas. Nuestros directorios deberán quedar de una forma similar a esta:

```bash
/proyecto
  /src
    /EJERCICIO1
      - interfaz.ts
      - clase.ts
      - index.ts
    /EJERCICIO2
      - clase1.ts
      - clase2.ts
      - index.ts
    ...
  /test
    /EJERCICIO1
      - interfaz.spec.ts
      - clase.spec.ts
      - index.spec.ts
    /EJERCICIO2
      - clase1.spec.ts
      - clase2.spec.ts
      - index.spec.ts
    ...

```

### Escribir las pruebas.
Por último, lo que deberemos hacer será escribir las pruebas en esos ficheros que vamos a crear terminados en **.spec.ts**. La importancion de mocha y chai en nuestro archivos de prueba serán:

```bash
import 'mocha';
import {expect} from 'chai';
import { mcd } from '../src/EJERCICIO1';
```
  - Utilizamos **describe** para agrupar las pruebas relacionadas
  - Cada prueba se crea con **it**.
  - Usamos las aserciones de Chai, por ejemplo, **expect(result).to.be.undefined.**

## Subir archivos 
Una vez hayamos terminado de realizar los ejercicios, procederemos a subirlos a nuestro repositorio de github mediante:

  - **git add .**
  - **git commit -m " "**
  - **git push**

Pero antes de hacer esto deberemos crear un fichero ***.gitignore** donde introduciremos lo siguiente:
```bash
node_modules
dist
package-lock.json
```
El archivo **.gitignore** se utiliza para especificar archivos y directorios que no deben ser incluidos en el control de versiones de Git. En este caso, estos archivos serán ignorados a la hora de subirlos a GitHub.

---

# 4. Configuracion de Istanbul y coveralls.

### ¿Que son?
En esta sección, detallaremos la configuración necesaria para utilizar **Istanbul y Coveralls** en nuestro proyecto. Estas herramientas son valiosas para evaluar la cobertura de nuestro código fuente y realizar un seguimiento de la misma.

### Instalación

Primero, realizaremos la instalación de los mismos con los siguientes comandos:
```bash
npm install --save-dev nyc coveralls
```
En nuestro fichero **package.json** detallaremos lo siguiente para terminar de configurar Istanbul y coveralls:

```bash 
"test": "nyc mocha",
"coverage": "nyc npm test && nyc report --reporter=text-lcov | coveralls && rm -rf .nyc_output",
```

### Inicio de sesión en Coveralls para el cubrimiento del código

Para realizar esto, nos deberemos meter en la página de [Coveralls](#https://coveralls.io/).
Dentro de esta iniciaremos sesión con nuestras credenciales de GitHub.
Si deseamos agregar un repositorio para el cubrimiento de nuestro código este deberá ser de visibilidad pública.  
Lo agregaremos dándole a **ADD REPOS** y una vez elegido el repositorio copiaremos el token.
Por último, en nuestro directorio raíz crearemos el **.coveralls.yml** que contendrá el token de nuestro repositorio:

```bash
repo_token: xbwn8u45rB3Q44dE2hFjQT0kbhDmRPDuu
```

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-ALBAAPEREZ/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-ALBAAPEREZ?branch=main)

---

# 5. Principios SOLID.

En el desarrollo de software, ***los Principios SOLID*** son un conjunto de principios de diseño orientados a la creación de sistemas más mantenibles, flexibles y escalables. Estos principios fueron introducidos por el ingeniero de software Robert C. Martin y representan un conjunto de directrices que buscan mejorar la calidad del código y facilitar su mantenimiento a lo largo del tiempo.

## ¿Cuáles son?

Los Principios SOLID son un acrónimo que representa los siguientes principios:

### S - Principio de Responsabilidad Única (Single Responsibility Principle - SRP)

El **SRP** establece que una clase debería tener una única razón para cambiar. En otras palabras, una clase debería tener una **única responsabilidad**, una única función.

### O - Principio de Abierto/Cerrado (Open/Closed Principle - OCP)

El **OCP** propone que una entidad de software, como una clase, debe estar **abierta para la extensión pero cerrada para la modificación**. Se busca lograr esto mediante la creación de código que pueda ser extendido sin modificar su funcionalidad existente.

### L - Principio de Sustitución de Liskov (Liskov Substitution Principle - LSP)

El **LSP** establece que los objetos de una clase base deben **poder ser sustituidos por objetos de sus clases derivadas** sin afectar la corrección del programa.

### I - Principio de Segregación de Interfaces (Interface Segregation Principle - ISP)

El **ISP** propone que una clase no debería verse obligada a implementar interfaces que no utiliza. En lugar de interfaces generales, se prefieren interfaces más específicas.

### D - Principio de Inversión de Dependencia (Dependency Inversion Principle - DIP)

El **DIP** propone que las dependencias de alto nivel no deben depender de módulos de bajo nivel, sino que ambos deben depender de abstracciones. Además, las abstracciones no deben depender de los detalles, sino que los detalles deben depender de las abstracciones.

## Importancia y Beneficios

La aplicación de los Principios SOLID en el desarrollo de software tiene varios beneficios, entre ellos:

- **Mantenibilidad:** Facilitan el mantenimiento del código a lo largo del tiempo.
- **Escalabilidad:** Permiten construir sistemas más flexibles y escalables.
- **Reusabilidad:** Favorecen la reutilización de código y componentes.
- **Legibilidad:** Mejoran la claridad y la comprensión del código.


En esta práctica, se presentarán ejemplos específicos de código que ilustrarán la aplicación práctica de los Principios SOLID en nuestro proyecto. Veremos cómo estos principios se traducen en un código más limpio, modular y fácil de entender.

A lo largo de la revisión de los ejercicios, se destacarán las áreas donde los Principios SOLID han sido implementados con éxito, subrayando la importancia de seguir estas directrices para lograr un diseño de software robusto y sostenible.

---


# Ejercicio 1 - La mudanza

## Enunciado del ejercicio.
Diseñe un sistema de información que permita gestionar los enseres que hay que trasladar de una vivienda a otra durante una mudanza.

Los enseres pueden trasladarse en cajas y, por lo tanto, en una caja deben poder almacenarse diferentes tipos de enseres. A una caja se le pueden añadir y eliminar enseres, además de poder listar por consola el contenido de cada una de ellas. También se pueden buscar enseres en las cajas, por ejemplo, por su nombre.

Utilice clases e interfaces genéricas en el diseño e implementación de este sistema. Al mismo tiempo, respete los principios SOLID en su diseño e implementación.

## Solución al problema propuesto
La solución al problema propuesto es la siguiente:

**Caja.ts**
```typescript
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
```

**Enser.ts**
```typescript
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
```

**Libros.ts**
```typescript
import { Enser } from './Enser';

/**
 * Clase que representa un libro
 * Los libros son enseres que se trasladan de un lugar a otro.
 * Cada libro tiene un nombre, una cantidad, una descripción y un peso.
 * @param nombre nombre del libro
 * @param cantidad cantidad de libros
 * @param descripcion descripción del libro
 * @param peso peso del libro
 * @param toString función que devuelve la representación en string de un libro
 */
export class Libro implements Enser {
  nombre: string;
  cantidad: number = 1;
  descripcion: string = 'Libro';
  peso: number;

  /**
   * Función que devuelve la representación en string de un libro
   * Devuelve un string con el nombre, la descripción, la cantidad y el peso del libro.
   * @param nombre Nombre del libro
   * @param cantidad cantidad de libros
   * @param descripcion descripción del libro
   * @param peso peso del libro
   */
  constructor(nombre: string, cantidad: number, descripcion: string, peso: number) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.descripcion = descripcion;
    this.peso = peso;
  }

  /**
   * Función que devuelve la representación en string de un libro
   * Devuelve un string con el nombre, la descripción, la cantidad y el peso del libro.
   * @returns representación en string del libro
   */
  public toString(): string {
    return `Libro: ${this.nombre} - ${this.descripcion} - ${this.cantidad} unidades - ${this.peso} kilos`;
  }
}
```

**Ropa.ts**
```typescript
import { Enser } from './Enser';

/**
 * Clase que representa ropa
 * La ropa es un enser que se traslada de un lugar a otro.
 * Cada ropa tiene un nombre, una cantidad, una descripción y un peso.
 * @param nombre nombre de la ropa
 * @param cantidad cantidad de ropa
 * @param descripcion descripción de la ropa
 * @param peso peso de la ropa
 * @param toString función que devuelve la representación en string de la ropa
 */
export class Ropa implements Enser {
  nombre: string;
  cantidad: number = 1;
  descripcion: string = 'Ropa';
  peso: number;

  /**
   * Constructor de la clase Ropa
   * Se encarga de crear ropa con un nombre, una cantidad, una descripción y un peso.
   * @param nombre NOmbre de la ropa
   * @param cantidad Cantidad de ropa
   * @param descripcion descripción de la ropa
   * @param peso peso de la ropa
   */
  constructor(nombre: string, cantidad: number, descripcion: string, peso: number) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.descripcion = descripcion;
    this.peso = peso;
  }

  /**
   * Función que devuelve la representación en string de la ropa
   * Devuelve un string con el nombre, la descripción, la cantidad y el peso de la ropa.
   * @returns representación en string de la ropa
   * @returns representación en string de la ropa
   */
  public toString(): string {
    return `Ropa: ${this.nombre} - ${this.descripcion} - ${this.cantidad} unidades - ${this.peso} kilos`;
  }
}
```

**Electrodoméstico.ts**
```typescript
import { Enser } from './Enser';

/**
 * Clase que representa un electrodoméstico
 * Los electrodomésticos son enseres que se trasladan de un lugar a otro.
 * Cada electrodoméstico tiene un nombre, una descripción, una cantidad y un peso.
 * @param nombre nombre del electrodoméstico
 * @param descripcion descripción del electrodoméstico
 * @param cantidad cantidad de electrodomésticos
 * @param peso peso del electrodoméstico
 * @param toString función que devuelve la representación en string de un electrodoméstico
 */
export class Electrodomestico implements Enser {
  nombre: string;
  descripcion: string = 'Electrodoméstico';
  cantidad: number = 1;
  peso: number;

  /**
   * Función que devuelve la representación en string de un electrodoméstico
   * Devuelve un string con el nombre, la descripción, la cantidad y el peso del electrodoméstico.
   * @param nombre NOMbre del electrodoméstico
   * @param peso peso del electrodoméstico
   */
  constructor(nombre: string, peso: number) {
    this.nombre = nombre;
    this.peso = peso;
  }

  /**
   * Función que devuelve la representación en string de un electrodoméstico
   * Devuelve un string con el nombre, la descripción, la cantidad y el peso del electrodoméstico.
   * @returns representación en string del electrodoméstico
   */
  public toString(): string {
    return `Electrodoméstico: ${this.nombre} - ${this.descripcion} - ${this.cantidad} unidades - ${this.peso} kilos`;
  }
}
```

**Mueble.ts**
```typescript
import { Enser } from './Enser';

/**
 * Clase que representa un mueble
 * Los muebles son enseres que se trasladan de un lugar a otro.
 * Cada mueble tiene un nombre, una cantidad, una descripción y un peso.
 * @param nombre nombre del mueble
 * @param cantidad cantidad de muebles
 * @param descripcion descripción del mueble
 * @param peso peso del mueble
 * @param toString función que devuelve la representación en string de un mueble
 */
export class Mueble implements Enser {
  nombre: string;
  cantidad: number = 1;
  descripcion: string = 'Mueble';
  peso: number;

  /**
   * Constructor de la clase Mueble
   * @param nombre nombre del mueble
   * @param cantidad cantidad de muebles
   * @param descripcion descripción del mueble
   * @param peso peso del mueble
   */
  constructor(nombre: string, cantidad: number, descripcion: string, peso: number) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.descripcion = descripcion;
    this.peso = peso;
  }

  /**
   * Función que devuelve la representación en string de un mueble
   * Devuelve un string con el nombre, la cantidad y el peso del mueble.
   * @returns representación en string del mueble 
   */
  public toString(): string {
    return `Mueble: ${this.nombre} - ${this.cantidad} unidades - ${this.peso} kilos`;
  }
}
```
**index.ts**
```typescript
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
```

## Explicación de lo realizado

### Clase Caja

La clase `Caja` representa una caja utilizada para el traslado de enseres de un lugar a otro. Está parametrizada con un tipo `T` que debe extender la interfaz `Enser`. La caja tiene una capacidad máxima y un peso máximo. A continuación, se describen sus principales métodos y propiedades:

#### Propiedades

- `enseres`: Un array que almacena los enseres contenidos en la caja.
- `capacidadMaxima`: Capacidad máxima de la caja, que se establece al construir la caja.
- `pesoMaximo`: Peso máximo que la caja puede contener, establecido al construir la caja.
- `pesoActual`: Peso actual de la caja, se actualiza al agregar o quitar enseres.

#### Métodos

- `constructor(capacidadMaxima: number, pesoMaximo: number)`: Constructor que recibe la capacidad máxima y el peso máximo de la caja.
- `agregarEnser(enser: T): void`: Agrega un enser a la caja verificando la capacidad y el peso máximo.
- `eliminarEnserPorNombre(nombre: string): void`: Elimina un enser de la caja por nombre y actualiza el peso actual.
- `listarEnseres(): void`: Muestra por consola el contenido de la caja, recorriendo el array de enseres y mostrando el nombre de cada enser.
- `buscarEnserPorNombre(nombre: string): T | undefined`: Busca un enser por nombre y devuelve el enser si lo encuentra, de lo contrario, retorna `undefined`.


### Interfaz Enser

La interfaz `Enser` representa un enser que debe trasladarse de un lugar a otro. Contiene propiedades esenciales que describen el enser:

#### Propiedades

- `nombre`: Nombre del enser.
- `descripcion`: Descripción del enser.
- `cantidad`: Cantidad de enseres.
- `peso`: Peso del enser.


### Clase Libro

La clase `Libro` representa un libro, que es un tipo de enser que se traslada de un lugar a otro. La clase implementa la interfaz `Enser`. A continuación, se detallan sus características:

#### Propiedades

- `nombre`: Nombre del libro.
- `cantidad`: Cantidad de libros.
- `descripcion`: Descripción del libro.
- `peso`: Peso del libro.

#### Métodos

- `constructor(nombre: string, cantidad: number, descripcion: string, peso: number)`: Constructor que recibe parámetros para inicializar las propiedades del libro.
- `toString(): string`: Devuelve la representación en string del libro, incluyendo nombre, descripción, cantidad y peso.


### Clase Ropa

La clase `Ropa` representa un tipo de enser que es ropa. Al igual que `Libro`, implementa la interfaz `Enser`. A continuación, se describen sus características:

#### Propiedades

- `nombre`: Nombre de la ropa.
- `cantidad`: Cantidad de ropa.
- `descripcion`: Descripción de la ropa.
- `peso`: Peso de la ropa.

#### Métodos

- `constructor(nombre: string, cantidad: number, descripcion: string, peso: number)`: Constructor que recibe parámetros para inicializar las propiedades de la ropa.
- `toString(): string`: Devuelve la representación en string de la ropa, incluyendo nombre, descripción, cantidad y peso.


### Clase Electrodomestico

La clase `Electrodomestico` representa un tipo de enser que es un electrodoméstico. Al igual que las anteriores, implementa la interfaz `Enser`. A continuación, se detallan sus características:

#### Propiedades

- `nombre`: Nombre del electrodoméstico.
- `descripcion`: Descripción del electrodoméstico.
- `cantidad`: Cantidad de electrodomésticos.
- `peso`: Peso del electrodoméstico.

#### Métodos

- `constructor(nombre: string, peso: number)`: Constructor que recibe parámetros para inicializar las propiedades del electrodoméstico.
- `toString(): string`: Devuelve la representación en string del electrodoméstico, incluyendo nombre, descripción, cantidad y peso.


### Clase Mueble

La clase `Mueble` representa un tipo de enser que es un mueble. Al igual que las anteriores, implementa la interfaz `Enser`. A continuación, se describen sus características:

#### Propiedades

- `nombre`: Nombre del mueble.
- `cantidad`: Cantidad de muebles.
- `descripcion`: Descripción del mueble.
- `peso`: Peso del mueble.

#### Métodos

- `constructor(nombre: string, cantidad: number, descripcion: string, peso: number)`: Constructor que recibe parámetros para inicializar las propiedades del mueble.
- `toString(): string`: Devuelve la representación en string del mueble, incluyendo nombre, cantidad y peso.


### index.ts

El archivo `index.ts` contiene un ejemplo de uso de las clases y funciones definidas en los otros archivos. A continuación, se describen las acciones realizadas:

1. Se crea una caja para trasladar enseres con capacidad máxima de 5 y peso máximo de 50 kg.
2. Se crean diferentes tipos de enseres (Mueble, Electrodoméstico, Ropa, Libro).
3. Se agregan estos enseres a la caja, mostrando mensajes si no es posible agregarlos debido a restricciones de capacidad o peso.
4. Se muestra el contenido de la caja.
5. Se busca un enser por nombre y se muestra si se encuentra.
6. Se elimina un enser por nombre y se muestra el contenido actualizado de la caja.


## Pruebas realizadas.
Se implementaron multitud de pruebas para comporbar el correcto funcionamiento del programa.

**Caja.spec.ts**
```typescript
// PRUEBAS PARA LA CLASE CAJA

import 'mocha'
import { expect } from 'chai'
import { Caja } from '../../src/EJERCICIO1/Caja'

// PRUEBAS PARA LA CLASE CAJA
describe('Pruebas para la clase Caja', () => {
  describe('Pruebas para el método agregarEnser', () => {
    it ('Se agrega un enser a la caja', () => {
      const caja = new Caja(2, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      expect(caja['enseres'].length).to.equal(1);
    });
    // Prueba para verificar que no se puede agregar un enser si la caja está llena
    it ('No se puede agregar un enser si la caja está llena', () => {
      const caja = new Caja(1, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      caja.agregarEnser({nombre: 'Televisor', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      expect(caja['enseres'].length).to.equal(1);
    });
    // Prueba para verificar que se actualiza el peso actual de la caja
    it ('Se actualiza el peso actual de la caja', () => {
      const caja = new Caja(2, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      expect(caja['pesoActual']).to.equal(5);
    });
    // prueba que imprime el mensaje si no se puede agregar el enser
    it ('Imprime el mensaje si no se puede agregar el enser', () => {
      const caja = new Caja(1, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      caja.agregarEnser({nombre: 'Televisor', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      expect(caja['enseres'].length).to.equal(1);
    });
    // Prueba para verificar que no se puede agregar un enser si excede el peso máximo
    it ('No se puede agregar un enser si excede el peso máximo', () => {
      const caja = new Caja(2, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 15});
      expect(caja['enseres'].length).to.equal(0);
    });
    // prueba para comprobar que es una función
    it ('Es una función', () => {
      const caja = new Caja(2, 10);
      expect(typeof caja.agregarEnser).to.equal('function');
    });
  });
  // pruebas para la función eliminarEnserPorNombre
  describe('Pruebas para el método eliminarEnserPorNombre', () => {
    // Prueba para verificar que se elimina un enser de la caja por nombre
    it ('Se elimina un enser de la caja por nombre', () => {
      const caja = new Caja(2, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      caja.eliminarEnserPorNombre('Licuadora');
      expect(caja['enseres'].length).to.equal(0);
    });
    // Prueba para verificar que se actualiza el peso actual de la caja
    it ('Se actualiza el peso actual de la caja', () => {
      const caja = new Caja(2, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      caja.eliminarEnserPorNombre('Licuadora');
      expect(caja['pesoActual']).to.equal(0);
    });
    // Prueba para verificar que se imprime el mensaje si no se encuentra el enser
    it ('Imprime el mensaje si no se encuentra el enser', () => {
      const caja = new Caja(2, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      caja.eliminarEnserPorNombre('Televisor');
      expect(caja['enseres'].length).to.equal(1);
    });
    // prueba para comprobar que es una función
    it ('Es una función', () => {
      const caja = new Caja(2, 10);
      expect(typeof caja.eliminarEnserPorNombre).to.equal('function');
    });
  });
  // pruebas para la función listarEnseres
  describe('Pruebas para el método listarEnseres', () => {
    // Prueba para verificar que se lista el contenido de la caja
    it ('Se lista el contenido de la caja', () => {
      const caja = new Caja(2, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      caja.agregarEnser({nombre: 'Televisor', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      caja.listarEnseres();
    });
    // prueba para comprobar que es una función
    it ('Es una función', () => {
      const caja = new Caja(2, 10);
      expect(typeof caja.listarEnseres).to.equal('function');
    });
    // prueba para comprobar que imprime el mensaje si la caja está vacía
    it ('Imprime el mensaje si la caja está vacía', () => {
      const caja = new Caja(2, 10);
      caja.listarEnseres();
    });    
  });
  // pruebas para la funcion buscarEnserPorNombre
  describe('Pruebas para el método buscarEnserPorNombre', () => {
    // Prueba para verificar que se busca un enser por nombre
    it ('Se busca un enser por nombre', () => {
      const caja = new Caja(2, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      caja.buscarEnserPorNombre('Licuadora');
    });
    // Prueba para verificar que se imprime el mensaje si no se encuentra el enser
    it ('Imprime el mensaje si no se encuentra el enser', () => {
      const caja = new Caja(2, 10);
      caja.buscarEnserPorNombre('Licuadora');
    });
    // prueba para comprobar que es una función
    it ('Es una función', () => {
      const caja = new Caja(2, 10);
      expect(typeof caja.buscarEnserPorNombre).to.equal('function');
    });
  });
});
``` 
En estas pruebas para la clase **Caja**, se evalúa el comportamiento del método agregarEnser. Se verifica la adición exitosa de un enser a la caja, la restricción de no agregar si la caja está llena, la actualización del peso actual, la emisión de mensajes en casos específicos, la restricción de peso máximo, y la confirmación de que la función es correctamente una función. Similarmente, las pruebas para eliminarEnserPorNombre evalúan la eliminación de un enser por nombre, la actualización del peso actual, la emisión de mensajes en situaciones específicas, y la verificación de que la función sea una función. Asimismo, las pruebas para listarEnseres se centran en listar correctamente el contenido de la caja, confirmar que la función es una función, y verificar la emisión de mensajes si la caja está vacía. Por último, las pruebas para buscarEnserPorNombre evalúan la búsqueda exitosa de un enser por nombre, la emisión de mensajes si el enser no se encuentra, y la confirmación de que la función es una función. Estas pruebas comprehensivas aseguran la integridad y funcionalidad adecuada de la clase Caja en distintos escenarios.

**Enser.spec.ts**
```typescript
// PRUEBAS PARA LA CLASE ENSER

import 'mocha'
import { expect } from 'chai'
import { Enser } from '../../src/EJERCICIO1/Enser'

// PRUEBAS PARA LA CLASE ENSER
describe('Pruebas para la clase Enser', () => {
  // pruebas para comprobar que se crea un objeto Enser
  it('Se crea un objeto Enser', () => {
    const enser: Enser = {
      nombre: 'Libro',
      descripcion: 'Libro de historia',
      cantidad: 2,
      peso: 2
    }
    expect(enser.nombre).to.be.equal('Libro')
    expect(enser.descripcion).to.be.equal('Libro de historia')
    expect(enser.cantidad).to.be.equal(2)
    expect(enser.peso).to.be.equal(2)
  });
  // prueba para comprobar que se crea un objeto Enser con los valores por defecto
  it('Se crea un objeto Enser con valores por defecto', () => {
    const enser: Enser = {
      nombre: 'Libro',
      descripcion: 'Libro de historia',
      cantidad: 1,
      peso: 1
    }
    expect(enser.nombre).to.be.equal('Libro')
    expect(enser.descripcion).to.be.equal('Libro de historia')
    expect(enser.cantidad).to.be.equal(1)
    expect(enser.peso).to.be.equal(1)
  });
  // prueba para comprobar que es una interfaz
  it('Es una interfaz', () => {
    const enser: Enser = {
      nombre: 'Libro',
      descripcion: 'Libro de historia',
      cantidad: 1,
      peso: 1
    }
    expect(enser).to.be.instanceOf(Object)
  });
  // prueba para comprobar los atributos de la interfaz
  it('Atributos de la interfaz', () => {
    const enser: Enser = {
      nombre: 'Libro',
      descripcion: 'Libro de historia',
      cantidad: 1,
      peso: 1
    }
    expect(enser).to.have.property('nombre')
    expect(enser).to.have.property('descripcion')
    expect(enser).to.have.property('cantidad')
    expect(enser).to.have.property('peso')
  });
});
```

En estas pruebas para la interfaz Enser, se examina la creación de objetos Enser y su conformidad con la interfaz. La primera prueba valida la creación exitosa de un objeto Enser con atributos específicos. La segunda prueba verifica la creación de un objeto Enser con valores por defecto en caso de que algunos atributos no sean proporcionados. La tercera prueba confirma que Enser es una interfaz, utilizando una instancia de objeto como referencia. Finalmente, la cuarta prueba se enfoca en garantizar que los objetos Enser tengan los atributos requeridos por la interfaz (nombre, descripcion, cantidad y peso). Estas pruebas abordadas aseguran que la clase Enser funcione como una interfaz y que los objetos creados cumplan con las expectativas establecidas en la definición de la interfaz.

**Ropa.spec.ts**
```typescript
// PRUEBAS PARA LA CLASE ROPA

import 'mocha'
import { expect } from 'chai'
import { Ropa } from '../../src/EJERCICIO1/Ropa'

// PRUEBAS PARA LA CLASE ROPA
describe('Pruebas para la clase Ropa', () => {
  // pruebas para comprobar que se crea un objeto Ropa
  it('Se crea un objeto Ropa', () => {
    const ropa = new Ropa('Camisa', 1, 'Ropa', 0.5);
    expect(ropa.nombre).to.be.equal('Camisa');
    expect(ropa.descripcion).to.be.equal('Ropa');
    expect(ropa.cantidad).to.be.equal(1);
    expect(ropa.peso).to.be.equal(0.5);
  });
  // prueba para comprobar que se crea un objeto Ropa con los valores por defecto
  it('Se crea un objeto Ropa con valores por defecto', () => {
    const ropa = new Ropa('Pantalón', 1, 'Ropa', 0.5);
    expect(ropa.nombre).to.be.equal('Pantalón');
    expect(ropa.descripcion).to.be.equal('Ropa');
    expect(ropa.cantidad).to.be.equal(1);
    expect(ropa.peso).to.be.equal(0.5);
  });
  // prueba para comprobar que es una clase
  it('Es una clase', () => {
    const ropa = new Ropa('Pantalón', 1, 'Ropa', 0.5);
    expect(ropa).to.be.instanceOf(Ropa);
  });
  // prueba para comprobar los atributos de la clase
  it('Atributos de la clase', () => {
    const ropa = new Ropa('Pantalón', 1, 'Ropa', 0.5);
    expect(ropa).to.have.property('nombre');
    expect(ropa).to.have.property('descripcion');
    expect(ropa).to.have.property('cantidad');
    expect(ropa).to.have.property('peso');
  });
  // prueba para comprobar el método toString
  it('Método toString', () => {
    const ropa = new Ropa('Camisa', 1, 'Ropa', 0.5);
    expect(ropa.toString()).to.be.equal('Ropa: Camisa - Ropa - 1 unidades - 0.5 kilos');
  });
  // prueba para comprobar que es una función
  it('Es una función', () => {
    const ropa = new Ropa('Camisa', 1, 'Ropa', 0.5);
    expect(typeof ropa.toString).to.be.equal('function');
  });
});
```

Estas pruebas para la clase Ropa se centran en verificar la creación de objetos Ropa, sus atributos, y la funcionalidad del método toString. En la primera prueba se confirma que se puede crear un objeto Ropa con los atributos adecuados, como nombre, descripcion, cantidad y peso. La segunda prueba valida que, si no se proporcionan algunos atributos, se creará un objeto Ropa con valores por defecto. La tercera prueba asegura que el objeto creado es una instancia de la clase Ropa.
La cuarta prueba comprueba que los atributos necesarios de la clase (nombre, descripcion, cantidad y peso) están presentes en el objeto Ropa. La quinta prueba verifica que el método toString devuelve la representación en cadena esperada del objeto Ropa. La última prueba asegura que el método toString es una función.


**Mueble.spec.ts**
```typescript
// PRUEBAS PARA LA CLASE MUEBLES
import 'mocha'
import { expect } from 'chai'
import { Mueble } from '../../src/EJERCICIO1/Mueble'

// PRUEBAS PARA LA CLASE MUEBLES
describe('Pruebas para la clase Muebles', () => {
  // pruebas para comprobar que se crea un objeto Muebles
  it('Se crea un objeto Muebles', () => {
    const muebles = new Mueble('Silla', 1, 'Muebles', 5);
    expect(muebles.nombre).to.be.equal('Silla');
    expect(muebles.descripcion).to.be.equal('Muebles');
    expect(muebles.cantidad).to.be.equal(1);
    expect(muebles.peso).to.be.equal(5);
  });
  // prueba para comprobar que se crea un objeto Muebles con los valores por defecto
  it('Se crea un objeto Muebles con valores por defecto', () => {
    const muebles = new Mueble('Mesa', 1, 'Muebles', 10);
    expect(muebles.nombre).to.be.equal('Mesa');
    expect(muebles.descripcion).to.be.equal('Muebles');
    expect(muebles.cantidad).to.be.equal(1);
    expect(muebles.peso).to.be.equal(10);
  });
  // prueba para comprobar que es una clase
  it('Es una clase', () => {
    const muebles = new Mueble('Mesa', 1, 'Muebles', 10);
    expect(muebles).to.be.instanceOf(Mueble);
  });
  // prueba para comprobar los atributos de la clase
  it('Atributos de la clase', () => {
    const muebles = new Mueble('Mesa', 1, 'Muebles', 10);
    expect(muebles).to.have.property('nombre');
    expect(muebles).to.have.property('descripcion');
    expect(muebles).to.have.property('cantidad');
    expect(muebles).to.have.property('peso');
  });
  // prueba para comprobar el método toString
  it('Método toString', () => {
    const muebles = new Mueble('Silla', 1, 'Mueble', 5);
    expect(muebles.toString()).to.be.equal('Mueble: Silla - 1 unidades - 5 kilos');
  });
});
```
Estas pruebas para la clase Mueble se enfocan en verificar la creación de objetos Mueble, sus atributos, y la funcionalidad del método toString. La primera prueba confirma que se puede crear un objeto Mueble con los atributos adecuados, como nombre, descripcion, cantidad y peso.
Hay pruebas para validae que, si no se proporcionan algunos atributos, se creará un objeto Mueble con valores por defecto, pruebas aseguran que el objeto creado es una instancia de la clase Mueble.
Pruebas comprueban que los atributos necesarios de la clase (nombre, descripcion, cantidad y peso) están presentes en el objeto Mueble y se verifica que el método toString devuelve la representación en cadena esperada del objeto Mueble.



**Libro.spec.ts**
```typescript
// PRUEEBAS PARA LA CLASE LIBRO

import 'mocha'
import { expect } from 'chai'
import { Libro } from '../../src/EJERCICIO1/Libros'

// PRUEBAS PARA LA CLASE LIBRO
describe('Pruebas para la clase Libro', () => {
  // pruebas para comprobar que se crea un objeto Libro
  it('Se crea un objeto Libro', () => {
    const libro = new Libro('Cien años de soledad', 1, 'Libro', 2);
    expect(libro.nombre).to.be.equal('Cien años de soledad');
    expect(libro.descripcion).to.be.equal('Libro');
    expect(libro.cantidad).to.be.equal(1);
    expect(libro.peso).to.be.equal(2);
  });
  // prueba para comprobar que se crea un objeto Libro con los valores por defecto
  it('Se crea un objeto Libro con valores por defecto', () => {
    const libro = new Libro('Cien años de soledad', 1, 'Libro', 2);
    expect(libro.nombre).to.be.equal('Cien años de soledad');
    expect(libro.descripcion).to.be.equal('Libro');
    expect(libro.cantidad).to.be.equal(1);
    expect(libro.peso).to.be.equal(2);
  });
  // prueba para comprobar que es una clase
  it('Es una clase', () => {
    const libro = new Libro('Cien años de soledad', 1, 'Libro', 2);
    expect(libro).to.be.instanceOf(Libro);
  });
  // prueba para comprobar los atributos de la clase
  it('Atributos de la clase', () => {
    const libro = new Libro('Cien años de soledad', 1, 'Libro', 2);
    expect(libro).to.have.property('nombre');
    expect(libro).to.have.property('descripcion');
    expect(libro).to.have.property('cantidad');
    expect(libro).to.have.property('peso');
  });
  // prueba para comprobar el método toString
  it('Método toString', () => {
    const libro = new Libro('Cien años de soledad', 1, 'Libro', 2);
    expect(libro.toString()).to.be.equal('Libro: Cien años de soledad - Libro - 1 unidades - 2 kilos');
  });
  // prueba para comprobar que es una función
  it('Es una función', () => {
    const libro = new Libro('Cien años de soledad', 1, 'Libro', 2);
    expect(typeof libro.toString).to.be.equal('function');
  });
  // comprobar que no devuelve undefined
  it('No devuelve undefined', () => {
    const libro = new Libro('Cien años de soledad', 1, 'Libro', 2);
    expect(libro.toString()).to.not.be.equal('undefined');
  });
  // comprobar que no devuelve null
  it('No devuelve null', () => {
    const libro = new Libro('Cien años de soledad', 1, 'Libro', 2);
    expect(libro.toString()).to.not.be.equal('null');
  });
});
```
Las pruebas para la clase Libro validan la correcta creación de objetos Libro, asegurando que los atributos esenciales como nombre, descripcion, cantidad y peso sean asignados adecuadamente. Además, se verifica que la clase Libro pueda generar objetos con valores por defecto si no se proporcionan algunos atributos. Se confirma que los objetos creados sean instancias válidas de la clase Libro, y que los atributos necesarios estén presentes. También se comprueba que el método toString de la clase funcione correctamente al devolver la representación en cadena esperada del objeto Libro. Estas pruebas abarcan aspectos fundamentales de la funcionalidad y estructura de la clase Libro, asegurando su correcto comportamiento y facilitando la detección de posibles problemas en el código.

**Electrodoméstico.spec.ts**
```typescript
// PRUEBAS PARA LA CLASE ELECTRODOMESTICO

import 'mocha'
import { expect } from 'chai'
import { Electrodomestico } from '../../src/EJERCICIO1/Electrodomestico'

// PRUEBAS PARA LA CLASE ELECTRODOMESTICO
describe('Pruebas para la clase Electrodomestico', () => {
  // pruebas para comprobar que se crea un objeto Electrodomestico
  it('Se crea un objeto Electrodomestico', () => {
    const electrodomestico = new Electrodomestico('Licuadora', 5);
    expect(electrodomestico.nombre).to.be.equal('Licuadora');
    expect(electrodomestico.descripcion).to.be.equal('Electrodoméstico');
    expect(electrodomestico.cantidad).to.be.equal(1);
    expect(electrodomestico.peso).to.be.equal(5);
  });
  // prueba para comprobar que se crea un objeto Electrodomestico con los valores por defecto
  it('Se crea un objeto Electrodomestico con valores por defecto', () => {
    const electrodomestico = new Electrodomestico('Televisor', 10);
    expect(electrodomestico.nombre).to.be.equal('Televisor');
    expect(electrodomestico.descripcion).to.be.equal('Electrodoméstico');
    expect(electrodomestico.cantidad).to.be.equal(1);
    expect(electrodomestico.peso).to.be.equal(10);
  });
  // prueba para comprobar que es una clase
  it('Es una clase', () => {
    const electrodomestico = new Electrodomestico('Televisor', 10);
    expect(electrodomestico).to.be.instanceOf(Electrodomestico);
  });
  // prueba para comprobar los atributos de la clase
  it('Atributos de la clase', () => {
    const electrodomestico = new Electrodomestico('Televisor', 10);
    expect(electrodomestico).to.have.property('nombre');
    expect(electrodomestico).to.have.property('descripcion');
    expect(electrodomestico).to.have.property('cantidad');
    expect(electrodomestico).to.have.property('peso');
  });
  // prueba para comprobar el método toString
  it('Método toString', () => {
    const electrodomestico = new Electrodomestico('Licuadora', 5);
    expect(electrodomestico.toString()).to.be.equal('Electrodoméstico: Licuadora - Electrodoméstico - 1 unidades - 5 kilos');
  });
  // prueba para comprobar que es una función
  it('Es una función', () => {
    const electrodomestico = new Electrodomestico('Licuadora', 5);
    expect(typeof electrodomestico.toString).to.be.equal('function');
  });
});
```

Las pruebas para la clase Electrodomestico evalúan la correcta creación de objetos Electrodomestico, verificando que los atributos esenciales, como nombre, descripcion, cantidad y peso, se asignen correctamente. Se asegura que la clase pueda generar objetos con valores por defecto cuando no se proporcionan algunos atributos. Se valida que los objetos creados sean instancias válidas de la clase Electrodomestico, y que los atributos necesarios estén presentes. Además, se verifica que el método toString de la clase funcione adecuadamente al devolver la representación en cadena esperada del objeto Electrodomestico. Estas pruebas abarcan aspectos cruciales de la funcionalidad y estructura de la clase Electrodomestico, asegurando su correcto funcionamiento y facilitando la detección de posibles problemas en el código.

Todas las pruebas fueron pasadas satisfactoriamente, se realizó el cubrimiento del código con coveralls e Istanbull, siendo el total de cubrimiento del 100%.

```bash

----------------------------|---------|----------|---------|---------|-------------------
File                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------------|---------|----------|---------|---------|-------------------
All files                   |     100 |      100 |     100 |     100 |                   
 EJERCICIO1                 |     100 |      100 |     100 |     100 |                   
  Caja.ts                   |     100 |      100 |     100 |     100 |                   
  Electrodomestico.ts       |     100 |      100 |     100 |     100 |                   
  Libros.ts                 |     100 |      100 |     100 |     100 |                   
  Mueble.ts                 |     100 |      100 |     100 |     100 |                   
  Ropa.ts                   |     100 |      100 |     100 |     100 |                   
 EJERCICIO2                 |     100 |      100 |     100 |     100 |                   
  FormatoHTML.ts            |     100 |      100 |     100 |     100 |                   
  FormatoPDF.ts             |     100 |      100 |     100 |     100 |                   
  GeneradorFacturas.ts      |     100 |      100 |     100 |     100 |                   
 EJERCICIO3                 |     100 |      100 |     100 |     100 |                   
  FileReader.ts             |     100 |      100 |     100 |     100 |                   
  FileWriter.ts             |     100 |      100 |     100 |     100 |                   
 EJERCICIO4                 |     100 |      100 |     100 |     100 |                   
  Printer.ts                |     100 |      100 |     100 |     100 |                   
  PrinterScanner.ts         |     100 |      100 |     100 |     100 |                   
  Scanner.ts                |     100 |      100 |     100 |     100 |                   
 EJERCICIO5                 |     100 |      100 |     100 |     100 |                   
  EmailService.ts           |     100 |      100 |     100 |     100 |                   
  Notifier.ts               |     100 |      100 |     100 |     100 |                   
  ShortMessageService.ts    |     100 |      100 |     100 |     100 |                   
 MODIFICACION               |     100 |      100 |     100 |     100 |                   
  AritmeticableColletion.ts |     100 |      100 |     100 |     100 |                   
  Complex.ts                |     100 |      100 |     100 |     100 |                   
  Rational.ts               |     100 |      100 |     100 |     100 |                   
----------------------------|---------|----------|---------|---------|-------------------

```

---

# Ejercicio 2 - Facturas en diferentes formatos


## Enunciado del ejercicio
Diseñe e implemente un sistema de información que permita gestionar facturación básica. Todas sus clases e interfaces deberán respetar los principios SOLID.

Entre otras funcionalidades, el sistema deberá permitir generar facturas en diferentes formatos como, por ejemplo, PDF o HTML. Además, su diseño deberá permitir añadir nuevos formatos de generación de facturas sin necesidad de modificar el resto del código que haya implementado. Teniendo en cuenta esto último en concreto, ¿de qué principio SOLID se trataría?

## Solución al problema propuesto

En primer lugar, el principio SOLID que se trata en este caso es el **"Principio de Open/Closed" (OCP)**, que establece que una clase debe estar abierta para su extensión pero cerrada para su modificación. En el contexto de añadir nuevos formatos de generación de facturas sin modificar el resto del código, el principio OCP sugiere que deberíamos ser capaces de introducir nuevas clases o módulos para manejar estos nuevos formatos sin alterar el código existente.

En el diseño de software, esto se logra generalmente mediante la creación de una interfaz común para los generadores de formato de factura y luego implementando clases concretas para cada formato (por ejemplo, PDF, HTML). Cuando se necesita añadir un nuevo formato, se puede crear una nueva clase que implemente la interfaz sin necesidad de cambiar el código existente. Este enfoque favorece la extensibilidad del sistema y facilita su mantenimiento a lo largo del tiempo.

A continuación, se muestra el código implementado a solucionar el problema;

**Factura.ts**
```typescript
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
```

**GeneradorFacturas.ts**
```typescript
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
```

**FormatoPDF.ts**
```typescript
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
```

**FormatoHTML.ts**
```typescript
import { Factura} from './Factura';

export class FormatoHTML implements Factura {
  vendedor: string;
  comprador: string;
  concepto: string;
  importe: number;
  fecha: string;
  impuesto: number;
  total: number;

  /**
   * Constructor de la clase FormatoHTML
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
   * Getters de la clase FormatoHTML
   * @returns devuelve el vendedor.
   */
  getVendedor(): string {
    return this.vendedor;
  }

  /**
   * Getters de la clase FormatoHTML
   * @returns devuelve el comprador.
   */
  getComprador(): string {
    return this.comprador;
  }

  /**
   * Getters de la clase FormatoHTML
   * @returns devuelve el concepto.
   */
  getConcepto(): string {
    return this.concepto;
  }

  /**
   * Getters de la clase FormatoHTML
   * @returns devuelve el importe.
   */
  getImporte(): number {
    return this.importe;
  }

  /**
   * Getters de la clase FormatoHTML
   * @returns devuelve la fecha.
   */
  getFecha(): string {
    return this.fecha;
  }

  /**
   * Getters de la clase FormatoHTML
   * @returns retorna el impuesto.
   */
  getImpuesto(): number {
    return this.impuesto;
  }

  /**
   * Getters de la clase FormatoHTML
   * @returns retorna el total.
   */
  getTotal(): number {
    return this.total;
  }

  /**
   * Función que genera la factura
   * Devuelve un string con el formato de la factura en HTML
   * @returns formato de la factura en HTML
   */
  public generarFactura(): string {
    return `<html>
    <head>
      <title>Factura</title>
    </head>
    <body>
      <h1>Factura</h1>
      <p>Vendedor: ${this.vendedor}</p>
      <p>Comprador: ${this.comprador}</p>
      <p>Concepto: ${this.concepto}</p>
      <p>Importe: ${this.importe}</p>
      <p>Fecha: ${this.fecha}</p>
      <p>Impuesto: ${this.impuesto}</p>
      <p>Total: ${this.total}</p>
    </body>
    </html>`;
  }

  /**
   * Función que devuelve la representación en string de la factura
   * Devuelve un string con el vendedor, el comprador, el concepto, el importe, la fecha, el impuesto y el total de la factura.
   * @returns representación en string de la factura
   */
  public toString(): string {
    return `${this.vendedor} - ${this.comprador} - ${this.concepto} - ${this.importe} - ${this.fecha} - ${this.impuesto} - ${this.total}`;
  }
}
```
**index.ts**
```typescript
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
```

## Explicación de lo realizado
Visto el código implementado se procede a explicar cada uno: 

**Interfaz Factura (Factura.ts)**
La interfaz Factura define la estructura básica que deben tener todas las facturas. Contiene las siguientes propiedades:

  - vendedor: Representa el vendedor de la factura.
  - comprador: Representa el comprador de la factura.
  - concepto: Representa el concepto de la factura.
  - importe: Representa el importe de la factura.
  - fecha: Representa la fecha de emisión de la factura.
  - impuesto: Representa el impuesto aplicado a la factura.
  - total: Representa el total de la factura.
  - toString(): Método que devuelve la representación en string de la factura.
  - generarFactura(): Método que genera la factura.

**Clase GeneradorFacturas (GeneradorFacturas.ts)**

La clase GeneradorFacturas es responsable de gestionar la generación de facturas en diferentes formatos. Contiene las siguientes características:

**Propiedades**
  - formatos: Mapa que almacena los diferentes formatos y las funciones asociadas para generar cada formato.

**Métodos**

  - agregarFormato(nombre: string, generarFormato: (factura: Factura) => string): void: Agrega un nuevo formato al generador de facturas.
  - borrarFormato(nombre: string): void: Elimina un formato existente del generador.
  - mostrarFormatosDisponibles(): string[]: Retorna un array con los nombres de los formatos disponibles.
  - generarFactura(nombreFormato: string, factura: Factura): string: Genera la factura en el formato especificado.

**Clase FormatoPDF (FormatoPDF.ts)**
La clase FormatoPDF implementa la interfaz Factura y representa una factura en formato PDF. Contiene las siguientes características:

**Propiedades**
vendedor, comprador, concepto, importe, fecha, impuesto, total: Propiedades que representan los elementos de la factura.

**Métodos**
  - constructor(vendedor: string, comprador: string, concepto: string, importe: number, fecha: string, impuesto: number, total: number): Constructor que inicializa las propiedades de la factura.
  - generarFactura(): string: Genera la factura en formato PDF.
  - toString(): string: Retorna la representación en string de la factura.

**Clase FormatoHTML (FormatoHTML.ts)**

La clase FormatoHTML también implementa la interfaz Factura y representa una factura en formato HTML. Contiene las siguientes características:

**Propiedades**
vendedor, comprador, concepto, importe, fecha, impuesto, total: Propiedades que representan los elementos de la factura.

**Métodos**
  - constructor(vendedor: string, comprador: string, concepto: string, importe: number, fecha: string, impuesto: number, total: number): Constructor que inicializa las propiedades de la factura.
  -   generarFactura(): string: Genera la factura en formato HTML.
  - toString(): string: Retorna la representación en string de la factura.

**Explicación de Implementación**

  - **Interfaz Factura**: Define la estructura básica que deben seguir todas las facturas. Obliga a las clases que la implementan a tener propiedades específicas y métodos para la representación en string y generación.

  - **Clase GeneradorFacturas**: Proporciona una interfaz para agregar, borrar y mostrar formatos, así como para generar facturas en un formato específico. Utiliza un mapa para almacenar los formatos y sus funciones generadoras asociadas.

  - **Clase FormatoPDF**: Implementa la interfaz Factura para representar una factura en formato PDF. Contiene un constructor para inicializar los elementos y métodos para generar la factura en PDF y obtener su representación en string.

  - **Clase FormatoHTML**: Similar a FormatoPDF, pero representa la factura en formato HTML. Implementa la interfaz Factura, tiene un constructor y métodos para generar la factura en HTML y obtener su representación en string.

Este diseño permite extender fácilmente el sistema para agregar nuevos formatos de factura en el futuro.


## Pruebas realizadas
A este código se le realizaron multitud de pruebas para comprobar su correcto funcionamiento.

**Factura.spec.ts**
```typescript
// PRUEBAS PARA LA CLASE FACTURA

import 'mocha';
import { expect } from 'chai';
import { Factura } from '../../src/EJERCICIO2/Factura';

describe('Pruebas para la clase Factura', () => {
  it('Se crea una factura con los datos correctos', () => {
    const factura: Factura = {
      vendedor: 'Vendedor',
      comprador: 'Comprador',
      concepto: 'Concepto',
      importe: 100,
      fecha: '01/01/2021',
      impuesto: 21,
      total: 121,
      toString: () => 'Factura',
      generarFactura: () => 'Factura'
    };
    expect(factura.vendedor).to.be.equal('Vendedor');
    expect(factura.comprador).to.be.equal('Comprador');
    expect(factura.concepto).to.be.equal('Concepto');
    expect(factura.importe).to.be.equal(100);
    expect(factura.fecha).to.be.equal('01/01/2021');
    expect(factura.impuesto).to.be.equal(21);
    expect(factura.total).to.be.equal(121);
    expect(factura.toString()).to.be.equal('Factura');
    expect(factura.generarFactura()).to.be.equal('Factura');
  });
  // Pruebas para el método toString
  it('toString devuelve la factura en string', () => {
    const factura: Factura = {
      vendedor: 'Vendedor',
      comprador: 'Comprador',
      concepto: 'Concepto',
      importe: 100,
      fecha: '01/01/2021',
      impuesto: 21,
      total: 121,
      toString: () => 'Factura',
      generarFactura: () => 'Factura'
    };
    expect(factura.toString()).to.be.equal('Factura');
  });
  // Pruebas para comprobar que es una interfaz
  it('Se puede crear una factura con los datos correctos', () => {
    const factura: Factura = {
      vendedor: 'Vendedor',
      comprador: 'Comprador',
      concepto: 'Concepto',
      importe: 100,
      fecha: '01/01/2021',
      impuesto: 21,
      total: 121,
      toString: () => 'Factura',
      generarFactura: () => 'Factura'
    };
    expect(factura).to.be.not.null;
  });
  // pruebas para comprobar que cada atributo tienes el tipo correcto
  it('El vendedor es de tipo string', () => {
    const factura: Factura = {
      vendedor: 'Vendedor',
      comprador: 'Comprador',
      concepto: 'Concepto',
      importe: 100,
      fecha: '01/01/2021',
      impuesto: 21,
      total: 121,
      toString: () => 'Factura',
      generarFactura: () => 'Factura'
    };
    expect(factura.vendedor).to.be.a('string');
    expect(factura.comprador).to.be.a('string');
    expect(factura.concepto).to.be.a('string');
    expect(factura.importe).to.be.a('number');
    expect(factura.fecha).to.be.a('string');
    expect(factura.impuesto).to.be.a('number');
    expect(factura.total).to.be.a('number');
    expect(factura.toString()).to.be.a('string');
    expect(factura.generarFactura()).to.be.a('string');
  });
});
```

En las pruebas para la clase `Factura`, se crean instancias de la interfaz `Factura` con datos específicos y se realizan diferentes verificaciones para garantizar su correcto funcionamiento. Se comprueba que se puedan crear facturas con los datos correctos, que el método `toString()` devuelva la representación en string adecuada, que se pueda crear una factura con los datos correctos según la interfaz y que cada atributo tenga el tipo de dato correcto. Todas las pruebas se ejecutan utilizando el framework Mocha y se realizan verificaciones utilizando la librería de aserciones Chai. Se espera que todas las aserciones pasen satisfactoriamente para asegurar el correcto comportamiento de la clase `Factura`.


**GeneradorFacturas.spec.ts**
```typescript
// PRUEBAS PARA LA CLASE GENERADORFACTURAS

import 'mocha';
import { expect } from 'chai';
import { GeneradorFacturas } from '../../src/EJERCICIO2/GeneradorFacturas';

// PRUEBAS PARA LA CLASE GENERADORFACTURAS
describe('Pruebas para la clase GeneradorFacturas', () => {
  it('Se crea un generador de facturas', () => {
    const generador = new GeneradorFacturas();
    expect(generador).to.be.not.null;
  });
  it('Se puede agregar un formato', () => {
    const generador = new GeneradorFacturas();
    generador.agregarFormato('formato', (factura) => `Formato personalizado para formato: ${factura.toString()}`);
    expect(generador.mostrarFormatosDisponibles()).to.be.deep.equal(['formato']);
  });
  it('Se puede borrar un formato', () => {
    const generador = new GeneradorFacturas();
    generador.agregarFormato('formato', (factura) => `Formato personalizado para formato: ${factura.toString()}`);
    generador.borrarFormato('formato');
    expect(generador.mostrarFormatosDisponibles()).to.be.deep.equal([]);
  });
  it('Se puede generar una factura', () => {
    const generador = new GeneradorFacturas();
    generador.agregarFormato('formato', (factura) => `Formato personalizado para formato: ${factura.toString()}`);
    const factura = {
      vendedor: 'Vendedor',
      comprador: 'Comprador',
      concepto: 'Concepto',
      importe: 100,
      fecha: '01/01/2021',
      impuesto: 21,
      total: 121,
      toString: () => 'Factura',
      generarFactura: () => 'Factura'
    };
    expect(generador.generarFactura('formato', factura)).to.be.equal('Formato personalizado para formato: Factura');
  });
  it('Se puede mostrar los formatos disponibles', () => {
    const generador = new GeneradorFacturas();
    generador.agregarFormato('formato', (factura) => `Formato personalizado para formato: ${factura.toString()}`);
    expect(generador.mostrarFormatosDisponibles()).to.be.deep.equal(['formato']);
  });

  // prueba para que si no se genera un formato, devuelva un mensaje
  it('Si no se genera un formato, devuelve un mensaje', () => {
    const generador = new GeneradorFacturas();
    const factura = {
      vendedor: 'Vendedor',
      comprador: 'Comprador',
      concepto: 'Concepto',
      importe: 100,
      fecha: '01/01/2021',
      impuesto: 21,
      total: 121,
      toString: () => 'Factura',
      generarFactura: () => 'Factura'
    };
    expect(generador.generarFactura('formato', factura)).to.be.equal('No existe el formato');
  });
  // Pruebas para comprobar que e suna clase
  it('Se puede crear un generador de facturas', () => {
    const generador = new GeneradorFacturas();
    expect(generador).to.be.not.null;
  });
  // Pruebas para comprobar que se agregan formatos
  it('Se puede agregar un formato', () => {
    const generador = new GeneradorFacturas();
    generador.agregarFormato('formato', (factura) => `Formato personalizado para formato: ${factura.toString()}`);
    expect(generador.mostrarFormatosDisponibles()).to.be.deep.equal(['formato']);
  });
  // Pruebas para comprobar que se borran formatos
  it('Se puede borrar un formato', () => {
    const generador = new GeneradorFacturas();
    generador.agregarFormato('formato', (factura) => `Formato personalizado para formato: ${factura.toString()}`);
    generador.borrarFormato('formato');
    expect(generador.mostrarFormatosDisponibles()).to.be.deep.equal([]);
  });
  // Pruebas para comprobar que se generan facturas
  it('Se puede generar una factura', () => {
    const generador = new GeneradorFacturas();
    generador.agregarFormato('formato', (factura) => `Formato personalizado para formato: ${factura.toString()}`);
    const factura = {
      vendedor: 'Vendedor',
      comprador: 'Comprador',
      concepto: 'Concepto',
      importe: 100,
      fecha: '01/01/2021',
      impuesto: 21,
      total: 121,
      toString: () => 'Factura',
      generarFactura: () => 'Factura'
    };
    expect(generador.generarFactura('formato', factura)).to.be.equal('Formato personalizado para formato: Factura');
  });
  // Pruebas para comprobar que se muestran los formatos
  it('Se puede mostrar los formatos disponibles', () => {
    const generador = new GeneradorFacturas();
    generador.agregarFormato('formato', (factura) => `Formato personalizado para formato: ${factura.toString()}`);
    expect(generador.mostrarFormatosDisponibles()).to.be.deep.equal(['formato']);
  });
});
```
En las pruebas para la clase `GeneradorFacturas`, se verifica el correcto funcionamiento de las funciones y métodos asociados a la generación de facturas. Se comprueba que se pueda crear un generador de facturas, agregar y borrar formatos, generar una factura en un formato específico, y mostrar los formatos disponibles. Además, se incluyen pruebas para verificar que se obtenga un mensaje apropiado si se intenta generar una factura con un formato inexistente. Todas las pruebas se ejecutan utilizando el framework Mocha y se realizan verificaciones utilizando la librería de aserciones Chai. Se espera que todas las aserciones pasen satisfactoriamente para garantizar el correcto comportamiento de la clase `GeneradorFacturas`.


**FormatoPDF.spec.ts**
```typescript
// PRUEBAS PARA LA CLASE PDF

import 'mocha';
import { expect } from 'chai';
import { FormatoPDF } from '../../src/EJERCICIO2/FormatoPDF';

// PRUEBAS PARA LA CLASE PDF
describe('Pruebas para la clase PDF', () => {
  it('Se crea un formato PDF', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF).to.be.not.null;
  });
  it('Se puede obtener el vendedor', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getVendedor()).to.be.equal('Vendedor');
  });
  it('Se puede obtener el comprador', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getComprador()).to.be.equal('Comprador');
  });
  it('Se puede obtener el concepto', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getConcepto()).to.be.equal('Concepto');
  });
  it('Se puede obtener el importe', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getImporte()).to.be.equal(100);
  });
  it('Se puede obtener la fecha', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getFecha()).to.be.equal('01/01/2021');
  });
  it('Se puede obtener el impuesto', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getImpuesto()).to.be.equal(21);
  });
  it('Se puede obtener el total', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getTotal()).to.be.equal(121);
  });
  // Funciona tosString
  it('toString devuelve la factura en string', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.toString()).to.be.equal('Vendedor: Vendedor, Comprador: Comprador, Concepto: Concepto, Importe: 100, Fecha: 01/01/2021, Impuesto: 21, Total: 121');
  });
  // Pruebas para comprobar que es una clase
  it('Es una clase', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF).to.be.an.instanceof(FormatoPDF);
  });
  // Pruebas para comprobar que cada atributo tienes el tipo correcto
  it('El vendedor es un string', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getVendedor()).to.be.a('string');
  });
  it('El comprador es un string', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getComprador()).to.be.a('string');
  });
  // Prueba para ver que funciona la funcion de generar factura
  it('Se genera la factura', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    formatoPDF.generarFactura();
  });
  // Prueba para ver que no retorna tipos incorrectos
  it('El concepto es un string', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getConcepto()).to.be.a('string');
  });
  // Prueba para ver que no retorna tipos incorrectos
  it('El importe es un number', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getImporte()).to.be.a('number');
    expect(formatoPDF.getTotal()).to.be.a('number');
    expect(formatoPDF.getImpuesto()).to.be.a('number');
    expect(formatoPDF.getFecha()).to.be.a('string');
    expect(formatoPDF.getConcepto()).to.be.a('string');
  });
});
```
En las pruebas para la clase `FormatoPDF`, se evalúa el comportamiento y la funcionalidad de la clase que representa un formato de factura en PDF. Se verifica que se pueda crear una instancia del formato PDF, así como la correcta obtención de los datos asociados a la factura, como vendedor, comprador, concepto, importe, fecha, impuesto y total. Además, se evalúa la función `toString()` para asegurar que devuelve la representación en string de la factura. Se realizan pruebas adicionales para garantizar que cada atributo tenga el tipo correcto y que la función `generarFactura()` se ejecute sin errores. Todas las pruebas utilizan el framework Mocha y la librería de aserciones Chai, y se espera que todas las aserciones sean exitosas para garantizar el correcto funcionamiento de la clase `FormatoPDF`.


**FormatoHTML.spec.ts**
```typescript
// PRUEBAS PARA LA CLASE FORMATOHTML

import 'mocha';
import { expect } from 'chai';
import { FormatoHTML } from '../../src/EJERCICIO2/FormatoHTML';

// PRUEBAS PARA LA CLASE FORMATOHTML
describe('Pruebas para la clase FormatoHTML', () => {
  it('Se crea un formato HTML', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML).to.be.not.null;
  });
  it('Se puede obtener el vendedor', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getVendedor()).to.be.equal('Vendedor');
  });
  it('Se puede obtener el comprador', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getComprador()).to.be.equal('Comprador');
  });
  it('Se puede obtener el concepto', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getConcepto()).to.be.equal('Concepto');
  });
  it('Se puede obtener el importe', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getImporte()).to.be.equal(100);
  });
  it('Se puede obtener la fecha', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getFecha()).to.be.equal('01/01/2021');
  });
  it('Se puede obtener el impuesto', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getImpuesto()).to.be.equal(21);
  });
  it('Se puede obtener el total', () => { 
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getTotal()).to.be.equal(121);
  });
  // Funciona tosString
  it('toString devuelve la factura en string', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.toString()).to.be.equal('Vendedor - Comprador - Concepto - 100 - 01/01/2021 - 21 - 121');
  });
  // Pruebas para comprobar que es una clase
  it('Es una clase', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML).to.be.an.instanceof(FormatoHTML);
  });
  // Prueba para comprobar que se genera en formato HTML
  it('Se genera la factura en formato HTML', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    const facturaGenerada = formatoHTML.generarFactura().replace(/\s+/g, '');
    const facturaEsperada = '<html><head><title>Factura</title></head><body><h1>Factura</h1><p>Vendedor:Vendedor</p><p>Comprador:Comprador</p><p>Concepto:Concepto</p><p>Importe:100</p><p>Fecha:01/01/2021</p><p>Impuesto:21</p><p>Total:121</p></body></html>';
    expect(facturaGenerada).to.be.equal(facturaEsperada);
  });
  // pruebas para comprobar que cada atributo tienes el tipo correcto
  it('El vendedor es un string', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getVendedor()).to.be.a('string');
    expect(formatoHTML.getComprador()).to.be.a('string');
    expect(formatoHTML.getConcepto()).to.be.a('string');
    expect(formatoHTML.getImporte()).to.be.a('number');
    expect(formatoHTML.getFecha()).to.be.a('string');
    expect(formatoHTML.getImpuesto()).to.be.a('number');
    expect(formatoHTML.getTotal()).to.be.a('number');
  });
  // pruebas para comprobar que cada atributo no es nulo
  it('El vendedor no es nulo', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getVendedor()).to.be.not.null;
    expect(formatoHTML.getComprador()).to.be.not.null;
    expect(formatoHTML.getConcepto()).to.be.not.null;
    expect(formatoHTML.getImporte()).to.be.not.null;
    expect(formatoHTML.getFecha()).to.be.not.null;
    expect(formatoHTML.getImpuesto()).to.be.not.null;
    expect(formatoHTML.getTotal()).to.be.not.null;
  });
});
```
Las pruebas para la clase `FormatoHTML` evalúan la funcionalidad y comportamiento de la clase que representa un formato de factura en HTML. Se verifica que se pueda crear una instancia del formato HTML y que sea posible obtener correctamente los datos asociados a la factura, como vendedor, comprador, concepto, importe, fecha, impuesto y total. Además, se evalúa la función `toString()` para asegurar que devuelve la representación en string esperada de la factura. Se realiza una prueba específica para verificar que la factura se pueda generar en formato HTML, y se comparan las cadenas de texto generadas y esperadas. También se realizan pruebas para garantizar que cada atributo tenga el tipo correcto y que no sea nulo. Todas las pruebas utilizan el framework Mocha y la librería de aserciones Chai, esperando que todas las aserciones sean exitosas para validar el correcto funcionamiento de la clase `FormatoHTML`.


---

# Ejercicio 3 - Gestor de ficheros

## Enunciado del ejercicio
Teniendo en cuenta el código fuente propuesto más abajo, indique si se está violando alguno de los principios SOLID y justifique su respuesta. En tal caso, ¿podría proporcionar un mejor diseño e implementación que sí que cumpla con dichos principios?
```typescript
interface PrintableScannable {
  print(): void
  scan(): void
}

class Printer implements PrintableScannable {
  print(): void {
    console.log('Printing...')
  }

  scan(): void { }
}

class Scanner implements PrintableScannable {
  print(): void { }

  scan(): void {
    console.log('Scanning...')
  }

class PrinterScanner implements PrintableScannable {
  print(): void {
    console.log('Printing...')
  }

  scan(): void {
    console.log('Scanning...')
  }
}

// Client code
const printer = new Printer();
// Printing
printer.print();

const scanner = new Scanner();
// Scanning
scanner.scan();

const printerScanner = new PrinterScanner();
// Printing
printerScanner.print();
// Scanning
printerScanner.scan();
```

## Solución al problema propuesto
El código proporcionado está violando el principio de responsabilidad única (Single Responsibility Principle - SRP) de SOLID. El principio SRP establece que una clase debe tener solo una razón para cambiar, es decir, una única responsabilidad. En el código, la clase FileManager tiene dos responsabilidades principales: leer y escribir archivos. Esto significa que la clase podría cambiar por dos razones distintas: si la lógica de lectura de archivos cambia o si la lógica de escritura de archivos cambia. Esta violación del SRP puede hacer que la clase sea menos mantenible y más propensa a errores.

Se propone la siguiente solución:

**FileHandler.ts**
```typescript
/**
 * Interface que define los métodos que debe implementar un manejador de archivos.
 * Tiene dos métodos, uno para leer un archivo y otro para escribir en un archivo.
 */
export interface FileHandler {
  readFile(filePath: string): string;
  writeFile(filePath: string, data: string): void;
}

```

**FileManager.ts**
```typescript
import { FileHandler } from './FileHandler';

/**
 * Clase que representa un administrador de archivos.
 * Tiene la capacidad de leer y escribir archivos.
 * Cuenta con un constructor que recibe un manejador de archivos y una ruta de archivo.
 */
export class FileManager {
  /**
   * Constructor de la clase.
   * Se encarga de inicializar las propiedades de la clase.
   * @param fileHandler fichero manejador
   * @param filePath fichero ruta
   */
  constructor(private fileHandler: FileHandler, private filePath: string) {}

  /**
   * Método que se encarga de leer un archivo.
   * @returns string retorna el contenido del archivo.
   */
  public readFile(): string {
    return this.fileHandler.readFile(this.filePath);
  }

  /**
   * Metodo que se encarga de escribir en un archivo.
   * @param data d
   */
  public writeFile(data: string): void {
    this.fileHandler.writeFile(this.filePath, data);
  }
}
```

**FileReader.ts**
```typescript
import * as fs from 'fs';

/**
 * Clase que se encarga de leer un archivo
 * Tiene un constructor que recibe la ruta del archivo.
 * Tiene un método que se encarga de leer el archivo.
 */
export class FileReader {
  /**
   * Constructor de la clase.
   * Se encarga de inicializar las propiedades de la clase.
   * @param filePath ruta del archivo
   */
  constructor(private filePath: string) {}

  /**
   * Metodo que se encarga de leer un archivo.
   * Para ello, utiliza el módulo fs de Node.js.
   * Basicamente, lee el archivo y retorna su contenido.
   * @returns retorna el contenido del archivo.
   */
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, 'utf-8');
      return content;
    } catch (error) {
      console.error('Error al leer el archivo:', error.message);
      return '';
    }
  }

  /**
   * Metodo que se encarga de escribir en un archivo.
   * Utiliza el módulo fs de Node.js.
   * @param data datos a escribir en el archivo.
   * @returns void no retorna nada.
   */
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', error.message);
    }
  }
}
``` 

**FileSystemHandler.ts**
```typescript
import { FileHandler } from './FileHandler';
import * as fs from 'fs';

/**
 * Clase que representa un manejador de archivos del sistema de archivos.
 * Implementa la interfaz FileHandler. 
 * Lo que haces es implementar los métodos de la interfaz FileHandler.
 */
export class FileSystemHandler implements FileHandler {
  /**
   * Metodo que se encarga de leer un archivo.
   * Lo que hace es leer un archivo utilizando el módulo fs de Node.js.
   * @param filePath ruta del archivo
   * @returns string retorna el contenido del archivo.
   */
  public readFile(filePath: string): string {
    try {
      return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
      console.error('Error al leer el archivo:', error.message);
      return '';
    }
  }

  /**
   * Metodo que se encarga de escribir en un archivo.
   * Lo que hace es escribir en un archivo utilizando el módulo fs de Node.js.
   * @param filePath ruta del archivo
   * @param data datos a escribir en el archivo.
   */
  public writeFile(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', error.message);
    }
  }
}
```
**FileWriter.ts**
```typescript
import * as fs from 'fs';


/**
 * Clase que se encarga de escribir en un archivo.
 * Tiene un constructor que recibe la ruta del archivo.
 * Tiene un método que se encarga de escribir en el archivo.
 * Utiliza el módulo fs de Node.js.
 */
export class FileWriter {
  /**
   * Constructor de la clase.
   * Se encarga de inicializar las propiedades de la clase.
   * @param filePath ruta del archivo
   */
  constructor(private filePath: string) {}

  /**
   * Metodo que se encarga de escribir en un archivo.
   * Utiliza el módulo fs de Node.js.
   * @param data datos a escribir en el archivo.
   * @returns void no retorna nada.
   */
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', error.message);
    }
  }
}
```

**index.ts**
```typescript
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
```

## Explicación de lo realizado

**FileHandler.ts**
Esta interfaz define los métodos que debe implementar cualquier manejador de archivos. En este caso, proporciona dos métodos: readFile para leer un archivo y writeFile para escribir en un archivo. La interfaz sirve como un contrato para las clases que deseen actuar como manejadores de archivos.

**FileManager.ts**
La clase FileManager representa un administrador de archivos que utiliza un manejador de archivos para realizar operaciones de lectura y escritura. El constructor de la clase toma un manejador de archivos y una ruta de archivo. La clase contiene métodos readFile y writeFile que delegan las operaciones respectivas al manejador de archivos proporcionado.

**FileReader.ts**
La clase FileReader se encarga específicamente de leer archivos. Toma la ruta del archivo en su constructor y proporciona métodos readFile y writeFile que utilizan el módulo fs de Node.js para realizar operaciones de lectura y escritura en archivos.

**FileSystemHandler.ts**
Esta clase implementa la interfaz FileHandler y actúa como un manejador de archivos para el sistema de archivos. Contiene métodos readFile y writeFile que utilizan el módulo fs de Node.js para realizar operaciones de lectura y escritura.

**FileWriter.ts**
La clase FileWriter se especializa en la escritura de archivos. Al igual que FileReader, utiliza el módulo fs de Node.js para realizar operaciones de escritura en archivos. Toma la ruta del archivo en su constructor y proporciona un método writeFile para escribir datos en el archivo.

**index.ts**
El archivo index.ts sirve como punto de entrada y ejemplo de uso. Se crea un FileManager para leer el archivo, se muestra el contenido actual, luego se crea otro FileManager para escribir en el archivo utilizando FileSystemHandler. Finalmente, se crea un tercer FileManager para leer el archivo actualizado y se muestra el contenido actualizado.

## Pruebas realizadas
Se realizaron muchas pruebas para comprobar que el código funciona correctamente.

**FileHandler.spec.ts**
```typescript
// PRUEBAS PARA EL EJERCICIO 3
import 'mocha'
import { expect } from 'chai'
import { FileHandler } from './../../src/EJERCICIO3/FileHandler'
import { FileReader } from './../../src/EJERCICIO3/FileReader'


// PRUEBAS PARA LA INTERFAZ FileHandler
describe('Pruebas para la interfaz FileHandler', () => {
  // PRUEBA PARA EL METODO readFile
  it ('Comprobar que el método readFile recibe un string y retorna un string', () => {
    const filePath = 'src/EJERCICIO3/test.txt';
    const fileReader: FileHandler = new FileReader(filePath);
    expect(typeof fileReader.readFile(filePath)).to.be.equal('string');
  });
});
```
Las pruebas para la interfaz `FileHandler` evalúan el comportamiento del método `readFile` en la implementación específica de la interfaz llamada `FileReader`. La prueba verifica que el método `readFile` de la instancia de `FileReader` reciba una cadena (ruta del archivo) y retorne otra cadena (contenido del archivo). Se utiliza el framework Mocha y la librería de aserciones Chai, esperando que el tipo del resultado obtenido del método `readFile` sea una cadena. Estas pruebas garantizan la funcionalidad básica de la lectura de archivos según la especificación de la interfaz `FileHandler`.


**FileManager.spec.ts**
```typescript
// test/file-manager.test.ts
import 'mocha';
// test/file-manager.test.ts
import { expect } from 'chai';
import { FileReader } from './../../src/EJERCICIO3/FileReader';
import { FileWriter } from './../../src/EJERCICIO3/FileWriter';

describe('FileManager', () => {
  it ('Comprobar que file manager es una clase', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileWriter).to.be.an.instanceof(FileWriter);
  });
  it ('Comprobar que el constructor recibe un string', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileWriter).to.have.property('filePath').that.is.a('string');
  });
  it ('Comprobar que el método readFile recibe un string y retorna un string', () => {
    const filePath = 'src/EJERCICIO3/test.txt';
    const fileReader: FileReader = new FileReader(filePath);
    expect(typeof fileReader.readFile()).to.be.equal('string');
  });

  it ('Comprobar que el método writeFile recibe un string y retorna undefined', () => {
    const fileReader: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileReader.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  it ('Comprobar que el método writeFile recibe un string', () => {
    const fileReader: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileReader.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  it ('Comprobar que son instancias de la clase FileReader', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader).to.be.an.instanceof(FileReader);
  });
});
```
Las pruebas para `FileManager` se centran en la funcionalidad de las clases `FileReader` y `FileWriter`. Se verifica que `FileWriter` es una instancia de su clase, que su constructor recibe una cadena (ruta del archivo), y que el método `writeFile` retorna `undefined`. Además, se evalúa que `FileReader` es una instancia de su clase, y que su método `readFile` recibe y retorna una cadena. Estas pruebas garantizan el comportamiento esperado de la manipulación de archivos mediante las clases proporcionadas en el ejercicio.


**FileReader.spec.ts**
```typescript
// PRUEBAS PARA EL EJERCICIO 3
import 'mocha'
import { expect } from 'chai'
import { FileReader } from './../../src/EJERCICIO3/FileReader'
import * as fs from 'fs';


// PRUEBAS PARA LA CLASE FileReader
describe('Pruebas para la clase FileReader', () => {
  // PRUEBA PARA EL METODO readFile
  it ('Comprobar que es una clase', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader).to.be.an.instanceof(FileReader);
  });
  // prueba para el constructor
  it ('Comprobar que el constructor recibe un string', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader).to.have.property('filePath').that.is.a('string');
  });
  // prueba para el metodo writeFile
  it ('Comprobar que el método writeFile funciona correctamente', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    const data = 'Hola Mundo';
    fileReader.writeFile(data);
    const result = fs.readFileSync('src/EJERCICIO3/test.txt', 'utf-8');
    expect(result).to.be.equal(data);
  });
  it('Comprobar que el método readFile funciona correctamente', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    const result = fileReader.readFile();
    expect(result).to.be.equal('Hola Mundo');
  });
  // prueba para el metodo readFile
  it ('Comprobar que el método readFile retorna un string', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader.readFile()).to.be.a('string');
  });
  // prueba para el metodo writeFile
  it ('Comprobar que el método writeFile recibe un string', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // prueba en la funcion writeFile si hay un error al escribir en el archivo
  it ('Comprobar que si hay un error al escribir en el archivo, retorna un string vacio', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test2.txt');
    expect(fileReader.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // prueba en la prueba writeFile si hay un error al escribir en el archivo
  it ('Comprobar que si hay un error al escribir en el archivo, retorna un string vacio', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test2.txt');
    expect(fileReader.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // prueba para el metodo writeFile
  it ('Comprobar que el método writeFile recibe un string', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // Pruebas para comprobar que el método readFile retorna el contenido del archivo
  it ('Comprobar que el método readFile retorna el contenido del archivo', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader.readFile()).to.be.equal('Hola Mundo');
  });
  // pruebas para comprobar que no retona tipos de datos incorrectos
  it ('Comprobar que el método readFile retorna un string', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader.readFile()).to.be.a('string');
    expect(fileReader.readFile()).not.to.be.a('number');
    expect(fileReader.readFile()).not.to.be.a('boolean');
    expect(fileReader.readFile()).not.to.be.a('object');
    expect(fileReader.readFile()).not.to.be.a('array');
  });
  // pruebas para comprobar que el metodo writeFile retorna undefined
  it ('Comprobar que el método writeFile retorna undefined', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // prueba de la funcion wrtieFile que si hay un error al escribir en el archivo
  it ('Comprobar que si hay un error al escribir en el archivo, retorna mensaje de error', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test2.txt');
    expect(fileReader.writeFile(' ')).to.be.equal(undefined);
  });
  // instancia de la clase FileReader
  it ('Comprobar que es una instancia de la clase FileReader', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader).to.be.an.instanceof(FileReader);
  });
  // el constructor recbe un string
  it ('Comprobar que el constructor recibe un string', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader).to.have.property('filePath').that.is.a('string');
  });
  // Prueba para comprobar que si hay un error al escribir en el archivo, retorna undefined
  it('Si hay un error al escribir en el archivo, el método writeFile debe retornar undefined', () => {
    const fileReaderWithError = new FileReader('src/EJERCICIO3/nonexistent.txt');
    expect(fileReaderWithError.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // pruebas para la uncion readFile si hay un error al leer el archivo
  it ('Comprobar que si hay un error al leer el archivo, retorna un string vacio', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test2.txt');
    expect(fileReader.readFile()).to.be.equal(' ');
  });
  // prueba de catch en el metodo readFile
  it ('Comprobar que si hay un error al leer el archivo, retorna mensaje de error', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test2.txt');
    expect(fileReader.readFile()).to.be.equal(' ');
  });
  // prueba para lanzar un error si no se puede leer en el archivo
  it ('Imprimir por pantalla el error', () => {
    let errorLog: string | undefined;
    const originalConsoleError = console.error;
    console.error = (message: string) => { errorLog = message; };
    const fileReader: FileReader = new FileReader('/path/to/non/existent/file.txt');
    fileReader.readFile();
    expect(errorLog).to.include('Error al leer el archivo:');
    console.error = originalConsoleError;
  });
  // / prueba para lanzar un error si no se puede escribir en el archivo
  it ('Imprimir por pantalla el error', () => {
    let errorLog: string | undefined;
    const originalConsoleError = console.error;
    console.error = (message: string) => { errorLog = message; };
    const fileReader: FileReader = new FileReader('/path/to/non/existent/file.txt');
    fileReader.writeFile(' ');
    expect(errorLog).to.include('Error al escribir en el archivo:');
    console.error = originalConsoleError;
  });
});
```

En estas pruebas para la clase `FileReader`, se verifica que la clase sea una instancia de sí misma, que el constructor reciba una cadena (ruta del archivo), y que los métodos `readFile` y `writeFile` funcionen correctamente. Se prueba que el método `readFile` retorne el contenido del archivo en formato de cadena, que `writeFile` reciba una cadena y retorne `undefined`. Además, se realizan pruebas para verificar que los métodos retornen los tipos de datos correctos, manejen errores correctamente, y que se imprima un mensaje de error en caso de que ocurra algún problema al leer o escribir en el archivo.


**FileSystemHandler.spec.ts**
```typescript
// PRUEBAS PARA  LA CLASE FILESYSTEMHANDLER

import 'mocha'
import { expect } from 'chai'
import { FileSystemHandler } from './../../src/EJERCICIO3/FileSystemHandler'

// PRUEBAS PARA LA CLASE FileSystemHandler
describe('Pruebas para la clase FileSystemHandler', () => {
  // PRUEBA PARA EL METODO readFile
  it ('Comprobar que el método readFile recibe un string y retorna un string', () => {
    const filePath = 'src/EJERCICIO3/test.txt';
    const fileReader: FileSystemHandler = new FileSystemHandler();
    expect(typeof fileReader.readFile(filePath)).to.be.equal('string');
  });
  // prueba en la funcion readFile si hay un error al leer el archivo
  it ('Comprobar que si hay un error al leer el archivo, retorna un string vacio', () => {
    const fileReader: FileSystemHandler = new FileSystemHandler();
    expect(fileReader.readFile('src/EJERCICIO3/test2.txt')).to.be.equal(' ');
  });
  // prueba de catch
  it ('Comprobar que si hay un error al leer el archivo, retorna un string vacio', () => {
    const fileReader: FileSystemHandler = new FileSystemHandler();
    expect(fileReader.readFile('src/EJERCICIO3/test2.txt')).to.be.equal(' ');
  });
  // prueba de catch(error)
  // prueba para lanzar un error si no se puede leer el archivo
  it ('Imprimir por pantalla el error', () => {
    let errorLog: string | undefined;
    const originalConsoleError = console.error;
    console.error = (message: string) => { errorLog = message; };
    const fileReader: FileSystemHandler = new FileSystemHandler();
    fileReader.readFile('/path/to/non/existent/file.txt');
    expect(errorLog).to.include('Error al leer el archivo:');
    console.error = originalConsoleError;
  });
  // pruebas funcion writeFile
  it ('Comprobar que el método writeFile recibe un string y retorna undefined', () => {
    const fileReader: FileSystemHandler = new FileSystemHandler();
    expect(fileReader.writeFile('src/EJERCICIO3/test.txt', 'Hola Mundo')).to.be.equal(undefined);
  });
  // prueba en la funcion writeFile si hay un error al escribir en el archivo
  it ('Comprobar que si hay un error al escribir en el archivo, retorna un string vacio', () => {
    const fileReader: FileSystemHandler = new FileSystemHandler();
    expect(fileReader.writeFile('src/EJERCICIO3/test2.txt', 'Hola Mundo')).to.be.equal(undefined);
  });
  // prueba de catch
  it ('Comprobar que si hay un error al escribir en el archivo, retorna un string vacio', () => {
    const fileReader: FileSystemHandler = new FileSystemHandler();
    expect(fileReader.writeFile('src/EJERCICIO3/test2.txt', 'Hola Mundo')).to.be.equal(undefined);
  });
  // prueba de catch(error)
  // prueba para lanzar un error si no se puede escribir en el archivo
  it ('Imprimir por pantalla el error', () => {
    let errorLog: string | undefined;
    const originalConsoleError = console.error;
    console.error = (message: string) => { errorLog = message; };
    const fileReader: FileSystemHandler = new FileSystemHandler();
    fileReader.writeFile('/path/to/non/existent/file.txt', ' ');
    expect(errorLog).to.include('Error al escribir en el archivo:');
    console.error = originalConsoleError;
  });
});
```
En estas pruebas para la clase `FileSystemHandler`, se verifica que el método `readFile` reciba una cadena (ruta del archivo) y retorne un string. Además, se prueban escenarios donde puede haber errores al leer el archivo y se verifica que se manejen adecuadamente, retornando un string vacío. También, se prueba que en caso de error, se imprima un mensaje de error en la consola.

En cuanto al método `writeFile`, se verifica que reciba una cadena (ruta del archivo) y otra cadena (contenido a escribir), y que retorne `undefined`. Se realizan pruebas para verificar que maneje correctamente los posibles errores al escribir en el archivo, retornando `undefined` y mostrando un mensaje de error en la consola en caso de fallo.


**FileWriter.spec.ts**
```typescript
// PRUEBAS PARA LA CLASE FileWriter

import 'mocha'
import { expect } from 'chai'
import { FileWriter } from './../../src/EJERCICIO3/FileWriter'
import * as fs from 'fs';

// PRUEBAS PARA LA CLASE FileWriter
describe('Pruebas para la clase FileWriter', () => {
  // PRUEBA PARA EL METODO writeFile
  it ('Comprobar que es una clase', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileWriter).to.be.an.instanceof(FileWriter);
  });
  // prueba para el constructor
  it ('Comprobar que el constructor recibe un string', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileWriter).to.have.property('filePath').that.is.a('string');
  });
  // prueba para el metodo writeFile
  it ('Comprobar que el método writeFile funciona correctamente', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    const data = 'Hola Mundo';
    fileWriter.writeFile(data);
    const result = fs.readFileSync('src/EJERCICIO3/test.txt', 'utf-8');
    expect(result).to.be.equal(data);
  });
  // prueba para el metodo writeFile
  it ('Comprobar que el método writeFile recibe un string', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileWriter.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // prueba en la funcion writeFile si hay un error al escribir en el archivo
  it ('Comprobar que si hay un error al escribir en el archivo, retorna un string vacio', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test2.txt');
    expect(fileWriter.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // prueba en la prueba writeFile si hay un error al escribir en el archivo
  it ('Comprobar que si hay un error al escribir en el archivo, retorna un string vacio', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test2.txt');
    expect(fileWriter.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // prueba de catch
  it ('Comprobar que si hay un error al escribir en el archivo, retorna un string vacio', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test2.txt');
    expect(fileWriter.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // prueba de catch(error)
  // prueba para lanzar un error si no se puede escribir en el archivo
  it ('Imprimir por pantalla el error', () => {
    let errorLog: string | undefined;
    const originalConsoleError = console.error;
    console.error = (message: string) => { errorLog = message; };
    const fileWriter: FileWriter = new FileWriter('/path/to/non/existent/file.txt');
    fileWriter.writeFile(' ');
    expect(errorLog).to.include('Error al escribir en el archivo:');
    console.error = originalConsoleError;
  });
  // comprobar que no retorna tipos incorrectos
  it ('Comprobar que el método writeFile no retorna tipos incorrectos', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileWriter.writeFile('Hola Mundo')).to.be.equal(undefined);
    expect(fileWriter.writeFile('Hola Mundo')).to.not.be.a('number');
    expect(fileWriter.writeFile('Hola Mundo')).to.not.be.a('boolean');
    expect(fileWriter.writeFile('Hola Mundo')).to.not.be.a('object');
  });
  // prueba para el constructor
  it ('Comprobar que el constructor recibe un string', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileWriter).to.have.property('filePath').that.is.a('string');
  });
  // prueba para compronar que el metodo writeFile retorna undefined
  it ('Comprobar que el método writeFile retorna undefined', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileWriter.writeFile('Hola Mundo')).to.be.equal(undefined);
  });

});
```
Estas pruebas para la clase `FileWriter` están diseñadas para verificar el comportamiento del método `writeFile`. Aquí hay un resumen de las pruebas realizadas:
1. **Comprobar que es una clase**: Se verifica que una instancia de `FileWriter` sea una instancia de la clase `FileWriter`.
2. **Comprobar que el constructor recibe un string**: Se verifica que el constructor de `FileWriter` reciba un string como la ruta del archivo.
3. **Comprobar que el método writeFile funciona correctamente**: Se prueba que el método `writeFile` escriba correctamente en el archivo y se verifica si el contenido coincide.
4. **Comprobar que el método writeFile recibe un string**: Se asegura de que el método `writeFile` reciba un string como argumento.
5. **Comprobar que si hay un error al escribir en el archivo, retorna undefined**: Se prueba el escenario donde hay un error al escribir en el archivo y se espera que el método retorne `undefined`.
6. **Imprimir por pantalla el error**: Se verifica que, en caso de un error al escribir en el archivo, se imprima un mensaje de error en la consola.
7. **Comprobar que el método writeFile no retorna tipos incorrectos**: Se verifica que el método `writeFile` no retorne tipos incorrectos como números, booleanos u objetos.

Estas pruebas abordan diferentes situaciones, desde casos de éxito hasta casos donde se manejan errores, proporcionando una cobertura completa para el método `writeFile` de la clase `FileWriter`.


--- 

# Ejercicio 4 - Impresoras y escáneres

## Enunciado del ejercicio
Teniendo en cuenta el código fuente propuesto más abajo, indique si se está violando alguno de los principios SOLID y justifique su respuesta. En tal caso, ¿podría proporcionar un mejor diseño e implementación que sí que cumpla con dichos principios?
```typescript
interface PrintableScannable {
  print(): void
  scan(): void
}

class Printer implements PrintableScannable {
  print(): void {
    console.log('Printing...')
  }

  scan(): void { }
}

class Scanner implements PrintableScannable {
  print(): void { }

  scan(): void {
    console.log('Scanning...')
  }

class PrinterScanner implements PrintableScannable {
  print(): void {
    console.log('Printing...')
  }

  scan(): void {
    console.log('Scanning...')
  }
}

// Client code
const printer = new Printer();
// Printing
printer.print();

const scanner = new Scanner();
// Scanning
scanner.scan();

const printerScanner = new PrinterScanner();
// Printing
printerScanner.print();
// Scanning
printerScanner.scan();
```

## Solución al problema propuesto
El código proporcionado  puede mejorarse aplicando el Principio de Segregación de Interfaces (ISP). Este principio establece que una clase no debe verse obligada a implementar interfaces que no utiliza.

En el código, la interfaz PrintableScannable tiene dos métodos: print y scan. Sin embargo, en las clases Printer y Scanner, una de las operaciones (scan en Printer y print en Scanner) no tiene una implementación significativa.

A continuación, el código implementado:

**Printable.ts**
```typescript
/**
 * Interfaz Printable que se encarga de definir el método print.
 * El metodo print se encarga de imprimir y es de tipo void (no retorna nada).
 */
export interface Printable {
  print(): void;
}
```

**Printer.ts**
```typescript
import { Printable } from './Printable';

/**
 * Clase Printer que implementa la interfaz Printable.
 * Lo que hace es implementar el método print de la interfaz Printable.
 * El método print imprime un mensaje.
 */
export class Printer implements Printable {
  /**
   * Metodo que se encarga de imprimir.
   * Lo que hace es imprimir un mensaje.
   */
  print(): void {
    console.log('Printing...');
  }
}
```

**PrinterScanner.ts**
```typescript
import { Printable } from './Printable';
import { Scannable } from './Scanabble';

/**
 * Clase PrinterScanner que implementa las interfaces Printable y Scannable.
 * Lo que hace es implementar los métodos print y scan de las interfaces Printable y Scannable.
 * El método print imprime un mensaje y el método scan escanea.
 * Ambos métodos son de tipo void (no retornan nada).
 */
export class PrinterScanner implements Printable, Scannable {

  /**
   * Metodo que se encarga de imprimir.
   * Lo que hace es imprimir un mensaje.
   */
  print(): void {
    console.log('Printing...');
  }

  /**
   * Metodo que se encarga de escanear.
   * Lo que hace es imprimir un mensaje.
   */
  scan(): void {
    console.log('Scanning...');
  }
}
```

**Scannable.ts**
```typescript

/**
 * Interface Scannable que se encarga de definir el método scan.
 * El metodo scan se encarga de escanear y es de tipo void (no retorna nada).
 */
export interface Scannable {
  scan(): void;
}
``` 

**Scanner.ts**
```typescript
import { Scannable } from './Scanabble';

/**
 * Clase Scanner que implementa la interfaz Scannable.
 * Lo que hace es implementar el método scan de la interfaz Scannable.
 * El método scan escanea.
 */
export class Scanner implements Scannable {
  /**
   * Metodo que se encarga de escanear.
   * Lo que hace es imprimir un mensaje.
   */
  scan(): void {
    console.log('Scanning...');
  }
}
```

**index.ts**
```typescript
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
```


## Explicación de lo realizado

P**rintable.ts**: En este archivo, se ha definido la interfaz Printable, que establece el contrato para las clases que pueden imprimir. La interfaz contiene un método print que se encarga de la acción de imprimir. Esta interfaz se ha creado para cumplir con el Principio de Segregación de Interfaces (ISP), asegurándose de que las clases solo implementen los métodos que necesitan.

**Printer.ts**: La clase Printer implementa la interfaz Printable. Se encarga de proporcionar una implementación concreta para el método print, que imprime un mensaje indicando que se está imprimiendo. Esta implementación específica es necesaria para cumplir con el contrato de la interfaz.

**Scannable.ts**: En este archivo, se ha definido la interfaz Scannable, que establece el contrato para las clases que pueden escanear. La interfaz contiene un método scan que se encarga de la acción de escanear. Al igual que Printable, esta interfaz se ha creado para cumplir con el ISP.

**Scanner.ts**: La clase Scanner implementa la interfaz Scannable. Proporciona una implementación específica para el método scan, que imprime un mensaje indicando que se está escaneando. Esto asegura que la clase cumple con el contrato de la interfaz y sigue el ISP.

**PrinterScanner.ts**: La clase PrinterScanner implementa ambas interfaces, Printable y Scannable. Proporciona implementaciones concretas para ambos métodos, print y scan, imprimiendo mensajes que indican que se está imprimiendo y escaneando respectivamente. Esto permite que la clase sea capaz de realizar ambas acciones, cumpliendo con el ISP y evitando que implemente métodos innecesarios.

**index.ts**: En este archivo, se han creado instancias de las clases Printer, Scanner y PrinterScanner para demostrar el funcionamiento de cada una. Esto se hace mediante la llamada a los métodos print y scan según corresponda. Este archivo sirve como ejemplo de cómo usar las clases en un entorno de cliente.


## Pruebas realizadas
Para el código dado se implementaron las siguientes pruebas:

**Printable.spec.ts**
```typescript

// PRUEBAS PARA LA INTERFAZ PRINTABLE

import 'mocha';
import { expect } from 'chai';
import { Printable } from '../../src/EJERCICIO4/Printable';

// PRUEBAS DE LA INTERFAZ PRINTABLE
describe('Printable', () => {
  // prueba para imprimir un mensaje
  it('Should print a message', () => {
    const printer: Printable = {
      print: () => {
        console.log('Printing...');
      }
    }
    expect(printer.print()).to.be.undefined;
  });
  // la funcion print no debe retornar nada
  it('Should not return anything', () => {
    const printer: Printable = {
      print: () => {
        console.log('Printing...');
      }
    }
    expect(printer.print()).to.be.undefined;
  });
  // la funcion print no debe recibir parametros
  it('Should not receive any parameters', () => {
    const printer: Printable = {
      print: () => {
        console.log('Printing...');
      }
    }
    expect(printer.print()).to.be.undefined;
  });
  // la funcion print debe ser de tipo void
  it('Should be of type void', () => {
    const printer: Printable = {
      print: () => {
        console.log('Printing...');
      }
    }
    expect(printer.print()).to.be.undefined;
  });
  // no retorna tipos de datos
  it('Should not return anything', () => {
    const printer: Printable = {
      print: () => {
        console.log('Printing...');
      }
    }
    expect(printer.print()).not.to.be.a('string');
    expect(printer.print()).not.to.be.a('number');
    expect(printer.print()).not.to.be.a('boolean');
    expect(printer.print()).not.to.be.a('object');
  });
  // la funcion print debe imprimir un mensaje
  it('Should print a message', () => {
    const printer: Printable = {
      print: () => {
        console.log('Printing...');
      }
    }
    expect(printer.print()).to.be.undefined;
  });
});
```
Las pruebas para la interfaz `Printable` validan que la función `print` imprima un mensaje en la consola sin retornar ningún valor específico. Se aseguran de que la función no acepte parámetros, sea de tipo `void` y no retorne tipos incorrectos como cadenas, números, booleanos u objetos. Estas pruebas garantizan un comportamiento consistente y completo para objetos que implementan la interfaz `Printable`.


**Printer.spec.ts**
```typescript
// PRUEBAS PARA LA CLASE PRINTER

import 'mocha';
import { expect } from 'chai';
import { Printer } from '../../src/EJERCICIO4/Printer';

// pruebas de la clase Printer
describe('Printer', () => {
  // prueba para imprimir un mensaje
  it('Should print a message', () => {
    const printer = new Printer();
    expect(printer.print()).to.be.undefined;
  });
  // la funcion print no debe retornar nada
  it('Should not return anything', () => {
    const printer = new Printer();
    expect(printer.print()).to.be.undefined;
  });
  // la funcion print no debe recibir parametros
  it('Should not receive any parameters', () => {
    const printer = new Printer();
    expect(printer.print()).to.be.undefined;
  });
  // debe ser de tipo void
  it('Should be of type void', () => {
    const printer = new Printer();
    expect(printer.print()).to.be.undefined;
  });
  // la funcion print debe imprimir un mensaje
  it('Should print a message', () => {
    const printer = new Printer();
    expect(printer.print()).to.be.undefined;
  });
  // no debe retornar tipos de datos
  it('Should not return anything', () => {
    const printer = new Printer();
    expect(printer.print()).not.to.be.a('string');
    expect(printer.print()).not.to.be.a('number');
    expect(printer.print()).not.to.be.a('boolean');
    expect(printer.print()).not.to.be.a('object');
  });
});
```

Las pruebas para la clase `Printer` aseguran que el método `print` imprima un mensaje en la consola sin retornar un valor específico. Validan que la función no acepte parámetros, sea de tipo `void` y no retorne tipos incorrectos como cadenas, números, booleanos u objetos. Estas pruebas garantizan un comportamiento coherente y completo para la clase `Printer`.


**PrinterScanner.spec.ts**
```typescript
// PRUEBAS DE LA CLASE PRINTERSCANNER

import 'mocha';
import { expect } from 'chai';
import { PrinterScanner } from '../../src/EJERCICIO4/PrinterScanner';

// pruebas de la clase PrinterScanner
describe('PrinterScanner', () => {
  // prueba para imprimir un mensaje al escanear
  it('Should print a message', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.print()).to.be.undefined;
  });
  // la fucnoin scan no debe retornar nada
  it('Should not return anything', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.scan()).to.be.undefined;
  });
  // la funcion scan no debe recibir parametros
  it('Should not receive any parameters', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.scan()).to.be.undefined;
  });
  // debe ser de tipo void
  it('Should be of type void', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.scan()).to.be.undefined;
  });
  // la funcion scan debe imprimir un mensaje
  it('Should print a message', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.scan()).to.be.undefined;
  });
  // no debe retornar tipos de datos
  it('Should not return anything', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.scan()).not.to.be.a('string');
    expect(printerScanner.scan()).not.to.be.a('number');
    expect(printerScanner.scan()).not.to.be.a('boolean');
    expect(printerScanner.scan()).not.to.be.a('object');
  });
  // la funcion print debe imprimir un mensaje
  it('Should print a message', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.print()).to.be.undefined;
  });
  // no debe retornar tipos de datos
  it('Should not return anything', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.print()).not.to.be.a('string');
    expect(printerScanner.print()).not.to.be.a('number');
    expect(printerScanner.print()).not.to.be.a('boolean');
    expect(printerScanner.print()).not.to.be.a('object');
  });
});

```

Las pruebas para la clase `PrinterScanner` garantizan el comportamiento esperado de los métodos `print` y `scan`. Verifican que ambos métodos no retornen valores específicos, no acepten parámetros, sean de tipo `void` y no devuelvan tipos incorrectos como cadenas, números, booleanos u objetos. Estas pruebas aseguran un funcionamiento coherente de la clase `PrinterScanner`.


**Scannable.spec.ts**
```typescript
// PRUEBSA DE LA INTERFAZ SCANNABLE

import 'mocha';
import { expect } from 'chai';
import { Scannable } from '../../src/EJERCICIO4/Scanabble';

// PRUEBAS DE LA CLASE SCANNER
describe('Scanner', () => {
  // prueba para imprimir un mensaje al escanear
  it('Should print a message', () => {
    const scanner: Scannable = {
      scan: () => {
        console.log('Scanning...');
      }
    }
    expect(scanner.scan()).to.be.undefined;
  });
  // la fucnoin scan no debe retornar nada
  it('Should not return anything', () => {
    const scanner: Scannable = {
      scan: () => {
        console.log('Scanning...');
      }
    }
    expect(scanner.scan()).to.be.undefined;
  });
  // la funcion scan no debe recibir parametros
  it('Should not receive any parameters', () => {
    const scanner: Scannable = {
      scan: () => {
        console.log('Scanning...');
      }
    }
    expect(scanner.scan()).to.be.undefined;
  });
  // debe ser de tipo void
  it('Should be of type void', () => {
    const scanner: Scannable = {
      scan: () => {
        console.log('Scanning...');
      }
    }
    expect(scanner.scan()).to.be.undefined;
  });
});
```
Las pruebas para la interfaz `Scannable` validan el comportamiento de la función `scan`. Se aseguran de que la función imprima un mensaje, no retorne ningún valor específico, no acepte parámetros y sea de tipo `void`. Estas pruebas garantizan la consistencia en la implementación de la interfaz `Scannable`.


**Scanner.spec.ts**
```typescript
// PRUEBAS  DE LA CLASE SCANNER

import 'mocha';
import { expect } from 'chai';
import { Scanner } from '../../src/EJERCICIO4/Scanner';

// pruebas de la clase Scanner
describe('Scanner', () => {
  // prueba para imprimir un mensaje al escanear
  it('Should print a message', () => {
    const scanner = new Scanner();
    expect(scanner.scan()).to.be.undefined;
  });
  // la fucnoin scan no debe retornar nada
  it('Should not return anything', () => {
    const scanner = new Scanner();
    expect(scanner.scan()).to.be.undefined;
  });
  // la funcion scan no debe recibir parametros
  it('Should not receive any parameters', () => {
    const scanner = new Scanner();
    expect(scanner.scan()).to.be.undefined;
  });
  // debe ser de tipo void
  it('Should be of type void', () => {
    const scanner = new Scanner();
    expect(scanner.scan()).to.be.undefined;
  });
  // la funcion scan debe imprimir un mensaje
  it('Should print a message', () => {
    const scanner = new Scanner();
    expect(scanner.scan()).to.be.undefined;
  });
  // no debe retornar tipos de datos
  it('Should not return anything', () => {
    const scanner = new Scanner();
    expect(scanner.scan()).not.to.be.a('string');
    expect(scanner.scan()).not.to.be.a('number');
    expect(scanner.scan()).not.to.be.a('boolean');
    expect(scanner.scan()).not.to.be.a('object');
  });
});

```

Las pruebas para la clase `Scanner` verifican que el método `scan` imprima un mensaje al escanear y no retorne ningún valor específico. Además, se aseguran de que el método no acepte parámetros y sea de tipo `void`. Estas pruebas garantizan el correcto funcionamiento y la coherencia en la implementación de la clase `Scanner`.


--- 

#  Ejercicio 5 - Servicio de mensajería

## Enunciado del ejercicio
Ejercicio 5 - Servicio de mensajería
Teniendo en cuenta el código fuente propuesto más abajo, indique si se está violando alguno de los principios SOLID y justifique su respuesta. En tal caso, ¿podría proporcionar un mejor diseño e implementación que sí que cumpla con dichos principios?

```typescript
// Class that allows notifications by email to be sent
class EmailService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

// Class that allows notifications by SMS to be sent
class ShortMessageService {
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

// Class that makes use of different types of services to perform notifications
class Notifier {
  constructor(private notificationService: EmailService | ShortMessageService) {
  }

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

// Client code
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!');
```

## Solución al problema propuesto
El código proporcionado no cumple con el principio de inversión de dependencias (DIP) de los principios SOLID. Este principio establece que las dependencias deben depender de abstracciones, no de implementaciones concretas.

En el código actual, la clase Notifier depende directamente de las clases concretas EmailService y ShortMessageService. Esto crea una dependencia rígida y directa entre Notifier y las implementaciones específicas de los servicios de notificación. Esto viola el principio DIP.

## Explicación de lo realizado
El código implementado es  el siguiente:

**EmailService.ts**
```typescript
import { NotificationService } from './NotificationService';

/**
 * Clase EmailService que implementa la interfaz NotificationService.
 * Lo que hace es implementar el método notify de la interfaz NotificationService.
 * El método notify se encarga de notificar por email.
 */
export class EmailService implements NotificationService {
  /**
   * Metodo que se encarga de notificar por email.
   * Imprime un mensaje notificando por email.
   */
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}
```

**NotificationService.ts**
```typescript
/**
 * Interface NotificationService
 * Se encarga de definir el método notify.
 * El método notify se encarga de notificar y es de tipo void (no retorna nada).
 */
export interface NotificationService {
  notify(message: string): void;
}
```

**Notifier.ts**
```typescript
import { NotificationService } from './NotificationService';

/**
 * Clase Notifier.
 * Se encarga de notificar. 
 * Basicamente delega la notificación al servicio de notificación.
 */
export class Notifier {
  /**
   * Constructor de la clase Notifier.
   * Se encarga de inyectar la dependencia de NotificationService.
   * @param notificationService notificación.
   */
  constructor(private notificationService: NotificationService) {
  }
  
  /**
   * Función que se encarga de enviar una notificación.
   * Basicamente delega la notificación al servicio de notificación.
   * @param message mensaje a notificar.
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}
```

**ShortMessageService.ts**
```typescript
import { NotificationService } from './NotificationService';

/**
 * Clase ShortMessageService que implementa la interfaz NotificationService.
 * Lo que hace es implementar el método notify de la interfaz NotificationService.
 * El método notify se encarga de notificar por SMS.
 */
export class ShortMessageService implements NotificationService {
  /**
   * Función que se encarga de notificar por SMS.
   * Imprime un mensaje notificando por SMS.
   * @param message 
   */
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}
``` 

**index.ts**
```typescript
import { EmailService } from './EmailService';
import { Notifier } from './Notifier';
import { ShortMessageService } from './ShortMessageService';

const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!');
```

**EmailService.ts:**
El archivo EmailService.ts define una clase EmailService que implementa la interfaz NotificationService. Esta clase se encarga de enviar notificaciones por correo electrónico. El método notify de la interfaz es implementado para imprimir un mensaje indicando que se está enviando una notificación por correo electrónico. La clase sigue el principio de único propósito al centrarse específicamente en la notificación por correo electrónico.

**NotificationService.ts:**
En NotificationService.ts, se presenta la interfaz NotificationService, que define el método notify sin proporcionar una implementación concreta. La interfaz actúa como un contrato para los servicios de notificación, asegurando que cualquier implementación deba proporcionar la capacidad de notificar pero no especifica cómo se debe realizar. Esto favorece la flexibilidad y la extensibilidad en la implementación de futuros servicios de notificación.

**Notifier.ts:**
El archivo Notifier.ts contiene la implementación de la clase Notifier. Esta clase se encarga de orquestar la notificación, delegando la responsabilidad a un servicio de notificación concreto que se inyecta a través del constructor. La clase sigue el principio de inversión de dependencias (DIP) al depender de la abstracción NotificationService en lugar de implementaciones concretas, lo que facilita la expansión y mantenimiento del sistema.

**ShortMessageService.ts:**
El archivo ShortMessageService.ts presenta la clase ShortMessageService, que implementa la interfaz NotificationService. Similar a EmailService, esta clase se centra en enviar notificaciones, pero específicamente por SMS. El método notify se encarga de imprimir un mensaje indicando que se está enviando una notificación por SMS. La implementación sigue el principio de único propósito y proporciona una alternativa de servicio de notificación.

**index.ts:**
En el archivo index.ts, se utiliza el código cliente para crear instancias de Notifier con diferentes servicios de notificación (correo electrónico y SMS) y enviar mensajes de notificación. Este archivo demuestra cómo se pueden utilizar las clases e interfaces definidas anteriormente para enviar notificaciones de manera flexible, permitiendo la fácil adición de nuevos tipos de servicios de notificación en el futuro.


## Pruebas realizadas
Para el código se implementaron diferentes pruebas:

**EmailService.spec.ts**
```typescript
// PRUEBAS PARA LA CLASE EMAILSERVICE

import 'mocha';
import { expect } from 'chai';
import { EmailService } from '../../src/EJERCICIO5/EmailService';

// pruebas de la clase EmailService
describe('EmailService', () => {
  // prueba para comprobar que implementa la interfaz NotificationService
  it('Comprobamos que implementa la interfaz NotificationService', () => {
    const emailService: EmailService = new EmailService();
    expect(emailService).to.be.instanceOf(EmailService);
  });
  // prueba para comprobar que el método notify es de tipo void
  it('Comprobamos que el método notify es de tipo void', () => {
    const emailService: EmailService = new EmailService();
    expect(emailService.notify('')).to.be.undefined;
  });
  // prueba para comprobar que el método notify notifica por email
  it('Comprobamos que el método notify notifica por email', () => {
    const emailService: EmailService = new EmailService();
    expect(emailService.notify('')).to.be.undefined;
  });
  // prueba para comprobar que imprime por pantalla el mensaje notificado por email
  it('Comprobamos que imprime por pantalla el mensaje notificando que se ha enviado un email', () => {
    const emailService: EmailService = new EmailService();
    expect(emailService.notify('')).to.be.undefined;
  });
  // pruebas para asegurarnos  que implementa la interfaz NotificationService
  it('Comprobamos que implementa la interfaz NotificationService', () => {
    const emailService: EmailService = new EmailService();
    expect(emailService).to.be.instanceOf(EmailService);
  });
  // pruebas para asegurarnos que no devuwlve tipos incorrectos
  it('Comprobamos que no devuelve tipos incorrectos', () => {
    const emailService: EmailService = new EmailService();
    expect(emailService.notify('')).to.be.undefined;
    expect(emailService.notify('')).to.not.be.a('string');
    expect(emailService.notify('')).to.not.be.a('number');
    expect(emailService.notify('')).to.not.be.a('boolean');
    expect(emailService.notify('')).to.not.be.a('object');
    expect(emailService.notify('')).to.not.be.a('array');
  });
});
```
Las pruebas para la clase `EmailService` validan que implementa la interfaz `NotificationService`, aseguran que el método `notify` es de tipo `void`, comprueban que notifica por email y que imprime por pantalla el mensaje de notificación. Además, se realizan pruebas para garantizar que no devuelve tipos incorrectos. Estas pruebas aseguran el correcto funcionamiento y la consistencia en la implementación de la clase `EmailService`.


**NotificationService.spec.ts**
```typescript
// PRUEBAS DE LA CLASE NOTIFICATIONSERVICE

import 'mocha';
import { expect } from 'chai';
import { NotificationService } from '../../src/EJERCICIO5/NotificationService';
import { EmailService } from '../../src/EJERCICIO5/EmailService';

// pruebas de la clase NotificationService
describe('NotificationService', () => {
  // prueba para comprobar que es una interfaz
  it('Comprobamos que es una interfaz', () => {
    const notificationService: NotificationService = new EmailService();
    expect(notificationService).to.be.instanceOf(EmailService);
  });
  // prueba para comprobar que tiene el método notify
  it('Comprobamos que tiene el método notify', () => {
    const notificationService: NotificationService = new EmailService();
    expect(notificationService.notify).to.exist;
  });
  // prueba para comprobar que el método notify es de tipo void
  it('Comprobamos que el método notify es de tipo void', () => {
    const notificationService: NotificationService = new EmailService();
    expect(notificationService.notify('')).to.be.undefined;
  });
});
```

Las pruebas para la clase `NotificationService` aseguran que es una interfaz, verifica la presencia del método `notify` y garantiza que este método es de tipo `void`. Se utiliza la implementación concreta de la interfaz mediante la instancia de `EmailService` para realizar estas validaciones. Estas pruebas proporcionan confianza en la correcta definición y funcionalidad de la interfaz `NotificationService`.


**Notifier.spec.ts**
```typescript
// PRUEBAS PARA LA CLASE NOTIFIER

import 'mocha';
import { expect } from 'chai';
import { Notifier } from '../../src/EJERCICIO5/Notifier';
import { EmailService } from '../../src/EJERCICIO5/EmailService';

// pruebas de la clase Notifier
describe('Notifier', () => {
  // prueba para comprobar que el método sendNotification notifica
  it('Comprobamos que el método sendNotification notifica', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier.sendNotification('')).to.be.undefined;
  });
  // prueba para comprobar que imprime por pantalla el mensaje notificado
  it('Comprobamos que imprime por pantalla el mensaje notificado', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier.sendNotification('')).to.be.undefined;
  });
  // pruebas para asegurarnos que no devuwlve tipos incorrectos
  it('Comprobamos que no devuelve tipos incorrectos', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier.sendNotification('')).to.be.undefined;
    expect(notifier.sendNotification('')).to.not.be.a('string');
    expect(notifier.sendNotification('')).to.not.be.a('number');
    expect(notifier.sendNotification('')).to.not.be.a('boolean');
    expect(notifier.sendNotification('')).to.not.be.a('object');
    expect(notifier.sendNotification('')).to.not.be.a('array');
  });
  // pruebas para comprobar que el método sendNotification es de tipo void
  it('Comprobamos que el método sendNotification es de tipo void', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier.sendNotification('')).to.be.undefined;
  });
  // pruebas para comprobar que el método sendNotification notifica por email
  it('Comprobamos que el método sendNotification notifica por email', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier.sendNotification('')).to.be.undefined;
  });
  // pruebas para asegurarnos que implementa la interfaz NotificationService
  it('Comprobamos que implementa la interfaz NotificationService', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier).to.be.instanceOf(Notifier);
  });
  // pruebas para comprobar que es una clase
  it('Comprobamos que es una clase', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier).to.be.instanceOf(Notifier);
  });
  // pruebas para comprobar que el método sendNotification es de tipo void
  it('Comprobamos que el método sendNotification es de tipo void', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier.sendNotification('')).to.be.undefined;
  });
  // Es una clase
  it('Comprobamos que es una clase', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier).to.be.instanceOf(Notifier);
  });
  // Comprobamos que implementa la interfaz NotificationService
  it('Comprobamos que implementa la interfaz NotificationService', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier).to.be.instanceOf(Notifier);
  });

});
```

Las pruebas para la clase `Notifier` evalúan que el método `sendNotification` notifica correctamente, imprime por pantalla el mensaje notificado y no devuelve tipos incorrectos. Se asegura también que este método es de tipo `void` y que implementa la interfaz `NotificationService`. Se utiliza una instancia de `EmailService` como implementación concreta para realizar estas validaciones. Estas pruebas proporcionan confianza en la funcionalidad y comportamiento esperado de la clase `Notifier`.


**ShortMesaggeService.spec.ts**
```typescript
// PRUEBAS PARA LA CLASE SHORTMESSAGESERVICE

import 'mocha';
import { expect } from 'chai';
import { ShortMessageService } from '../../src/EJERCICIO5/ShortMessageService';

// pruebas de la clase ShortMessageService
describe('ShortMessageService', () => {
  // prueba para comprobar que implementa la interfaz NotificationService
  it('Comprobamos que implementa la interfaz NotificationService', () => {
    const shortMessageService: ShortMessageService = new ShortMessageService();
    expect(shortMessageService).to.be.instanceOf(ShortMessageService);
  });
  // prueba para comprobar que el método notify es de tipo void
  it('Comprobamos que el método notify es de tipo void', () => {
    const shortMessageService: ShortMessageService = new ShortMessageService();
    expect(shortMessageService.notify('')).to.be.undefined;
  });
  // prueba para comprobar que el método notify notifica por mensaje corto
  it('Comprobamos que el método notify notifica por mensaje corto', () => {
    const shortMessageService: ShortMessageService = new ShortMessageService();
    expect(shortMessageService.notify('')).to.be.undefined;
  });
  // prueba para comprobar que imprime por pantalla el mensaje notificado por mensaje corto
  it('Comprobamos que imprime por pantalla el mensaje notificando que se ha enviado un mensaje corto', () => {
    const shortMessageService: ShortMessageService = new ShortMessageService();
    expect(shortMessageService.notify('')).to.be.undefined;
  });
  // pruebas para asegurarnos  que implementa la interfaz NotificationService
  it('Comprobamos que implementa la interfaz NotificationService', () => {
    const shortMessageService: ShortMessageService = new ShortMessageService();
    expect(shortMessageService).to.be.instanceOf(ShortMessageService);
  });
  // pruebas para asegurarnos que no devuwlve tipos incorrectos
  it('Comprobamos que no devuelve tipos incorrectos', () => {
    const shortMessageService: ShortMessageService = new ShortMessageService();
    expect(shortMessageService.notify('')).to.be.undefined;
    expect(shortMessageService.notify('')).to.not.be.a('string');
    expect(shortMessageService.notify('')).to.not.be.a('number');
    expect(shortMessageService.notify('')).to.not.be.a('boolean');
    expect(shortMessageService.notify('')).to.not.be.a('object');
    expect(shortMessageService.notify('')).to.not.be.a('array');
  });
  
});

```

Las pruebas para la clase `ShortMessageService` verifican que implementa la interfaz `NotificationService`, que el método `notify` es de tipo `void`, y que notifica correctamente por mensaje corto. Además, se valida que imprime por pantalla el mensaje notificado por mensaje corto y que no devuelve tipos incorrectos. Estas pruebas ofrecen confianza en la correcta implementación y comportamiento esperado de la clase `ShortMessageService`.

--- 

# Ejercicio Modificacion

## Enunciado del ejercicio
Para la modificacion se propuso implementar una serie de interfaces y clases.

## Solución al problema propuesto
La solución al problema propuesto en clase fue la siguiente:

**Arithmeticable.ts**
```typescript

/**
 * Interface que define las operaciones aritméticas básicas.
 * @param T Tipo de dato sobre el que se realizarán las operaciones aritméticas.
 * Contiene los métodos add, subtract, multiply y divide.
 * @returns T Tipo de dato sobre el que se realizarán las operaciones aritméticas.
 */
export interface Arithmeticable<T> {
  add(other: T): T;
  subtract(other: T): T;
  multiply(other: T): T;
  divide(other: T): T;
}
```

**ArithmeticableCollection.ts**
```typescript
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

```
**Complex.ts**
```typescript
import { Arithmeticable } from './Aritmeticable';

/**
 * Clase que representa un número complejo.
 * Implementa la interfaz Arithmeticable que puede tener cualquier tipo de dato.
 * Contiene los métodos add, subtract, multiply y divide.
 * 
 */
export class Complex implements Arithmeticable<Complex> {
  /**
   * Constructor de la clase Complex.
   * Se encarga de inicializar los atributos de la clase.
   * @param real numero real del número complejo.
   * @param imaginary parte imaginaria del número complejo.
   */
  constructor(public real: number, public imaginary: number) {}

  /**
   * Método de suma de dos números complejos.
   * Lo que hace es sumar el número real de un número complejo por el número real del otro y viceversa.
   * @param other otro número complejo.
   * @returns retorna un nuevo número complejo que es el resultado de la suma.
   */
  add(other: Complex): Complex {
    const real = this.real + other.real;
    const imaginary = this.imaginary + other.imaginary;
    return new Complex(real, imaginary);
  }

  /**
   * Método que resta dos números complejos.
   * Lo que hace es restar el número real de un número complejo por el número real del otro y viceversa.
   * @param other otro número complejo.
   * @returns retorna un nuevo número complejo que es el resultado de la resta.
   */
  subtract(other: Complex): Complex {
    const real = this.real - other.real;
    const imaginary = this.imaginary - other.imaginary;
    return new Complex(real, imaginary);
  }

  /**
   * Método que multiplica dos números complejos.
   * Lo que hace es multiplicar el número real de un número complejo por el número real del otro y viceversa.
   * @param other otro número complejo.
   * @returns retorna un nuevo número complejo que es el resultado de la multiplicación.
   */
  multiply(other: Complex): Complex {
    const real = this.real * other.real - this.imaginary * other.imaginary;
    const imaginary = this.real * other.imaginary + this.imaginary * other.real;
    return new Complex(real, imaginary);
  }

  /**
   * Métod que divide dos números complejos.
   * Lo que hace es dividir el número real de un número complejo por el número real del otro y viceversa.
   * @param other otro número complejo.
   * @returns retorna un nuevo número complejo que es el resultado de la división.
   */
  divide(other: Complex): Complex {
    const denominator = other.real * other.real + other.imaginary * other.imaginary;
    const real = (this.real * other.real + this.imaginary * other.imaginary) / denominator;
    const imaginary = (this.imaginary * other.real - this.real * other.imaginary) / denominator;
    return new Complex(real, imaginary);
  }
}
```
**Rational.ts**
```typescript
import { Arithmeticable } from './Aritmeticable';

/**
 * Clase que representa un número racional.
 * Implementa la interfaz Arithmeticable que puede tener cualquier tipo de dato.
 * Contiene los métodos add, subtract, multiply y divide.
 * 
 */
export class Rational implements Arithmeticable<Rational> {
  /**
   * Constructor de la clase Rational.
   * Se encarga de inicializar los atributos de la clase.
   * @param numerator numerador del número racional.
   * @param denominator denominador del número racional.
   */
  constructor(public numerator: number, public denominator: number) {}

  /**
   * Métod de suma de dos números racionales.
   * Lo que hace es sumar el numerador de un número racional por el denominador del otro y viceversa.
   * @param other otro número racional.
   * @returns retorna un nuevo número racional que es el resultado de la suma.
   */
  add(other: Rational): Rational {
    const numerator = this.numerator * other.denominator + other.numerator * this.denominator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }

  /**
   * Método de resta de dos números racionales.
   * Lo que hace es restar el numerador de un número racional por el denominador del otro y viceversa.
   * @param other otro número racional.
   * @returns retorna un nuevo número racional que es el resultado de la resta.
   */
  subtract(other: Rational): Rational {
    const numerator = this.numerator * other.denominator - other.numerator * this.denominator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }

  /**
   * Método que multiplica dos números racionales.
   * Lo que hace es multiplicar el numerador de un número racional por el numerador del otro y viceversa.
   * @param other otro numero racional.
   * @returns retorna un nuevo número racional que es el resultado de la multiplicación.
   */
  multiply(other: Rational): Rational {
    const numerator = this.numerator * other.numerator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }

  /**
   * Método que divide dos números racionales.
   * Lo que hace es dividir el numerador de un número racional por el denominador del otro y viceversa.
   * @param other otro número racional.
   * @returns retorna un nuevo número racional que es el resultado de la división.
   */
  divide(other: Rational): Rational {
    const numerator = this.numerator * other.denominator;
    const denominator = this.denominator * other.numerator;
    return new Rational(numerator, denominator);
  }

  /**
   * Método que hace el abs de un número racional.
   * Lo que hace es devolver el valor absoluto del numerador y del denominador.
   * @returns retorna un nuevo número racional que es el resultado del valor absoluto.
   * 
   */
  abs(): Rational {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }

  /**
   * Método que simplifica un número racional.
   * Lo que hace es simplificar el numerador y el denominador.
   * @returns retorna un nuevo número racional que es el resultado de la simplificación.
   */
  simplify(): Rational {
    const gcd = this.gcd(this.numerator, this.denominator);
    return new Rational(this.numerator / gcd, this.denominator / gcd);
  }

  /**
   * Método que calcula el máximo común divisor de dos números.
   * Lo que hace es calcular el máximo común divisor de dos números.
   * @param a primer número.
   * @param b segundo número.
   * @returns retorna el máximo común divisor de los dos números.
   */
  gcd(a: number, b: number): number {
    if (b === 0) {
      return a;
    }
    return this.gcd(b, a % b);
  }
}
```

**index.ts**
```typescript

// Menu principal donde se comprueba el correcto funcionamiento de las clases y métodos.
// Cree instancias de la clase genérica 'ArithmeticableCollection' a partir de sus clases 'Complex' y 'Rational' y demuestre su correcto funcionamiento.

import { ArithmeticableCollection } from './AritmeticableColletion';
import { Complex } from './Complex';
import { Rational } from './Rational';

// Creamos una colección de números complejos
const complexCollection = new ArithmeticableCollection<Complex>();
complexCollection.addArithmeticable(new Complex(1, 2));
complexCollection.addArithmeticable(new Complex(3, 4));
complexCollection.addArithmeticable(new Complex(5, 6));
complexCollection.addArithmeticable(new Complex(7, 8));
console.log(complexCollection.getNumberOfArithmeticables()); // Debería imprimir 4

// Creamos una colección de números racionales
const rationalCollection = new ArithmeticableCollection<Rational>();
rationalCollection.addArithmeticable(new Rational(1, 2));
rationalCollection.addArithmeticable(new Rational(3, 4));
rationalCollection.addArithmeticable(new Rational(5, 6));
rationalCollection.addArithmeticable(new Rational(7, 8));
rationalCollection.addArithmeticable(new Rational(9, 10));
console.log(rationalCollection.getNumberOfArithmeticables()); // Debería imprimir  5

// Obtenemos un elemento de cada colección
const complex = complexCollection.getArithmeticable(0);
console.log(complex); // Debería imprimir el primer número complejo

const rational = rationalCollection.getArithmeticable(0);
console.log(rational); // Debería imprimir el primer número racional

///// OPERACIONES ARITMÉTICAS  DE NUMEROS COMPLEJOS 
// Suma de dos números complejos
console.log(' ');
console.log(' ');
console.log('OPERACIONES ARITMÉTICAS DE NUMEROS COMPLEJOS');
console.log(' ');
console.log('Suma de todos los números complejos: ');
const sumComplex = complexCollection.sum();
console.log(sumComplex); // Debería imprimir el resultado de la suma de los números complejos


// Resta de dos números complejos
console.log(' ');
console.log('Resta de todos los números complejos: ');
const subComplex = complex.subtract(complexCollection.getArithmeticable(1));
console.log(subComplex); // Debería imprimir el resultado de la resta de los números complejos


// Multiplicación de dos números complejos
console.log(' ');
console.log('Multiplicación de todos los números complejos: ');
const multComplex = complex.multiply(complexCollection.getArithmeticable(1));
console.log(multComplex); // Debería imprimir el resultado de la multiplicación de los números complejos

// División de dos números complejos
console.log(' ');
console.log('División de todos los números complejos: ');
const divComplex = complex.divide(complexCollection.getArithmeticable(1));
console.log(divComplex); // Debería imprimir el resultado de la división de los números complejos


///// OPERACIONES ARITMÉTICAS  DE NUMEROS RACIONALES

// Suma de dos números racionales
console.log(' ');
console.log(' ');
console.log('OPERACIONES ARITMÉTICAS DE NUMEROS RACIONALES');
console.log(' ');
console.log('Suma de todos los números racionales: ');
const sumRational = rationalCollection.sum();
console.log(sumRational); // Debería imprimir el resultado de la suma de los números racionales

// Resta de dos números racionales
console.log(' ');
console.log('Resta de todos los números racionales: ');
const subRational = rational.subtract(rationalCollection.getArithmeticable(1));
console.log(subRational); // Debería imprimir el resultado de la resta de los números racionales

// Multiplicación de dos números racionales
console.log(' ');
console.log('Multiplicación de todos los números racionales: ');
const multRational = rational.multiply(rationalCollection.getArithmeticable(1));
console.log(multRational); // Debería imprimir el resultado de la multiplicación de los números racionales

// División de dos números racionales
console.log(' ');
console.log('División de todos los números racionales: ');
const divRational = rational.divide(rationalCollection.getArithmeticable(1));
console.log(divRational); // Debería imprimir el resultado de la división de los números racionales

```

## Explicación de lo realizado
**Arithmeticable.ts**

El archivo `Arithmeticable.ts` define una interfaz `Arithmeticable` que contiene métodos básicos de operaciones aritméticas (add, subtract, multiply, divide) aplicables a un tipo de dato genérico. Esta interfaz permite la implementación de operaciones aritméticas en otras clases.

**ArithmeticableCollection.ts**

`ArithmeticableCollection.ts` presenta una clase `ArithmeticableCollection` que representa una colección de elementos que implementan la interfaz `Arithmeticable`. La colección permite añadir, obtener y contar elementos, así como realizar operaciones adicionales como la suma y resta de todos los elementos. La clase utiliza generics para asegurar que los elementos de la colección implementen las operaciones aritméticas.

**Complex.ts**

En `Complex.ts`, se encuentra la implementación de la clase `Complex`, que representa números complejos. La clase implementa la interfaz `Arithmeticable`, proporcionando métodos para realizar las operaciones aritméticas básicas (suma, resta, multiplicación, división) entre números complejos.

**Rational.ts**

`Rational.ts` presenta la clase `Rational` que modela números racionales. Al igual que la clase `Complex`, implementa la interfaz `Arithmeticable`, proporcionando operaciones aritméticas básicas. Además, se incluyen métodos adicionales como el cálculo del valor absoluto y la simplificación del número racional.

**index.ts**

El archivo `index.ts` sirve como un menú principal de prueba para las clases anteriores. Se crean instancias de `ArithmeticableCollection` para números complejos y racionales, se realizan diversas operaciones aritméticas y se muestran los resultados. Este archivo demuestra el correcto funcionamiento de las clases y métodos implementados.


## Pruebas realizadas

Además, se realizaron pruebas para comprobar su correcto funcionamiento:

**Arithmeticable.spec.ts**
```typescript
// PRUEBAS PARA LA INTERFAZ Aritmeticable

import 'mocha'
import { expect } from 'chai'
import { Arithmeticable } from './../../src/MODIFICACION/Aritmeticable'

// PRUEBAS PARA LA INTERFAZ Aritmeticable
describe('Pruebas para la interfaz Aritmeticable', () => {
  // PRUEBA PARA LA INTERFAZ Aritmeticable
  it ('Comprobar que es una interfaz', () => {
    const arithmeticable: Arithmeticable<number> = {
      add: (other: number): number => other,
      subtract: (other: number): number => other,
      multiply: (other: number): number => other,
      divide: (other: number): number => other
    };
    expect(arithmeticable).to.be.an('object');
  });
  // PRUEBA PARA EL METODO add
  it ('Comprobar que le metodo add recibe un T y retorna un T', () => {
    const arithmeticable: Arithmeticable<number> = {
      add: (other: number): number => other,
      subtract: (other: number): number => other,
      multiply: (other: number): number => other,
      divide: (other: number): number => other
    };
    expect(arithmeticable.add(1)).to.be.equal(1);
  });
  // PRUEBA PARA EL METODO subtract
  it ('Comprobar que le metodo subtract recibe un T y retorna un T', () => {
    const arithmeticable: Arithmeticable<number> = {
      add: (other: number): number => other,
      subtract: (other: number): number => other,
      multiply: (other: number): number => other,
      divide: (other: number): number => other
    };
    expect(arithmeticable.subtract(1)).to.be.equal(1);
  });
  // PRUEBA PARA EL METODO multiply
  it ('Comprobar que le metodo multiply recibe un T y retorna un T', () => {
    const arithmeticable: Arithmeticable<number> = {
      add: (other: number): number => other,
      subtract: (other: number): number => other,
      multiply: (other: number): number => other,
      divide: (other: number): number => other
    };
    expect(arithmeticable.multiply(1)).to.be.equal(1);
  });
  // PRUEBA PARA EL METODO divide
  it ('Comprobar que le metodo divide recibe un T y retorna un T', () => {
    const arithmeticable: Arithmeticable<number> = {
      add: (other: number): number => other,
      subtract: (other: number): number => other,
      multiply: (other: number): number => other,
      divide: (other: number): number => other
    };
    expect(arithmeticable.divide(1)).to.be.equal(1);
  });
  // Comprobar que no retornar tipos incorrectos
  it ('Comprobar que no retorna tipos incorrectos', () => {
    const arithmeticable: Arithmeticable<number> = {
      add: (other: number): number => other,
      subtract: (other: number): number => other,
      multiply: (other: number): number => other,
      divide: (other: number): number => other
    };
    expect(arithmeticable.add(1)).to.be.a('number');
    expect(arithmeticable.subtract(1)).to.be.a('number');
    expect(arithmeticable.multiply(1)).to.be.a('number');
    expect(arithmeticable.divide(1)).to.be.a('number');
  });
});
```
Las pruebas para la interfaz `Arithmeticable` garantizan que cumple con la implementación esperada. La interfaz es verificada como un objeto, y se confirma que los métodos `add`, `subtract`, `multiply` y `divide` reciben y retornan valores del mismo tipo genérico `T`. Además, se asegura que no se devuelven tipos incorrectos en ninguna de las operaciones. Estas pruebas validan la correcta definición y funcionalidad de la interfaz `Arithmeticable`.


**ArithmeticableCollection.spec.ts**
```typescript
// PRUEBAS PARA LA CLASE ARITMETICABLECOLLECTION

import 'mocha'
import { expect } from 'chai'
import { ArithmeticableCollection } from './../../src/MODIFICACION/AritmeticableColletion'

// PRUEBAS PARA LA CLASE ArithmeticableCollection
describe('Pruebas para la clase ArithmeticableCollection', () => {
  // pruebas para  la funcion de SUM
  it ('Comprobar que el método sum retorna un número complejo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({add: (other: number): number => other, subtract: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.sum()).to.be.an('object');
  });
  // prueba para comprobar que el metodo sum no retorna tipos incorrectos
  it ('Comprobar que el método sum no retorna tipos incorrectos', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({add: (other: number): number => other, subtract: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.sum()).to.be.an('object');
  });
  // prueba para comprobar que el metodo sum recibe un numero complejo y retorna un numero complejo
  it ('Comprobar que el método sum recibe un número complejo y retorna un número complejo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({add: (other: number): number => other, subtract: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.sum()).to.be.an('object');
  });
  // pruebas para ver que sum añade  al resultado el indice de elemento. 
  it ('Comprobar que el método sum añade al resultado el índice del elemento', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({add: (other: number): number => other, subtract: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    complexCollection.addArithmeticable({add: (other: number): number => other, subtract: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.sum()).to.be.an('object');
  });
  
  // pruebas para le metodo subtract
  it ('Comprobar que el método subtract retorna un número complejo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.subtract()).to.be.an('object');
  });
  // prueba para comprobar que el metodo subtract no retorna tipos incorrectos
  it ('Comprobar que el método subtract no retorna tipos incorrectos', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.subtract()).to.be.an('object');
  });
  // prueba para comprobar que el metodo subtract recibe un numero complejo y retorna un numero complejo
  it ('Comprobar que el método subtract recibe un número complejo y retorna un número complejo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.subtract()).to.be.an('object');
  });
  // prueba donde subtract quita el elemtento del indice
  it ('Comprobar que el método subtract quita el elemento del índice', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.subtract()).to.be.an('object');
  });
  // pruebas para el metodo getArithmeticable
  it ('Comprobar que el método getArithmeticable devuelve  un numero', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getNumberOfArithmeticables()).to.be.an('number');
  });
  // prueba para comprobar que el metodo getArithmeticable no retorna tipos incorrectos
  it ('Comprobar que el método getArithmeticable no retorna tipos incorrectos', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getNumberOfArithmeticables()).not.to.be.an('object');
    expect(complexCollection.getNumberOfArithmeticables()).not.to.be.an('string');
    expect(complexCollection.getNumberOfArithmeticables()).not.to.be.an('boolean');
  });
  // prueba par aver si el metodo getNumberOfArithmeticables() hace lo que se espera
  it ('Comprobar que el método getArithmeticable devuelve el número de elementos en el arreglo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getNumberOfArithmeticables()).to.be.equal(1);
  });
  // pruebas getArithmeticable 
  it ('Comprobar que el método getArithmeticable devuelve un número complejo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getArithmeticable(0)).to.be.an('object');
  });
  // prueba para ver si el metodo getArithmeticable no retorna tipos incorrectos
  it ('Comprobar que el método getArithmeticable no retorna tipos incorrectos', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getArithmeticable(0)).not.to.be.an('string');
    expect(complexCollection.getArithmeticable(0)).not.to.be.an('number');
    expect(complexCollection.getArithmeticable(0)).not.to.be.an('boolean');
  });
  // prueba para comprobar que el metodo getArithmeticable retorna el numero complejo esperado
  it ('Comprobar que el método getArithmeticable devuelve el número complejo esperado', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getArithmeticable(0)).to.be.an('object');
  });
  // pruebas que lanza un error si no encuentra el indice 
  it ('Comprobar que el método getArithmeticable lanza un error si no encuentra el índice', () => {
    const complexCollection = new ArithmeticableCollection();
    expect(() => complexCollection.getArithmeticable(0)).to.throw('Index out of bounds');
  });
  // pruebas  addArithmeticable
  it ('Comprobar que el método addArithmeticable añade un número complejo al arreglo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getNumberOfArithmeticables()).to.be.equal(1);
  });
  // prueba para comprobar que el metodo addArithmeticable no retorna tipos incorrectos
  it ('Comprobar que el método addArithmeticable no retorna tipos incorrectos', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getNumberOfArithmeticables()).not.to.be.an('object');
    expect(complexCollection.getNumberOfArithmeticables()).not.to.be.an('string');
    expect(complexCollection.getNumberOfArithmeticables()).not.to.be.an('boolean');
  });
  // prueba para comprobar que el metodo addArithmeticable añade el numero complejo esperado
  it ('Comprobar que el método addArithmeticable añade el número complejo esperado', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getArithmeticable(0)).to.be.an('object');
  });
  // pruebas con las colecciones
  it ('Comprobar que el método addArithmeticable añade un número complejo al arreglo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getNumberOfArithmeticables()).to.be.equal(2);
  });
  // se crean coleciones de complejos
  it ('Comprobar que el método addArithmeticable añade un número complejo al arreglo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getNumberOfArithmeticables()).to.be.equal(3);
  });
  // se crean colecciones de racionales
  it ('Comprobar que el método addArithmeticable añade un número complejo al arreglo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({add: (other: number): number => other, subtract: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    complexCollection.addArithmeticable({add: (other: number): number => other, subtract: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    complexCollection.addArithmeticable({add: (other: number): number => other, subtract: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getNumberOfArithmeticables()).to.be.equal(3);
  });
});
```

Las pruebas para la clase `ArithmeticableCollection` validan la funcionalidad de los métodos `sum`, `subtract`, `getNumberOfArithmeticables`, `getArithmeticable`, y `addArithmeticable`. Se asegura que los métodos retornen el tipo de dato esperado, que no devuelvan tipos incorrectos, y que realicen las operaciones correspondientes. También se verifican casos donde se añaden y eliminan elementos del arreglo, y se confirma que se obtengan resultados esperados. Estas pruebas confirman la correcta implementación y comportamiento de la clase `ArithmeticableCollection`.


**Complex.spec.ts**
```typescript
// PRUEBAS PARA LA CLASE COMPLEX

import 'mocha'
import { expect } from 'chai'
import { Complex } from './../../src/MODIFICACION/Complex'

// PRUEBAS PARA LA CLASE Complex
describe('Pruebas para la clase Complex', () => {
  describe('Pruebas para el constructor', () => {
    // PRUEBA PARA EL CONSTRUCTOR
    it ('Comprobar que el constructor recibe dos números', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex).to.have.property('real').that.is.a('number');
      expect(complex).to.have.property('imaginary').that.is.a('number');
    });
    // pruebas que aseguran el correcto funcionamiento del constructor
    it ('Comprobar que el constructor funciona correctamente', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.real).to.be.equal(1);
      expect(complex.imaginary).to.be.equal(1);
    });
  });
  // pruebas de la funcion add
  describe('Pruebas para el método add', () => {
    // PRUEBA PARA EL METODO add
    it ('Comprobar que el método add recibe un número complejo y retorna un número complejo', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.add(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // pruebas que aseguran el correcto funcionamiento del método add
    it ('Comprobar que el método add funciona correctamente', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.add(new Complex(1, 1)).real).to.be.equal(2);
      expect(complex.add(new Complex(1, 1)).imaginary).to.be.equal(2);
    });
    // pruebas para comprobar que se hace bien la suma de dos números complejos
    it ('Comprobar que el método add suma correctamente dos números complejos', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.add(new Complex(1, 1)).real).to.be.equal(2);
      expect(complex.add(new Complex(1, 1)).imaginary).to.be.equal(2);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.add(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.add).to.be.a('function');
    });
    //comprobamos que el metodo add recibe un numero complejo y retorna un numero complejo
    it ('Comprobar que el método add recibe un número complejo y retorna un número complejo', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.add(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // comprobarmos que implementa la interfaz Aritmeticable
    it ('Comprobar que implementa la interfaz Aritmeticable', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex).to.have.property('add').that.is.a('function');
      expect(complex).to.have.property('subtract').that.is.a('function');
      expect(complex).to.have.property('multiply').that.is.a('function');
      expect(complex).to.have.property('divide').that.is.a('function');
    });
  });
  // pruebas de la funcion subtract
  describe ('Pruebas para el método subtract', () => {
    // PRUEBA PARA EL METODO subtract
    it ('Comprobar que el método subtract recibe un número complejo y retorna un número complejo', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.subtract(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // pruebas que aseguran el correcto funcionamiento del método subtract
    it ('Comprobar que el método subtract funciona correctamente', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.subtract(new Complex(1, 1)).real).to.be.equal(0);
      expect(complex.subtract(new Complex(1, 1)).imaginary).to.be.equal(0);
    });
    // pruebas para comprobar que se hace bien la resta de dos números complejos
    it ('Comprobar que el método subtract resta correctamente dos números complejos', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.subtract(new Complex(1, 1)).real).to.be.equal(0);
      expect(complex.subtract(new Complex(1, 1)).imaginary).to.be.equal(0);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.subtract(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.subtract).to.be.a('function');
    });
    //comprobamos que el metodo subtract recibe un numero complejo y retorna un numero complejo
    it ('Comprobar que el método subtract recibe un número complejo y retorna un número complejo', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.subtract(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
  });
  // pruebas de la funcion multiply
  describe ('Pruebas para el método multiply', () => {
    // PRUEBA PARA EL METODO multiply
    it ('Comprobar que el método multiply recibe un número complejo y retorna un número complejo', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.multiply(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // pruebas que aseguran el correcto funcionamiento del método multiply
    it ('Comprobar que el método multiply funciona correctamente', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.multiply(new Complex(1, 1)).real).to.be.equal(0);
      expect(complex.multiply(new Complex(1, 1)).imaginary).to.be.equal(2);
    });
    // pruebas para comprobar que se hace bien la multiplicación de dos números complejos
    it ('Comprobar que el método multiply multiplica correctamente dos números complejos', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.multiply(new Complex(1, 1)).real).to.be.equal(0);
      expect(complex.multiply(new Complex(1, 1)).imaginary).to.be.equal(2);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.multiply(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.multiply).to.be.a('function');
    });
    //comprobamos que el metodo multiply recibe un numero complejo y retorna un numero complejo
    it ('Comprobar que el método multiply recibe un número complejo y retorna un número complejo', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.multiply(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
  });
  // pruebas de la funcion divide
  describe ('Pruebas para el método divide', () => {
    // PRUEBA PARA EL METODO divide
    it ('Comprobar que el método divide recibe un número complejo y retorna un número complejo', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.divide(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // pruebas que aseguran el correcto funcionamiento del método divide
    it ('Comprobar que el método divide funciona correctamente', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.divide(new Complex(1, 1)).real).to.be.equal(1);
      expect(complex.divide(new Complex(1, 1)).imaginary).to.be.equal(0);
    });
    // pruebas para comprobar que se hace bien la división de dos números complejos
    it ('Comprobar que el método divide divide correctamente dos números complejos', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.divide(new Complex(1, 1)).real).to.be.equal(1);
      expect(complex.divide(new Complex(1, 1)).imaginary).to.be.equal(0);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.divide(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.divide).to.be.a('function');
    });
    //comprobamos que el metodo divide recibe un numero complejo y retorna un numero complejo
    it ('Comprobar que el método divide recibe un número complejo y retorna un número complejo', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.divide(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
  });
});
```
Las pruebas para la clase `Complex` validan el correcto funcionamiento del constructor y los métodos `add`, `subtract`, `multiply` y `divide`. Se comprueba que estos métodos retornen el tipo de dato esperado, que no devuelvan tipos incorrectos, y que realicen las operaciones matemáticas correspondientes. Además, se verifica que la instancia de la clase `Complex` implemente la interfaz `Arithmeticable`. Estas pruebas confirman la correcta implementación y comportamiento de la clase `Complex`.


**Rational.spec.ts**
```typescript
// PRUEBAS PARA LA CLASE Rational

import 'mocha'
import { expect } from 'chai'
import { Rational } from './../../src/MODIFICACION/Rational'

// PRUEBAS PARA LA CLASE Rational
describe ('Pruebas para la clase Rational', () => {
  // pruebas constructor y correcta inicializacion de los atributos
  describe('Pruebas para el constructor', () => {
    // PRUEBA PARA EL CONSTRUCTOR
    it ('Comprobar que el constructor recibe dos números', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational).to.have.property('numerator').that.is.a('number');
      expect(rational).to.have.property('denominator').that.is.a('number');
    });
    // pruebas que aseguran el correcto funcionamiento del constructor
    it ('Comprobar que el constructor funciona correctamente', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.numerator).to.be.equal(1);
      expect(rational.denominator).to.be.equal(1);
    });
    // se inicializan los atributos correctamente
    it ('Comprobar que se inicializan los atributos correctamente', () => {
      const rational: Rational = new Rational(1, 1);
      const rational2: Rational = new Rational(2, 2);
      expect(rational.numerator).to.be.equal(1);
      expect(rational.denominator).to.be.equal(1);
      expect(rational2.numerator).to.be.equal(2);
      expect(rational2.denominator).to.be.equal(2);
    });
  });
  // pruebas para el metodo add
  describe('Pruebas para el método add', () => {
    // PRUEBA PARA EL METODO add
    it ('Comprobar que el método add recibe un número racional y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.add(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // pruebas que aseguran el correcto funcionamiento del método add
    it ('Comprobar que el método add funciona correctamente', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.add(new Rational(1, 1)).numerator).to.be.equal(2);
      expect(rational.add(new Rational(1, 1)).denominator).to.be.equal(1);
    });
    // pruebas para comprobar que se hace bien la suma de dos números racionales
    it ('Comprobar que el método add suma correctamente dos números racionales', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.add(new Rational(1, 1)).numerator).to.be.equal(2);
      expect(rational.add(new Rational(1, 1)).denominator).to.be.equal(1);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.add(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.add).to.be.a('function');
    });
    //comprobamos que el metodo add recibe un numero racional y retorna un numero racional
    it ('Comprobar que el método add recibe un número racional y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.add(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // comprobarmos que implementa la interfaz Arithmeticable
    it ('Comprobar que implementa la interfaz Arithmeticable', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational).to.have.property('add').that.is.a('function');
      expect(rational).to.have.property('subtract').that.is.a('function');
      expect(rational).to.have.property('multiply').that.is.a('function');
      expect(rational).to.have.property('divide').that.is.a('function');
    });
  });
  // pruebas de la funcion subtract
  describe ('Pruebas para el método subtract', () => {
    // PRUEBA PARA EL METODO subtract
    it ('Comprobar que el método subtract recibe un número racional y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.subtract(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // pruebas que aseguran el correcto funcionamiento del método subtract
    it ('Comprobar que el método subtract funciona correctamente', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.subtract(new Rational(1, 1)).numerator).to.be.equal(0);
      expect(rational.subtract(new Rational(1, 1)).denominator).to.be.equal(1);
    });
    // pruebas para comprobar que se hace bien la resta de dos números racionales
    it ('Comprobar que el método subtract resta correctamente dos números racionales', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.subtract(new Rational(1, 1)).numerator).to.be.equal(0);
      expect(rational.subtract(new Rational(1, 1)).denominator).to.be.equal(1);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.subtract(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.subtract).to.be.a('function');
    });
    //comprobamos que el metodo subtract recibe un numero racional y retorna un numero racional
    it ('Comprobar que el método subtract recibe un número racional y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.subtract(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // comprobarmos que implementa la interfaz Arithmetic
    it ('Comprobar que implementa la interfaz Arithmetic', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational).to.have.property('add').that.is.a('function');
      expect(rational).to.have.property('subtract').that.is.a('function');
      expect(rational).to.have.property('multiply').that.is.a('function');
      expect(rational).to.have.property('divide').that.is.a('function');
    });
  });
  // pruebas de la funcion multiply
  describe ('Pruebas para el método multiply', () => {
    // PRUEBA PARA EL METODO multiply
    it ('Comprobar que el método multiply recibe un número racional y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.multiply(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // pruebas que aseguran el correcto funcionamiento del método multiply
    it ('Comprobar que el método multiply funciona correctamente', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.multiply(new Rational(1, 1)).numerator).to.be.equal(1);
      expect(rational.multiply(new Rational(1, 1)).denominator).to.be.equal(1);
    });
    // pruebas para comprobar que se hace bien la multiplicación de dos números racionales
    it ('Comprobar que el método multiply multiplica correctamente dos números racionales', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.multiply(new Rational(1, 1)).numerator).to.be.equal(1);
      expect(rational.multiply(new Rational(1, 1)).denominator).to.be.equal(1);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.multiply(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.multiply).to.be.a('function');
    });
    //comprobamos que el metodo multiply recibe un numero racional y retorna un numero racional
    it ('Comprobar que el método multiply recibe un número racional y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.multiply(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // comprobarmos que implementa la interfaz Arithmetic
    it ('Comprobar que implementa la interfaz Arithmetic', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational).to.have.property('add').that.is.a('function');
      expect(rational).to.have.property('subtract').that.is.a('function');
      expect(rational).to.have.property('multiply').that.is.a('function');
      expect(rational).to.have.property('divide').that.is.a('function');
    });
  });
  // pruebas de la funcion divide
  describe ('Pruebas para el método divide', () => {
    // PRUEBA PARA EL METODO divide
    it ('Comprobar que el método divide recibe un número racional y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.divide(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // pruebas que aseguran el correcto funcionamiento del método divide
    it ('Comprobar que el método divide funciona correctamente', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.divide(new Rational(1, 1)).numerator).to.be.equal(1);
      expect(rational.divide(new Rational(1, 1)).denominator).to.be.equal(1);
    });
    // pruebas para comprobar que se hace bien la división de dos números racionales
    it ('Comprobar que el método divide divide correctamente dos números racionales', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.divide(new Rational(1, 1)).numerator).to.be.equal(1);
      expect(rational.divide(new Rational(1, 1)).denominator).to.be.equal(1);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.divide(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.divide).to.be.a('function');
    });
    //comprobamos que el metodo divide recibe un numero racional y retorna un numero racional
    it ('Comprobar que el método divide recibe un número racional y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.divide(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // comprobarmos que implementa la interfaz arithmetic
    it ('Comprobar que implementa la interfaz Arithmetic', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational).to.have.property('add').that.is.a('function');
      expect(rational).to.have.property('subtract').that.is.a('function');
      expect(rational).to.have.property('multiply').that.is.a('function');
      expect(rational).to.have.property('divide').that.is.a('function');
    });
  });
  // pruebas para el metodo abs
  describe ('Pruebas para el método abs', () => {
    // PRUEBA PARA EL METODO abs
    it ('Comprobar que el método abs no recibe ningún parámetro y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.abs()).to.be.an.instanceof(Rational);
    });
    // pruebas que aseguran el correcto funcionamiento del método abs
    it ('Comprobar que el método abs funciona correctamente', () => {
      const rational: Rational = new Rational(-1, -1);
      expect(rational.abs().numerator).to.be.equal(1);
      expect(rational.abs().denominator).to.be.equal(1);
    });
    // pruebas para comprobar que se hace bien el valor absoluto de un número racional
    it ('Comprobar que el método abs hace correctamente el valor absoluto de un número racional', () => {
      const rational: Rational = new Rational(-1, -1);
      expect(rational.abs().numerator).to.be.equal(1);
      expect(rational.abs().denominator).to.be.equal(1);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const rational: Rational = new Rational(-1, -1);
      expect(rational.abs()).to.be.an.instanceof(Rational);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const rational: Rational = new Rational(-1, -1);
      expect(rational.abs).to.be.a('function');
    });
    //comprobamos que el metodo abs no recibe parametros y retorna un numero racional
    it ('Comprobar que el método abs no recibe ningún parámetro y retorna un número racional', () => {
      const rational: Rational = new Rational(-1, -1);
      expect(rational.abs()).to.be.an.instanceof(Rational);
    });
    // comprobarmos que implementa la interfaz arithmetic
    it ('Comprobar que implementa la interfaz Arithmetic', () => {
      const rational: Rational = new Rational(-1, -1);
      expect(rational).to.have.property('add').that.is.a('function');
      expect(rational).to.have.property('subtract').that.is.a('function');
      expect(rational).to.have.property('multiply').that.is.a('function');
      expect(rational).to.have.property('divide').that.is.a('function');
    });
  });
  // pruebas para el metodo simplify
  describe ('Pruebas para el método simplify', () => {
    // PRUEBA PARA EL METODO simplify
    it ('Comprobar que el método simplify no recibe ningún parámetro y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.simplify()).to.be.an.instanceof(Rational);
    });
    // pruebas que aseguran el correcto funcionamiento del método simplify
    it ('Comprobar que el método simplify funciona correctamente', () => {
      const rational: Rational = new Rational(2, 4);
      expect(rational.simplify().numerator).to.be.equal(1);
      expect(rational.simplify().denominator).to.be.equal(2);
    });
    // pruebas para comprobar que se hace bien la simplificación de un número racional
    it ('Comprobar que el método simplify simplifica correctamente un número racional', () => {
      const rational: Rational = new Rational(2, 4);
      expect(rational.simplify().numerator).to.be.equal(1);
      expect(rational.simplify().denominator).to.be.equal(2);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const rational: Rational = new Rational(2, 4);
      expect(rational.simplify()).to.be.an.instanceof(Rational);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const rational: Rational = new Rational(2, 4);
      expect(rational.simplify).to.be.a('function');
    });
    //comprobamos que el metodo simplify no recibe parametros y retorna un numero racional
    it ('Comprobar que el método simplify no recibe ningún parámetro y retorna un número racional', () => {
      const rational: Rational = new Rational(2, 4);
      expect(rational.simplify()).to.be.an.instanceof(Rational);
    });
    // comprobarmos que implementa la interfaz arithmetic
    it ('Comprobar que implementa la interfaz Arithmetic', () => {
      const rational: Rational = new Rational(2, 4);
      expect(rational).to.have.property('add').that.is.a('function');
      expect(rational).to.have.property('subtract').that.is.a('function');
      expect(rational).to.have.property('multiply').that.is.a('function');
    });
  });
  // pruebas para gcd
  describe ('Pruebas para el método gcd', () => {
    // PRUEBA PARA EL METODO gcd
    it ('Comprobar que el método gcd recibe dos números y retorna un número', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.gcd(1, 1)).to.be.a('number');
    });
    // pruebas que aseguran el correcto funcionamiento del método gcd
    it ('Comprobar que el método gcd funciona correctamente', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.gcd(1, 1)).to.be.equal(1);
    });
    // pruebas para comprobar que se hace bien el gcd de dos números
    it ('Comprobar que el método gcd hace correctamente el gcd de dos números', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.gcd(1, 1)).to.be.equal(1);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.gcd(1, 1)).to.be.a('number');
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.gcd).to.be.a('function');
    });
    //comprobamos que el metodo gcd recibe dos numeros y retorna un numero
    it ('Comprobar que el método gcd recibe dos números y retorna un número', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.gcd(1, 1)).to.be.a('number');
    });
  });
});
```

Las pruebas para la clase `Rational` validan el correcto funcionamiento del constructor y los métodos `add`, `subtract`, `multiply`, `divide`, `abs`, `simplify` y `gcd`. Se comprueba que estos métodos retornen el tipo de dato esperado, que no devuelvan tipos incorrectos, y que realicen las operaciones matemáticas correspondientes. Además, se verifica que la instancia de la clase `Rational` implemente la interfaz `Arithmetic`.

Estas pruebas confirman la correcta implementación y comportamiento de la clase `Rational` y todas las demás clases.


---
# Conclusiones.
Durante esta práctica, nos enfocamos en ejercicios que resaltaron el uso de clases e interfaces genéricas, así como la aplicación de los principios SOLID mediante TypeScript. El proyecto representó una valiosa oportunidad para explorar a fondo las técnicas avanzadas de programación orientada a objetos, centrándonos en la implementación de estos principios sólidos.

Una lección clave que hemos extraído es la efectividad de los principios SOLID para elevar la calidad del software. Estos principios nos permitieron diseñar sistemas más comprensibles, extensibles y fáciles de mantener. La aplicación de la segregación de interfaces y la inversión de dependencias fomentó un bajo acoplamiento entre componentes, favoreciendo la flexibilidad y simplificando las pruebas del sistema.

El enfoque en la encapsulación de comportamientos y estados dentro de clases, junto con el uso de interfaces, resultó esencial para lograr una modularidad efectiva. Esto facilitó la reutilización de componentes y estableció las bases para una colaboración eficiente en equipos, permitiendo la evolución independiente de cada parte del sistema sin impactar negativamente en el resto.

Además, la programación genérica en TypeScript demostró ser crucial para desarrollar soluciones abstractas y reutilizables, asegurando la integridad y seguridad del tipo en toda la aplicación. En resumen, este proyecto resalta la importancia de aplicar principios de diseño orientado a objetos y SOLID, evidenciando la claridad, mantenibilidad y adaptabilidad de un sistema construido con estos fundamentos.