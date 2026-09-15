export function getFizzBuzzResult(num) {
  // Primero compruebo si es divisible por ambos // debe comprobar este primero, 
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } 
  //solo por 3
  else if (num % 3 === 0) {
    return "Fizz";
  } 
  //solo por 5
  else if (num % 5 === 0) {
    return "Buzz";
  } 
  //Si no es divisible por ninguno, devuelve el numero texto
  else {
    return String(num); // me falta hacer verificaciones NaN
  }
}