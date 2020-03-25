function tablaDeMultiplicar(numero)
{
    let i=0;
    let resultado=0;

    do
    {
        //i++;
        resultado= numero*i;
        console.log(numero +"*"+i+"="+resultado);
        i++;
    }
    while(i != 11);
}
tablaDeMultiplicar(5);
