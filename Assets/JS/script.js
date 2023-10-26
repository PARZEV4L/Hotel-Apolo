
function Validar() {
    ValidarId();
    Validarnumber();

}
function ValidarId() {
    var id = document.getElementById("id").value;

    if (isNaN(id)) {
        alert("la identificacion es invalida");
    }

    if (id.length > 12) {
        alert("la identificacion es invalida");
    }
}
function Validarnumber() {
    var number = document.getElementById("phoneNumber").value;

    if (isNaN(number)) {
        alert("El numero es invalido");
    }

    if (number.length > 12) {
        alert("El numero es invalido");
    }
}
function calcularedad() {
    var fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    var edad = calcularEdadDesdeFechaNacimiento(fechaNacimiento);
    if (edad < 18) {
        alert("Edad insuficiente");
    } else
        document.getElementById("resultadoEdad").textContent = edad;

}

function calcularEdadDesdeFechaNacimiento(fechaNacimiento) {
    var fechaNac = new Date(fechaNacimiento);
    var fechaActual = new Date();
    var diferencia = fechaActual - fechaNac;
    var edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
    return edad;
}
function calcularvalor() {
    var tipohabitacion = document.getElementById("tipo_habitacion").value;
    var valor= 0;

    if (tipohabitacion == "familiar") {
        valor = 80;
    } else if (tipohabitacion == "Pareja") {
    valor = 60;
     }
    else if (tipohabitacion == "Doble") { 
        valor = 50;
    }
    else {
        valor = 30;
    }
    document.getElementById("valor_habitacion").textContent = valor;
}
function calcularnoches(){
    
}
