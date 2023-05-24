function encriptar() 
{
    var texto = document.getElementById("inputText").value.toLowerCase();
    //i es para que afecte tanto mayúscula como minuscula ----- E o e
    //g es para toda la línea
    //m es para que afecte a multiples líneas o párrafos

    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("imgRight").style.display = "none";
    document.getElementById("text1").style.display = "none";

    document.getElementById("text2").innerHTML = txtCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function desencriptar() 
{
    var texto = document.getElementById("inputText").value.toLowerCase();

    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("imgRight").style.display = "none";
    document.getElementById("text1").style.display = "none";

    document.getElementById("text2").innerHTML = txtCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function copiar() 
{
    var contenido = document.querySelector("#text2");
    contenido.select();
    document.execCommand("cut");
    alert("Se copió");
}