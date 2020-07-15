/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var gradosFahrenheit;
	var gradosPasadosACentigrados;

	gradosFahrenheit = txtIdTemperatura.value;

	gradosFahrenheit = parseFloat(gradosFahrenheit);

	gradosPasadosACentigrados = (gradosFahrenheit - 32) / 1.8;

	alert(gradosFahrenheit + "°F equivale/n a " + gradosPasadosACentigrados.toFixed(1) + "°C");
}

function CentigradosFahrenheit () 
{
	var gradosCentigrados;
	var gradosPasadosAFahrenheit;

	gradosCentigrados = txtIdTemperatura.value;

	gradosCentigrados = parseFloat(gradosCentigrados);

	gradosPasadosAFahrenheit = (gradosCentigrados * (9/5)) + 32;

	alert(gradosCentigrados + "°C equivale/n a " + gradosPasadosAFahrenheit.toFixed(1) + "°F.");
}
