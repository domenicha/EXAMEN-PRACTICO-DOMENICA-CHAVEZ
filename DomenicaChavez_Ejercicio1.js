var horasAcumuladas;
horasAcumuladas=41;
if (horasAcumuladas === 40){ //horas Ordinarias
    let pagoHorasOrdinarias=horasAcumuladas*265;
    let horasExtra=0;
    let pagoHorasExtra=0;
    console.log("El total a pagar por horas laborales normal (40 horas) es de: "+pagoHorasOrdinarias);
    console.log("El total a pagar por horas extra ("+horasExtra+" horas) es de: "+pagoHorasExtra);
}else if(horasAcumuladas > 40){ //horas Extra
    let horasExtra=horasAcumuladas-40;
    let pagoHorasOrdinarias=40*265;
    let pagoHorasExtra=horasExtra*350;
    console.log("El total a pagar por horas laborales normal (40 horas) es de: "+pagoHorasOrdinarias);
    console.log("El total a pagar por horas extra ("+horasExtra+" horas) es de: "+pagoHorasExtra);
}else { //No cumple con las horas ordinarias
    console.log("No cumple con el numero de horas")
}
