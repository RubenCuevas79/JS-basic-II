//Bienvenida a Javascript básico parte II, donde veremos condicionales y bucles.

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Arrays

//Ejercicio 1: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí
const postres=['helado','tarta','pastel'];

console.log(postres);
//Objetos

//Ejercicio 2: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí
const coder = { 
    nombre:'raul',
    edad:18
    }; // objeto separado con puntos y al final no se pone ,
console.log(coder);
//Ejercicio 3: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí
console.log(typeof postres );
console.log(typeof coder.nombre); /* Usaremos typeof saca el tipo de valor que guarda nombre string */
console.log(typeof coder.edad);   /* number typeof sacar el tipo de valor que guarda edad */
//CONDICIONALES

//Ejercicio 4: Escribe un condicional if/else que imprima en la consola 'Eres mayor de edad' cuando la constante age tenga el valor correspondiente, si no es así, debe imprimir 'No eres aún mayor de edad'   HECHO

const age = 18
//Escribe tu código aquí
if (age >= 18) {
 console.log('Eres mayor de edad');/*if si se cumple (xxxx) haz {loque quieras }*/
}
else {
    console.log('No eres aún mayor de edad');

}/* else si nada se cumple haz esto * /

//Ejercicio 5: Cambia el valor de age a 12 para mirar el resultado del ejercicio anterior.
const age = 18
Escribe tu código aquí*/
const aged =12;
 
if (aged >= 18) {
 console.log('Eres mayor de edad');/*if si se cumple (xxxx) haz {loque quieras }*/
}
else {
    console.log('No eres aún mayor de edad');

};

//Ejercicio 6: Escribe un condicional if/else que lea la constante pet y si es un perro, que imprima en la consola "Tengo un perro", si es un gato, que imprima en la consola "Tengo un gato", si es un pájaro, que imprima en la consola "Tengo un pájaro" y si no es ninguno de los 3 que imprima "No tengo una mascota convencional"  HECHO

const pet = 'gato';
// //Escribe tu código aquí
// if (pet === 'perro')
//     {console.log('Tengo un '+ " " +pet);}
// else if( pet === 'gato'){
//     console.log('Tengo un '+ " " +pet);    
// }
// else if (pet === 'pájaro')//operador de comparación == es solo valor y usamos === compara valor y en tipo
//     {
//         console.log('Tengo un '+ " " + pet);
//     }
// else{ 
//     console.log('No tengo una mascota convencional'); // en else solo ponemos cuando no se cumpla lo demas
// }



//Ejercicio 7: cambia el valor de pet a "serpiente" y mira el resultado en consola para comprobar que tu código funciona bien.

//const pet = "serpiente";



//Ejercicio 8: Haz el mismo ejercicio 6, pero con el condicional switch.

//Escribe tu código aquí

switch(pet){ // switchi mira la variable    if(){}
            case 'perro':     //else if(){}
                console.log('tengo un perro');
                break;
            case 'gato':  // else if(){}
                console.log('tengo un gato');
                    break;
            case 'pájaro':  // ejecuta si sale pajaro
                console.log('tengo un pájaro');
                break;      //break es salir de switch
        default: console.log('No tengo una mascota convencional');//defaul es lo ultimo que quieres sacar
};






//Ejercicio 9: Usando un operador ternario, escribe un programa que lea la constante weather e imprima en consola si es soleado "Me vestiré con un vestido" y si no es así que imprima "Me vestiré con pantalón"
// operario ternario ?  es como un condicional if
const weather = 'frio'; //soleado

let result = weather === 'soleado' ? 'Me vestiré con un vestido': 'Me vestiré con pantalón'; /* 'mal tiempo' Escribe tu código aquí;*/

console.log (result);

//Ejercicio 10: cambia el valor de weather a "frío" y mira el resultado en consola para comprobar que tu código funciona bien.

//Ejercicio 11: Escribe un programa que al darle la constante 'value' imprima en consola "Es un número" cuando el valor sea de tipo number, "Es un string" cuando el valor sea de tipo string o si no es ni uno ni otro que imprima "No es ni número ni string". Puedes hacerlo con cualquier tipo de condicional.

const value = '1';

//Escribe tu código aquí
let tipoT=typeof value=== 'string';
let tipoN=typeof value === 'number';
if(tipoT){
       console.log('es tipo texto');
}
else if(tipoN){

    console.log('es de tipo numero');
}
else {'ni es tipo texto ni de tip numero'};

//console.log( tipoT && true , tipoN && true ? 'es un texto':'ni es texto ni numero' );

//BUCLES

//Ejercicio 12: Imprime en consola una lista del 0 al 10 con el bucle for

//Escribe tu código aquí



for (let n=0; n <= 10; ++n)
     {console.log (n)};

//Ejercicio 13: Con un bucle for in imprime en pantalla todos los nombres, apellidos y su aporte a la sociedad de las programadoras de la historia contenidas en el array llamado 'programmers', Deberás imprimir el índice y la información de cada una de ellas de la siguiente manera: '0: Ada Lovelace, su aporte fue la máquina analítica'. 
let arr= [antonio, Pepep , jose, ];
let lis ={nombre:'antonio', apellido:'Pan'}; 
const programmers = [{  
    
        name: 'Ada',
        lastname: 'Lovelace',
        knowledge: 'la máquina analítica'
}
    ,
 {   
        name: 'Margaret',
        lastname: 'Hamilton',
        knowledge: 'el programa espacial Apolo'
}    ,
{    
        lastname: 'Hopper',
        knowledge: 'el lenguaje Cobol'
 }       name: 'Grace',
    ,
 {   
        name: 'Hedy',
        lastname: 'Lamarr',
        knowledge: 'el wifi'
 }      
];

//Escribe tu código aquí

for ( let posi= 0 ; posi < programmers. length ;posi ++)
{
let ifForss= programmers [posi];/* se usa corchetes porque la lista esta dentro de un array y llamas a la variable posi en listas solo no se puede hacer por la sintaxis.  
    */
let pro= (`mi nombres es, ${ifForss.name},y knowlwdge es ${ifForss.knowledge}lo que sea lastname ${ifForss.lastname}`);
console.log(`${posi}:${pro}`);// programers[posi]

}
/* ---codigo de roxi--
for (let indice in programmers){  // bucle for in 
const programmer = programmers [indice];
const nombreprogramadora =´${programmers.name ${programmers.lastname , su aporte fue ${programmers.knowledge}}´;
console.log(${indice}:${programmers}`);
}




*/
//Ejercicio 14: Con un bucle for of imprime en consola "Hola, mi nombre es ... " y reemplaza los tres puntos con cada nombre del array dado.

const names = ['Rocío', 'Cris', 'Antía', 'Judith', 'Noelia'];

//Escribe tu código aquí

for ( let posiciones = 0; posiciones <= 4; posiciones ++ )
    {
    console.log('Hola mi nombe es ', names[posiciones]);

}

// for (let pepe for names){
//     console.log(`hola soy tal ${pepe}`);
// }; // otra forma de hacerlo
//Ejercicio 15: Con un bucle while imprime en consola una lista del 1 al 5.

//Escribe tu código aquí
let nu=['numeroUno','numeroDos','numeroTres','numeroCuatro','numeroCinco'];
let lisNu= 0;

while ( lisNu <= 5 ){

    console.log(  nu[lisNu]); // declaras el contador dentro de la lista para llamar al indexación
    lisNu ++ ;

};/* while (condición → Se comprueba antes de cada vuelta).Si es true (verdadero), el bloque se ejecuta.

Si es false, el bucle se para.*/


//Ejercicio 16: Realiza el mismo ejercicio anterior pero con un bucle do while.

//Escribe tu código aquí
let creCi = 0;
while( creCi <=4){

        console.log(names[creCi]);
        creCi ++; // cadavez que termina el bucle se suma una a la variable
}

//Ejercicio 17: Saludo Personalizado
//Crea una función llamada saludar que tome un parámetro llamado nombre y devuelva un saludo personalizado. Luego, llama a la función con diferentes nombres y muestra el resultado en la consola.

//Escribe tu código aquí
function saludar(nombre){
    console.log('hola como estas');
}
saludar('pepe');
saludar('jose')
//Ejercicio 18: Calcular el Área de un Rectángulo
//Crea una función llamada calcularAreaRectangulo que tome dos parámetros (ancho y alto) y devuelva el área del rectángulo. Luego, llama a la función con diferentes valores de ancho y alto y muestra el resultado en la consola.

//Escribe tu código aquí */
function calCuAr(b,a){

console.log(b*a);

}
calCuAr(3,5);





