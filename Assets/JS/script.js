function validarForm() {
    // Obtener los valores de los campos
    var identificacion = document.getElementById('identificacion').value;
    var nombre = document.getElementById('nombre').value;
    var fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    var edad = document.getElementById('edad').value;
    var correoElectronico = document.getElementById('correo_electronico').value;
    var numeroCelular = document.getElementById('phoneNumber').value;
    var tipoHabitacion = document.getElementById('tipo_habitacion').value;
    var servicioAdicional = document.getElementById('servicio_adicional').value;

    // Verificar si los campos obligatorios no están vacíos
    if (identificacion === "" || nombre === "" || fechaNacimiento === "" || edad === "" || correoElectronico === "" || numeroCelular === "" || tipoHabitacion === "" || servicioAdicional === "") {
        alert("Por favor complete todos los campos obligatorios.");
        return false; // Evitar el envío del formulario si hay campos vacíos
    }

    // Agrega aquí más validaciones según tus requisitos

    // Si todas las validaciones tienen éxito, envía el formulario
    document.getElementById("myForm").submit();
}

function Validar() {
    ValidarId() ;
Validarnumber();

}
function ValidarId() {
    var id = document.getElementById("id").value;

    if(isNaN(id)){
        alert("la identificacion es invalida");
    }

    if(id.length > 12){
        alert("la identificacion es invalida");
    }
}
function Validarnumber() {
    var number= document.getElementById("phoneNumber").value;

    if(isNaN(number)){
        alert("El numero es invalido");
    }

    if(number.length > 12){
        alert("El numero es invalido");
    }
}
function Validaredad() {
    var edad= document.getElementById("edad").value;

    if(isNaN(edad)){
        alert("El numero es invalido");
    }

    if(edad.length < 12){
        alert("Edad invalida");
    }
}