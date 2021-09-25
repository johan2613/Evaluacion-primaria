let numero_uno;
let numero_dos;
numero_uno = prompt ("digite un numero");
numero_dos = prompt ("digite otro numero");
let resultado;
resultado = parseInt(numero_uno) + parseInt(numero_dos);
document.write(
    `La suma entre ${numero_uno} y ${numero_dos} es: ${resultado}`
)