/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var cantidadTotalAlambre;

	largoTerreno = txtIdLargo.value;
	anchoTerreno = txtIdAncho.value;

	largoTerreno = parseFloat(largoTerreno);
	anchoTerreno = parseFloat(anchoTerreno);

	cantidadTotalAlambre = ((largoTerreno * 2) + (anchoTerreno * 2)) * 3;

	alert("La cantidad de alambre necesaria será " + cantidadTotalAlambre + " metro/s.");

}
function Circulo () 
{
	var radioTerreno;
	var cantidadTotalAlambre;

	radioTerreno = txtIdRadio.value;

	radioTerreno = parseFloat(radioTerreno);

	cantidadTotalAlambre = (2 * Math.PI * radioTerreno) * 3;

	alert("La cantidad de alambre necesaria será " + cantidadTotalAlambre.ToFixed(2) + " metro/s");
	
}

function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var sumaMedidasTerreno;
	var bolsasCemento;
	var bolsasCal;
	var cantidadTotalAlambre;

	largoTerreno = txtIdLargo.value;
	anchoTerreno = txtIdAncho.value;

	largoTerreno = parseFloat(largoTerreno);
	anchoTerreno = parseFloat(anchoTerreno);

	sumaMedidasTerreno = largoTerreno * anchoTerreno; 

	bolsasCemento = sumaMedidasTerreno * (2);
	bolsasCal = sumaMedidasTerreno * (3);

	alert("Se necesitarian " + bolsasCemento + " bolsas de cemento y " + bolsasCal + " bolsas de cal");


}