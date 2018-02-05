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
var paciente = document.querySelector("#primeiro-paciente");
var altura = paciente.querySelector(".info-altura").textContent;
var peso = paciente.querySelector(".info-peso").textContent;
var TDimc=paciente.querySelector(".info-imc");

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
    TDimc.textContent = imc;
}

    
