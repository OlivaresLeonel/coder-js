let eleccion;

do {
    alert(`Bienvenido de nuevo!`);

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

function login() {
    let usuarioIngresado = prompt("Por favor ingresa tu nombre de usuario:");
    let contraseñaIngresada = prompt("Por favor ingresa tu contraseña:")

    alert(`Inicio de sesion exitoso para el usuario: ${usuarioIngresado}`);
}

function crearCuenta() {
    let nuevoUsuario = prompt("Por favor ingresa el nombre de usuario para la nueva cuent:");
    let nuevaContraseña = prompt("Por favor ingresa la contraseña para la nueva cuenta:");

    alert(`Nueva cuenta creada para el usuario: ${nuevoUsuario}`);
}

function contactarSoporte() {
    let nombreUsuario = prompt("Por favor, ingrese su nombre:");
    let emailUsuario = prompt("Por favor, ingrese su dirección de correo electrónico:");
    let mensaje = prompt("Por favor, escriba su mensaje para el soporte:");

    alert("Su mensaje ha sido enviado al equipo de soporte. Gracias por contactarnos.");
    
}
   









