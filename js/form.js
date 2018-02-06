
btAdd.addEventListener("click",function(event)
{
    event.preventDefault();
    var formAdd = document.querySelector("#form-add");//pega o form de adicionar
    var paciente =dadosForm(formAdd);
    console.log(paciente);
    //Nova linha na tabela de pacientes
    var pacienteTr = montaTr(paciente,"paciente");   
    if (!validaPaciente(paciente)) {
        console.log("Paciente inválido");
        return;
    }
    var tabela = document.querySelector("#tabela-pacientes");
    //adiciona o tr à tabela
    tabela.appendChild(pacienteTr);
    formAdd.reset();

});

function dadosForm(form){
    var paciente ={
         nome : form.nome.value,
         peso : form.peso.value,
         altura : form.altura.value,
         gordura : form.gordura.value,
         imc : calcImc(form.peso.value,form.altura.value)

    }
    return paciente;
    //Dados preenchidos no  form
   
}


function montaTr(paciente,classe)
{
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add(classe);
     //Novas campos nas colunas 
     var nomeTd = montaTd(paciente.nome,"info-nome");
     var pesoTd = montaTd(paciente.peso,"info-peso");
     var alturaTd = montaTd(paciente.altura,"info-altura");
     var gorduraTd = montaTd(paciente.gordura,"info-gordura");
     var imcTd = montaTd(paciente.imc,"info-imc");
     
     //adiciona os tds ao tr
     pacienteTr.appendChild(nomeTd);
     pacienteTr.appendChild(pesoTd);
     pacienteTr.appendChild(alturaTd);
     pacienteTr.appendChild(gorduraTd);
     pacienteTr.appendChild(imcTd);
    /*Outra possivel implementaçao
     pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));*/
 
    return pacienteTr;


}

function montaTd(dado,classe)
{
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;


}
function validaPaciente(paciente) {
    if (validaPeso(paciente.peso)) {
        return true;
    } else {
        return false;
    }
}

//  usa-se preventdefault para prevenir a ação padrão do form

/*function MostraMsg(event) {
     alert("Fui Clicado!");
    
    
}*/

    
