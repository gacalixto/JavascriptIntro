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
var btAdd = document.querySelector("#adicionar-paciente");
var pacientes = document.querySelectorAll(".paciente");
for(var i =0; i<pacientes.length;i++){
    var paciente = pacientes[i]; 
    var altura = paciente.querySelector(".info-altura").textContent;
    var peso = paciente.querySelector(".info-peso").textContent;
    var TDimc=paciente.querySelector(".info-imc");

    if(altura>=3||altura<=0)
    {
        alturaValida=false;
        TDimc.textContent="Altura Invalida";
        paciente.classList.add("paciente-invalido");
    }
    if(peso<=0||peso>=1000)
    {
        pesoValido = false;
        TDimc.textContent = "peso Invalido";
        paciente.classList.add("paciente-invalido");
    }
    if(alturaValida && pesoValido)
    {
        var imc = peso/(altura*altura);
        console.log(imc);
        TDimc.textContent = imc.toFixed(2);
    }

}

btAdd.addEventListener("click",function(event)
{
    event.preventDefault();
    var formAdd = document.querySelector("#form-add");//pega o form de adicionar

    //Dados preenchidos no  form
    var nomeForm = formAdd.nome.value;
    var pesoForm = formAdd.peso.value;
    var alturaForm = formAdd.altura.value;
    var gorduraForm = formAdd.gordura.value;
    //Nova linha na tabela de pacientes
    var pacienteTr = document.createElement("tr");
    //Novas campos nas colunas 
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    //preenchendo os campos
    nomeTd.textContent = nomeForm;
    pesoTd.textContent = pesoForm;
    alturaTd.textContent = alturaForm;
    gorduraTd.textContent = gorduraForm;
    //adiciona os tds ao tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    //adiciona o tr à tabela
    tabela.appendChild(pacienteTr);

});
//  usa-se preventdefault para prevenir a ação padrão do form

/*function MostraMsg(event) {
     alert("Fui Clicado!");
    
    
}*/

    
