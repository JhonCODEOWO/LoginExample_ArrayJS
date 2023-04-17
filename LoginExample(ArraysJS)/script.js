let nomUsuarios = ["Jhon", "Juan"];
let contraseñas = ["1234", "12345"];

let getUsuario = document.getElementById("txtusuario");
let getContra = document.getElementById("txtcontraseña");


function logear() {
    let usuario = getUsuario.value;
    let contraseña = getContra.value;

    for (let i = 0; i < nomUsuarios.length; i++) { //Se realiza un recorrido de los usuarios para verificar primero si existe el ingresado
        if (nomUsuarios[i] == usuario) { //Si la posicion en el array coincide con lo ingresado entonces...
            console.log("usuario existente");
            for (let y = 0; y < contraseñas.length; y++) { //Entra a otro for que busca verificar si la contraseña ingresada coincide.
                if (contraseña == contraseñas[i]) {
                    alert("Logeo éxitoso");
                    console.log("contraseña existente");
                    break
                }else{
                    alert("El usuario y/o contraseña no son correctos");
                    console.log("contraseña no existente");
                    break;
                }
            }
            break; //Si el usuario existe se detiene el recorrido y trabajamos con el siguiente for
        } else {
            console.log("Usuario no existente");
            break; //Si no existe simplemente detenemos toda la ejecución
        }
    }
}