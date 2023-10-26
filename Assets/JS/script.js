
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
function Validaredad() {
    var edad = document.getElementById("edad").value;

    if (isNaN(edad)) {
        alert("El numero es invalido");
    }

    if (edad.length < 12) {
        alert("Edad invalida");
    }
}