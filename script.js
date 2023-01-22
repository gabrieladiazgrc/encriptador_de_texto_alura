function encriptar(stringEncriptado) {
    var reemplazos1 = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    }

    stringEncriptado = stringEncriptado.replace(/a|e|i|o|u/gi, function(matched) {
        return reemplazos1[matched];
    });
    return stringEncriptado;
}

function desencriptar(stringDesencriptado) {
    var reemplazos2 = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u"
    }

    stringDesencriptado = stringDesencriptado.replace(/ai|enter|imes|ober|ufat/gi, function(matched) {
        return reemplazos2[matched];
    });
    return stringDesencriptado;
}

function btnEncriptar() {
    const textoEncriptado = encriptar(document.getElementById("textarea").value);
    document.getElementById("mensaje").value = textoEncriptado;
    document.getElementById("textarea").value = "Ingresa el texto aquí...";
    document.getElementById("imagen-pantalla1").style.display = "none";
    document.getElementById("texto-pantalla1").style.display = "none";
    document.getElementById("resultado").style.display = "block";
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(document.getElementById("textarea").value);
    document.getElementById("mensaje").value = textoDesencriptado;
    document.getElementById("textarea").value = "Ingresa el texto aquí...";
    document.getElementById("imagen-pantalla1").style.display = "none";
    document.getElementById("texto-pantalla1").style.display = "none";
    document.getElementById("resultado").style.display = "block";
}

function copyToClipBoard() {

    var content = document.getElementById("mensaje");

    content.select();
    document.execCommand('copy');

    alert("¡Copiado!");
}