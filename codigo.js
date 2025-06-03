function validar() {
    var usuario = document.getElementById("nombre").value;
    var clave = document.getElementById("clave").value;

    if (usuario == "santi" && clave == "2504073") {
        window.location.href = "index2.html"
    } else {
        alert("Usuario y Clave incorrectas");
    }
}
function limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("clave").value = "";
}
function consultar() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("texto").value;

    if (nombre == "" || apellido == "" || telefono == "" || email == "") {
        document.getElementById("consulta").textContent =
            "POR FAVOR, COMPLETE TODOS LOS CAMPOS OBLIGATORIOS.";
    } else {
        document.getElementById("consulta").textContent =
            "SU CONSULTA FUE RECIBIDA!";
    }
}
function precio() {
    var ancho = document.getElementById("ancho").value;
    var alto = document.getElementById("alto").value;
    var rodado = document.getElementById("rodado").value;
    var marca = document.getElementById("marca").value;

    if (ancho == "165" && alto == "70" && rodado == "13" && marca == "FATE") {
        document.getElementById("resultado").textContent = "PRECIO AL CONTADO: $95.500";
    } else if (ancho == "175" && alto == "65" && rodado == "14" && marca == "PIRELLI") {
        document.getElementById("resultado").textContent = "PRECIO AL CONTADO: $110.000";
    } else if (ancho == "185" && alto == "60" && rodado == "15" && marca == "FIRESTONE") {
        document.getElementById("resultado").textContent = "PRECIO AL CONTADO: $140.950";
    } else if (ancho == "195" && alto == "55" && rodado == "15" && marca == "BRIDGESTONE") {
        document.getElementById("resultado").textContent = "PRECIO AL CONTADO: $185.000";
    } else if (ancho == "275" && alto == "40" && rodado == "20" && marca == "DUNLOP") {
        document.getElementById("resultado").textContent = " PRECIO AL CONTADO: $450.000";
    } else if (ancho == "315" && alto == "30" && rodado == "20" && marca == "DUNLOP") {
        document.getElementById("resultado").textContent = "PRECIO AL CONTADO: $630.000";
    } else {
        document.getElementById("resultado").textContent = "LO SENTIMOS, NO DISPONEMOS DE ESE PRODUCTO EN ESTE MOMENTO";
    }
}