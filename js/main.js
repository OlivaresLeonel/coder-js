let eleccion;
do {
    alert(`Bienvenido de nuevo!`);

    //por debajo de esta linea se le pide al usuario que tome una decicion entre las 3 opciones de la pagina web a la hora del "login"

    eleccion = parseInt(prompt(`Desea iniciar sesion? Pulse: \n 1 \n Desea crear una cuenta? Pulse:\n 2 \n Desea contactarse con soporte? Pulse: \n 3`));

    switch (eleccion) {
        case 1:
            login();
            break;
        case 2:
            crearCuenta();
            break;
        case 3:
            contactarSoporte();
            break;
        default:
            alert("Eleccion invalida. Por favor, elija una opcion valida.");
    }
} while (eleccion !== 1 && eleccion !== 2 && eleccion !== 3); 

//el while es para que despues de que ninguna de las opciones dadas sea puesta se le vuelva a pedir lo mismo

//funciones para desarrollar el modelo de inicio de sesion para ser mas realista

function login() {
    let usuarioIngresado = prompt("Por favor ingresa tu nombre de usuario:");
    let contraseñaIngresada = prompt("Por favor ingresa tu contraseña:")

    alert(`Inicio de sesion exitoso para el usuario: ${usuarioIngresado}`);
}

function crearCuenta() {
    let nuevoUsuario = prompt("Por favor ingresa el nombre de usuario para la nueva cuenta:");
    let nuevaContraseña = prompt("Por favor ingresa la contraseña para la nueva cuenta:");

    alert(`Nueva cuenta creada para el usuario: ${nuevoUsuario}`);
}

function contactarSoporte() {
    let nombreUsuario = prompt("Por favor, ingrese su nombre:");
    let emailUsuario = prompt("Por favor, ingrese su dirección de correo electrónico:");
    let mensaje = prompt("Por favor, escriba su mensaje para el soporte:");

    alert("Su mensaje ha sido enviado al equipo de soporte. Gracias por contactarnos.");
}
