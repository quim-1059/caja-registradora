const prompt = require('prompt-sync')();

let total=0;
let cantidad=0;
let precio;

do{
    precio=prompt("ingrese el precio del producto (0 para finalizar):");
if(precio===null){
    break;
}
precio=Number(precio);
 
if(isNaN(precio)|| precio<0){
    alert("error:ingrese un precio valido");
}
else if(precio>0){
    total += precio;
    cantidad++;
}
}while(precio!==0);

console.log("resumen final de compra");
console.log("cantidad de productos: " + cantidad);
console.log("total a pagar: $" + total.toFixed(2));
