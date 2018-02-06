//console.log("Olá Mundo!");
	/*
    		    //console.log(document);//Mostra todo o HTML
				//var titulo = document.querySelector("h1"); Mostra a tag h1
				var titulo = document.querySelector(".titulo");//Mostra a Classe titulo do CSS
				console.log(titulo.textContent);//mostra o texto da variavel titulo
                titulo.textContent ="Aparecida Nutricionista";//Muda o texto;
*/

var btAdd = document.querySelector("#adicionar-paciente");
var pacientes = document.querySelectorAll(".paciente");
for(var i =0; i<pacientes.length;i++){
    var paciente = pacientes[i]; 
    var altura = paciente.querySelector(".info-altura").textContent;
    var peso = paciente.querySelector(".info-peso").textContent;
    var TDimc=paciente.querySelector(".info-imc");
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    function validaPeso(peso)
{
    if(peso<=0||peso>=1000)
    {
       return false;
    }
    else
    {
        return true;
    }
}

function validaAltura(altura){
    if(altura>=3||altura<=0)
    {
       return false;
    }
        else
        {
        return true;
        }
}

    
    if(alturaValida && pesoValido)
    {
        var imc = calcImc(peso,altura);
        console.log(imc);
        TDimc.textContent = imc;
    }

}

function calcImc(peso,altura)
{
    var imc = peso/(altura*altura);
    return imc.toFixed(2);

}
