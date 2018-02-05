//console.log("Olá Mundo!");
	/*
    		    //console.log(document);//Mostra todo o HTML
				//var titulo = document.querySelector("h1"); Mostra a tag h1
				var titulo = document.querySelector(".titulo");//Mostra a Classe titulo do CSS
				console.log(titulo.textContent);//mostra o texto da variavel titulo
                titulo.textContent ="Aparecida Nutricionista";//Muda o texto;
*/
var alturaValida = true;
var pesoValido = true;
var pacientes = document.querySelectorAll(".paciente");
for(var i =0; i<pacientes.length;i++){
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var TDimc=pacientes[i].querySelector(".info-imc");

    if(altura>3||altura<0)
    {
        alturaValida=false;
        TDimc.textContent="Altura Invalida";
    }
    if(peso<0||peso>1000)
    {
        pesoValido = false;
        TDimc.textContent = "peso Invalido";
    }
    if(alturaValida && pesoValido)
    {
        var imc = peso/(altura*altura);
        console.log(imc);
        TDimc.textContent = imc.toFixed(2);
    }

}

    
