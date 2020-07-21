/*Catalina Violante
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{	
	var notaGenerada;
	numeroGenerado = parseInt(notaGenerada);

	//Genero el número RANDOM entre 1 y 10 
	notaGenerada = Math.floor(Math.random() * 10) + 1;

	if(notaGenerada>3 && notaGenerada<9)
	{
		alert("Su nota es "+ notaGenerada + ". Aprobó!");
	}
	else if (notaGenerada>8)
	{
		alert("Su nota es "+ notaGenerada + ". Excelente!");
	}
	else
	{
		alert("Su nota es "+ notaGenerada + ". Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN