
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
    else if (tipohabitacion == "individual") {
        valor = 30;
    }
    document.getElementById("valor_habitacion").textContent = valor;
    return valor;
}
function calcularnoches(){ 
        var fechallgada = document.getElementById("fecha_ingreso").value;
        var fechasalida = document.getElementById("fecha_salida").value;
        var noches = calcularnochessegunfecha(fechallgada,fechasalida);
            document.getElementById("cantidadnoches").textContent = noches;
            return noches;
}

    
function calcularnochessegunfecha(fechallegada, fecha_salida) {
    var fechalleg = new Date(fechallegada);
    var fechasalida = new Date(fecha_salida);
    var diferencia = fechasalida - fechalleg;
    var noches = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    return noches;
}
function calcularvalorservicio1() {
    var tiposervicio = document.getElementById("servicio_adicional_1").value;
    var valor= 0;

    if (tiposervicio == "1") {
        valor = 20;
    } else if (tiposervicio == "2") {
    valor = 0;
     }
    else if (tiposervicio == "3") { 
        valor = 15;
    }
    else if(tiposervicio == "4") {
        valor = 0;
    }
    document.getElementById("valor_servicio1").textContent = valor;
    return valor;
}
function calcularvalorservicio2() {
    var tiposervicio = document.getElementById("servicio_adicional_2").value;
    var valor= 0;

    if (tiposervicio == "1") {
        valor = 20;
    } else if (tiposervicio == "2") {
    valor = 0;
     }
    else if (tiposervicio == "3") { 
        valor = 15;
    }
    else if(tiposervicio == "4") {
        valor = 0;
    }
    document.getElementById("valor_servicio2").textContent = valor;
    return valor;
}
function subtotal(){
 var servicio_adicional_1=calcularvalorservicio1();
 var servicio_adicional_2=calcularvalorservicio2();
 var valor_habitacion= calcularvalor();
 var noches= calcularnoches();
var subtotal=0;

subtotal= (valor_habitacion*noches)+(servicio_adicional_1+servicio_adicional_2);
document.getElementById("subtotal").textContent = subtotal;
}