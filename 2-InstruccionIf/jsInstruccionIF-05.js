/*Catalina Violante
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
Buscar dos maneras de hacer lo mismo.*/


function mostrar()
{
	//tomo la edad  
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);


	/*if(edad>12 && edad<18) //<13 o >17
	{
		
	}
	else
	{
		alert("La persona no es adolescente."); //forma menos performante

	}*/

	if(edad<12 || edad>17)			//forma mas performante
	{
		alert("La persona no es adolescente.");
	}
/*
	if(!(edad>12 && edad<18))
	{
		alert("La persona no es adolescente.");
	}*/
}//FIN DE LA FUNCIÓN