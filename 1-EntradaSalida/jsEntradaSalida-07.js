/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numeroUnoSuma;
	var numeroDosSuma;
	var sumaResultado;

	numeroUnoSuma = txtIdNumeroUno.value;
	numeroDosSuma = txtIdNumeroDos.value;

	numeroUnoSuma = parseInt(numeroUnoSuma);
	numeroDosSuma = parseInt(numeroDosSuma);

	sumaResultado = numeroUnoSuma + numeroDosSuma;

	alert("El resultado de la suma es igual a " + sumaResultado);
		
}

function restar()
{
	var numeroUnoResta;
	var numeroDosResta;
	var restaResultado;

	numeroUnoResta = txtIdNumeroUno.value;
	numeroDosResta = txtIdNumeroDos.value;

	numeroUnoResta = parseInt(numeroUnoResta);
	numeroDosResta = parseInt(numeroDosResta);

	restaResultado = numeroUnoResta - numeroDosResta;

	alert("El resultado de la resta es igual a " + restaResultado);

}

function multiplicar()
{ 	
	var numeroUnoMultiplicacion;
	var numeroDosMultiplicacion;
	var multiplicacionResultado;

	numeroUnoMultiplicacion = txtIdNumeroUno.value;
	numeroDosMultiplicacion = txtIdNumeroDos.value;

	numeroUnoMultiplicacion = parseInt(numeroUnoMultiplicacion);
	numeroDosMultiplicacion = parseInt(numeroDosMultiplicacion);

	multiplicacionResultado = numeroUnoMultiplicacion * numeroDosMultiplicacion;

	alert("El resultado de la multiplicacion es igual a " + multiplicacionResultado);

}

function dividir()
{
	var numeroUnoDivision;
	var numeroDosDivision;
	var divisionResultado;

	numeroUnoDivision = txtIdNumeroUno.value;
	numeroDosDivision = txtIdNumeroDos.value;

	numeroUnoDivision = parseInt(numeroUnoDivision);
	numeroDosDivision = parseInt(numeroDosDivision);

	divisionResultado = numeroUnoDivision / numeroDosDivision;

	alert("El resultado de la division es igual a " + divisionResultado);
}

