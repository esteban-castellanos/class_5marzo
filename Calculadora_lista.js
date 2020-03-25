/*Sumar 2 numeros, 
es decir paso 2 valores y la funcion retorna la suma de ambos*/
function sumar(valor1,valor2)
{
return valor1 + valor2;
}

/*Restar 2 numeros, 
es decir paso 2 valores y la funcion retorna la resta de ambos, el resultado debe ser positivo*/
function restar(valor1,valor2)
{
    let resultado = valor1 - valor2;
    if(resultado>=0)
    {
        return resultado;
    }
    else
    {
        return "El resultado de la resta es un numero negatvo";
    }
}

/*Multiplicar 2 numeros, 
es decir paso 2 valores y la funcion retorna el producto de ambos*/
function multiplicar(valor1,valor2)
{
return valor1 * valor2;
}

/*Dividir 2 numeros, 
es decir paso 2 valores y la funcion retorna el producto de ambos*/
function dividir(valor1,valor2)
{
    if(valor2 != 0 )
    {
        return valor1/valor2;
    }
    else
    {
        return "El denominador no puede ser 0";
    }
}

console.log(sumar(1,3));
console.log(restar(9,4));
console.log(multiplicar(2,2));
console.log(dividir(10,2));