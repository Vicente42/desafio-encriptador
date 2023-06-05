function encriptador(){

    var texto = document.getElementById("texto-izquierdo").value.toLowerCase();

    // i = tomara las letras mayusculas y minusculas 
    // g = abarcara toda la linea
    // m = tomara en cuenta multiples lineas

    var textoEncriptado =  texto.replace(/a/img, "ai")
    var textoEncriptado =  textoEncriptado.replace(/e/img, "enter")
    var textoEncriptado =  textoEncriptado.replace(/i/img, "imes")
    var textoEncriptado =  textoEncriptado.replace(/o/img, "ober")
    var textoEncriptado =  textoEncriptado.replace(/u/img, "ufat")

    document.getElementById("muneico").style.display = "none";
    document.getElementById("ingrese-texto").style.display = "none";
    document.getElementById("desencriptar").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show"
    document.getElementById("copiar").style.display = "inherit"
}

function desencriptador(){

    var texto = document.getElementById("texto-izquierdo").value.toLowerCase();

    var textoEncriptado =  texto.replace(/a/img, "ai")
    var textoEncriptado =  textoEncriptado.replace(/enter/img, "e");
    var textoEncriptado =  textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado =  textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado =  textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("muneico").style.display = "none";
    document.getElementById("ingrese-texto").style.display = "none";
    document.getElementById("desencriptar").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar_texto() {
    var contenido = document.querySelector("#desencriptar").value;

    navigator.clipboard.writeText(contenido)
        .then(function() {
            alert("¡El texto se ha copiado!");
        })
}