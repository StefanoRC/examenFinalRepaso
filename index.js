function sumar (num1,num2){
	let resultado = num1 + num2;
	return resultado
}

function mostrarSuma(num1, num2){
	let resultadoSuma = sumar(num1, num2);
	 //console.log("el resultado de la suma es: " + resultadoSuma) otra opcion
	 return resultadoSuma
}

console.log(mostrarSuma(20, 5))