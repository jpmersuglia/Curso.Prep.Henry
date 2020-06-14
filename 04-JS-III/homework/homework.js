// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  let arreglo = array[0];
  return arreglo;
}
devolverPrimerElemento([1,2,3,4]);

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  let last = array.length - 1;
  let arreglo = array[last];
  return arreglo;
}
devolverUltimoElemento([5,6,7,8]);

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  let total = array.length;
  return total;
}
obtenerLargoDelArray([11,12,13,14]);

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(i = 0; i < array.length; i++){
    array[i]++;
  }
  return array;
}
incrementarPorUno([1,2,3,4,5,6]);

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}
agregarItemAlFinalDelArray([1,2,3,4],5);

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
agregarItemAlComienzoDelArray([5,6,7,8],4);

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var result = palabras.join(' ');
  return result;
}
dePalabrasAFrase(['Hello','World!']);

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(i = 0; i < array.length; i++){
    if(array[i] === elemento){
      return true;
    }
  }
  return false;
}
arrayContiene([1,2,3,4],2);

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  sum = 0;
  for(i = 0; i < numeros.length; i++){
    sum += numeros[i];
  }
  return sum;
}
agregarNumeros([1,2,3]);

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var total = 0;
  for(i = 0; i < resultadosTest.length; i++){
    total += resultadosTest[i];
  }
  var promedio = total / resultadosTest.length;
  return promedio;
}
promedioResultadosTest([1,2,3]);

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var masGrande = 0;
  for(i = 0; i<=masGrande; i++){
    if(numeros[i]>masGrande){
      var masGrande = numeros[i];
    }
  }
  return masGrande;
}
numeroMasGrande([2,88,7,9]);

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if(arguments.length < 1) return 0;
  total = 1;

  for(i = 0; i < arguments.length; i++){
    total = total * arguments[i];
  }
  return total;
}
multiplicarArgumentos(2,5);

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
