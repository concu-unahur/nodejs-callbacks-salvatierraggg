function cambia(x, unaFuncion) {
    z = x + 1
    y = unaFuncion(z)
    return y
}
//en alguna funcion hay callback?...    sip    

function porDiez(x) {
    y = x*10
    return y
}


function porCinco(x) {
    y = x*5
    return y
}


valor = 2 //no se puede modificar


// que el valor de res1 sea 15
var res1 = cambia(valor,porCinco)//cambia(...completar)
console.log(res1)


// que el valor de res2 sea 30
var res2 = cambia(valor,porDiez)//cambia(...completar)
console.log(res2)


var res3 = cambia(cambia(valor,porCinco),porDiez)
// ¿Cuánto vale res3 acá? No vale hacer console.log ni nada por el estilo.
//(((2+1)*5)+1)*10
//160