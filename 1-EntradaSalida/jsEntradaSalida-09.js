/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var porcentaje;
	var resultadoImporteAumento;


	sueldo = txtIdSueldo.value;

	sueldo = parseFloat(sueldo);
	porcentaje = parseFloat(porcentaje);
	//resultadoImporteAumento = parseFloat(resultadoImporteAumento);

	porcentaje = sueldo * (10/100);

	resultadoImporteAumento = sueldo + porcentaje;

	alert("El importe a aumentar es igual a " + porcentaje);

	txtIdResultado.value = resultadoImporteAumento;


}
