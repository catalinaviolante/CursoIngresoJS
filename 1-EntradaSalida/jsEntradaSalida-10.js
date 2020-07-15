/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var resultadoImporteDescuento;


	importe = txtIdImporte.value;

	importe = parseFloat(importe);
	porcentaje = parseFloat(porcentaje);
	//resultadoImporteAumento = parseFloat(resultadoImporteDescuento);

	porcentaje = importe * (25/100);

	resultadoImporteDescuento = importe - porcentaje;

	alert("El importe a descontar es igual a " + porcentaje);

	txtIdResultado.value = resultadoImporteDescuento;
}
