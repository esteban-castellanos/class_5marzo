/*
function ejemplo()
{
    return console.log("Hola, soy una función")
}
ejemplo();
*/
/*function esPar(numero)
{
    if(numero%2 == 0) 
    {
     return console.log(true);

    }
    else 
    {
     return console.log(false);
    }
}
    
esPar(3);
*/
/*
function anterior(valor1)
{
    return valor1- 1;
}

function triple(valor1)
{
    return valor1 *3;
}

function anteriorDelTriple(valor1)
{
    return console.log(anterior(triple(valor1)));
    
}
anteriorDelTriple(4);
*/

function tengoClases(dia) {
	switch (dia) {
    	//Escribe tu código aquí
        case "lunes":
        case "miercoles":
        case "viernes":
        return console.log("tenés clases");
        break;
        default:
        return console.log("no tenés clases");
	}
}
tengoClases("martes");