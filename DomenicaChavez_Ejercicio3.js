var primeraMatriz=[ 3, 2, 1, 1, 2, 3, 2, 3, 1];
var segundaMatriz=[1, 1, 2, 2, 1, 1, 1, 2, 1];
console.log(primeraMatriz);
console.log("-----------------------------------")
console.log(segundaMatriz);
console.log("-----------------------------------")
for (i=0;i<primeraMatriz.length;i++){
    dato1=primeraMatriz[i];
    dato2=segundaMatriz[i];
    suma=dato1+dato2;
    multiplicacion=dato1*dato2;
    console.log(dato1+" + "+dato2+" = "+suma)
    console.log(dato1+" * "+dato2+" = "+multiplicacion)
    console.log("-----------------------------------")
}