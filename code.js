function validarEmail(emailImput){
    var texto = document.getElementById(emailImput.id).value;
    var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regex.test(texto)) {
        document.getElementById("resultado").innerHTML = "Correo inválido";
        console.log("ES FALSO");
        return false;

    } else {
        document.getElementById("resultado").innerHTML = "Correo válido";
        console.log("ES Verdadeto");
        return true;
    }
    
}

