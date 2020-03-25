/*function loro(repetir)
{
    for(var i=1; i<=5; i++)
    {
    console.log(repetir);
    }
}
loro("hola");
*/
function noParesDeContarImparesHasta(numero)
{
    var impares=0;
    for(var i=1; i<=numero; i++)
    {
        if(i%2 != 0)
        {
            impares= impares+1;
        }
    }
 return console.log(impares);

}
noParesDeContarImparesHasta(11);