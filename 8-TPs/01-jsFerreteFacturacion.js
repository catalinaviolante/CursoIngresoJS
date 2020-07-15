/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoSuma;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	resultadoSuma = precioUno + precioDos + precioTres;

	alert("El precio total es igual a $" + resultadoSuma.toFixed(2));

}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaPrecios;
	var resultadoPromedio;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	sumaPrecios = precioUno + precioDos + precioTres;

	resultadoPromedio = sumaPrecios / 3;

	alert("El promedio entre los tres importes es de $" + resultadoPromedio.toFixed(2));


}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaPrecios;
	var precioFinalImpuesto;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	sumaPrecios = precioUno + precioDos + precioTres;

	precioFinalImpuesto = sumaPrecios + (21/100);

	alert("El precio total más IVA es igual a $" + precioFinalImpuesto.toFixed(2));

}