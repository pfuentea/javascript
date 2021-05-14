
//1.-Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

function printArray255() {
    var v_resultado=[] ;
    for(var i=1;i<=255;i++){
		v_resultado.push(i);
	}
    return v_resultado;
}

/*2.-Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. */

function SumaPares(){
    var v_suma=0;
    let v_max=1000;
    for (let i = 0; i <= v_max; i+=2) {
        v_suma+=i;
    }
    return v_suma;
}

/*3.-Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999). */

function SumaImpares(){
    var v_suma=0;
    let v_max=5000;
    for (let i = 1; i <= v_max; i+=2) {
        v_suma+=i;
    }
    return v_suma;
}

/*4.-Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).  */

function printSumArray(p_arreglo) {
    var v_suma = 0;
    for (var i = 0; i < p_arreglo.length; i++) {
        v_suma+=p_arreglo[i];
    }
    return v_suma;
}

/*5.-Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7).  */

function MaxArray(p_arreglo){
    if (p_arreglo.length>0){
        var v_maximo=p_arreglo[0];
        for(let i=0;i<p_arreglo.length;i++ ){
            if(p_arreglo[i]>v_maximo  ){
                v_maximo=p_arreglo[i];
            }
        }
        return v_maximo;
    }
    return false;
}

/*6.-Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2). */

function Promedio(p_arreglo){
    if(p_arreglo.length>0){
        return printSumArray(p_arreglo)/p_arreglo.length;
    }
    return false;
}
// Promedio([1,3,5,7,20])
/*7.-Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.*/

function ArrayImpares(){
    var v_max=50;
    var v_resultado=[];
    for(let i=1;i<v_max;i+=2){
        v_resultado.push(i);
    }
    return v_resultado;
}

/*8.-Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). */
function MayorQueY(p_y,p_arreglo){
    var v_resultado=[];
    for(let i=0;i<p_arreglo.length;i++){
        if(p_arreglo[i]>p_y){
            v_resultado.push(p_arreglo[i]);
        }
    }
    return v_resultado;
}

/*9.-Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).*/

function cuadrados(p_arreglo){
    for(let i=0;i<p_arreglo.length;i++){
        p_arreglo[i]=p_arreglo[i]*p_arreglo[i];
    }
    return p_arreglo;
}

/*10.-Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]). */

function ConvertirNegativoToZero(p_arreglo){
    for(let i=0;i<p_arreglo.length;i++){
        if(p_arreglo[i]<0){
            p_arreglo[i]=0;
        }
    }
    return p_arreglo;
}

/*11.-Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).*/
function MaxMinAvg(p_arreglo){
    var v_max;
    var v_min;
    var v_avg;
    var v_array_result=[0,0,0];
    if(p_arreglo.length>0){
        v_array_result[0]=MaxArray(p_arreglo);
        v_min=p_arreglo[0];
        for(let i=0;i<p_arreglo.length;i++){
            if(p_arreglo[i]<v_min){
                v_min=p_arreglo[i];
            }
        }
        v_array_result[1]=v_min;
        v_array_result[2]= Promedio(p_arreglo);
        return v_array_result;
    }
    return false;
}

// MaxMinAvg([1,5,10,-2])

/*12.-Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). */
function SwapInitLast(p_arreglo){
    
    if(p_arreglo.length>1){
        let aux=p_arreglo[p_arreglo.length-1];
        p_arreglo[p_arreglo.length-1]=p_arreglo[0];
        p_arreglo[0]=aux;
    }
    return p_arreglo;
}

/*13.-De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].*/

function NegativoToDojo(p_arreglo){
    for(let i=0;i<p_arreglo.length;i++){
        if(p_arreglo[i]<0){
            p_arreglo[i]='Dojo';
        }
    }
    return p_arreglo;
}

//NegativoToDojo([-1,-3,2])