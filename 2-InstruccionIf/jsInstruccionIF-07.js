/*Catalina Violante
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/


function mostrar()
{
	var edad;
	var estadoCivilSelect;
	
	edad = txtIdEdad.value;
	estadoCivilSelect = estadoCivil.value;

	edad = parseInt(edad);

	if(edad<18 && estadoCivilSelect!="Soltero")
	{

		alert("Es muy pequeño para NO ser soltero.");

		/*if(estadoCivilSelect == "Casado" || estadoCivilSelect == "Divorciado")
		{

			alert("Es muy pequeño para NO ser soltero.");
		
		}*/
	}


}//FIN DE LA FUNCIÓN