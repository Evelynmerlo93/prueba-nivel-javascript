import { getFizzBuzzResult } from "./fizzbuzz.js";
//aqui guardare objeto
const historial = [];

//primero tomo los elementos del HTML
const form = document.querySelector("#fizzbuzzFormulario");

const inputNumero = document.querySelector("#inpNumber");

const divResultado = document.querySelector("#respuesta");


//una unica funcion para pintar pantalla
function mostrarEnPantalla(texto) {
  divResultado.textContent = texto;
}

//Escuchador de BOTON (cuando selecciona enviar)
form.addEventListener("submit", (evento) => {
  evento.preventDefault(); //para que no se recargue sola y pierda la informacion del formulario

  //leo el INPUT del usuario
const valorDelInput = inputNumero.value.trim(); //le quito espacios
const numero = Number(valorDelInput); // paso a number el valor de input 

  //llamo a la LOGICA de fizzbuzz.js
const resultadoCalculado = getFizzBuzzResult(numero);




  //Guardo el objeto en nuestro historial
  historial.push({
    number: numero,
    result: resultadoCalculado,
  });


  //Muestro el resultado en la pantalla
  mostrarEnPantalla(`Resultado: ${resultadoCalculado}`);
});
