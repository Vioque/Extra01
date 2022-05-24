const empleado = {
    bruto: 24000,
    hijos: 3,
    pagas: 12
}

//Para interaccionar con el usuario podríamos guardar en los valores del objeto los datos introducidos en prompt
empleado.bruto = prompt("Introduzca el bruto anual: ")
empleado.hijos = prompt("Introduzca el número de hijos: ")
empleado.pagas = prompt("Introduzca el número de pagas: ")

let netoAnual
let netoMensual
let retencion

if (empleado.bruto <= 12450) {
    retencion = 0.19;
    netoAnual = empleado.hijos > 0 ? empleado.bruto - empleado.bruto * (retencion - 0.02) : empleado.bruto - empleado.bruto * retencion;
    } else if (empleado.bruto > 12450 && empleado.bruto <= 19900) {
    retencion = 0.24;
    netoAnual = empleado.hijos > 0 ? empleado.bruto - empleado.bruto * (retencion - 0.02) : empleado.bruto - empleado.bruto * retencion;
} else if (empleado.bruto >= 20200 && empleado.bruto <= 35199) {
    retencion = 0.30;
    netoAnual = empleado.hijos > 0 ? empleado.bruto - empleado.bruto * (retencion - 0.02) : empleado.bruto - empleado.bruto * retencion;
} else if (empleado.bruto >= 35200 && empleado.bruto <= 59999) {
    // Retención calculada con el valor, sin uso de variable
    netoAnual = empleado.hijos > 0 ? empleado.bruto - empleado.bruto * 0.35 : empleado.bruto - empleado.bruto * 0.37
} else if (empleado.bruto >= 60000 && empleado.bruto <= 299999) {
    retencion = 0.45;
    netoAnual = empleado.hijos > 0 ? empleado.bruto - empleado.bruto * (retencion - 0.02) : empleado.bruto - empleado.bruto * retencion;
} else {
    retencion = 0.47;
    netoAnual = empleado.hijos > 0 ? empleado.bruto - empleado.bruto * (retencion - 0.02) : empleado.bruto - empleado.bruto * retencion;
}

netoMensual = netoAnual / empleado.pagas

console.log('El neto anual de su nómina es: ', netoAnual)
console.log('El neto mensual de su nómina es: ', netoMensual)