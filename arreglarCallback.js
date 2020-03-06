function suma(numero_uno,numero_dos){
    setTimeout(function(){
       var resultado = numero_uno + numero_dos;
       return resultado;
    }, 1000);//espera 1 seg
}
 
var resultado = suma(2,5)
 
console.log(resultado);
 
/*function imprimir(resultado){
    console.log(resultado);
}*/ 
 
function sumaBien(numero_uno,numero_dos,imprimir){
    setTimeout(imprimir(
        numero_uno + numero_dos)
     , 1000)/*espera 1 seg*/
     
    // completar...
}

/* Descomentá esta parte para probar la función sumaBien*/
sumaBien(2,5,function(resultado){
    console.log(resultado);
})


