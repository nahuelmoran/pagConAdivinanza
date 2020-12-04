let n = 4;
intentos.innerHTML = n;

function verificacion(){
    var respuesta = document.getElementById("respuesta").value;
    if(respuesta==""){
        alert("Debes escribir una respues");
    }else{
        n--;
        respuesta = respuesta.toLowerCase();
        console.log(respuesta);
        if(n>1){
            if (respuesta == "html") {
                console.log("Es verdad");
                resultado.innerHTML = "Felitaciones GANASTE";
            }else{
                intentos.innerHTML = n;
            }
        }else{
            if(n==1){
                pista1.innerHTML = "<u><b>Pista Nº1:</b></u> Fue creado por Tim Berners-Lee";
                pista2.innerHTML = "<u><b>Pista Nº2:</b></u> Es conocido como un lenguaje de texto";
                intentos.innerHTML = n;
            }else{
                resultado.innerHTML = "Te quedaste sin intentos. Suerte para la próxima";
                intentos.innerHTML = n;
                let btnResp = document.getElementById("btnSubmit");
                btnResp.disabled = true;
            }
        }
        
    }
    
    
}




