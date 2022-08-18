alert("¡Juguemos un juego! Para ingresar deberas adivinar el número que estoy pensando.")
let numeroIngresado = prompt("Ingrese un número")
let numero = 5;
while (numeroIngresado != numero) {
    if (numeroIngresado < 0) {
        alert("¡Estoy pensando en un número positivo!")
        numeroIngresado = prompt("Ingrese un número")
    } else if (numeroIngresado < 5 && numeroIngresado >= 0) {
        alert("¡Casi! Probá con un número un poquito mas grande.")
        numeroIngresado = prompt("Ingrese un número")
    } else if (numeroIngresado < 10 && numeroIngresado > 5) {
        alert("¡Te pasaste! Pero solo por un poquito, intentalo de nuevo estas muy cerca.")
        numeroIngresado = prompt("Ingrese un número")
    } else if (numeroIngresado >= 10) {
        alert("El numero en el que estoy pensando solo tiene un dígito.")
        numeroIngresado = prompt("Ingrese un número")
    }
}