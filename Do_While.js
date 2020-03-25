function encontreUn5(numeros)
{
    let i=0; 
    do
    {
        if(numeros[i] !==5)
        {
            console.log(numeros[i]);
        }
        i++;
    }
    while(numeros[i] != 5);
    console.log("Se encontró un 5");
}
encontreUn5(1,3,7,5,8,3);