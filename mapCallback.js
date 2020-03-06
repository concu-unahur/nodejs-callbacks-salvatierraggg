//https://docs.python.org/2/library/threading.html  esto es para el tp1
function miMap(array,funcion) {
    var nuevoArray =[]
    for (i=0;i<=array.lenght();i++)
      nuevoArray.add(funcion(array[i]))
    // Completar: acá se llena el array nuevo
    return nuevoArray;
  }

function porDos(nro) {
    return nro*2
}

// Probando miMap
arrayViejo = [1,2,3,4,5]
var arrayNuevo = miMap(arrayViejo,porDos)
console.log(arrayNuevo) // arrayNuevo = [2,4,6,8,10] 
