var areaQuestoes = $("#questoes"),
	questoesLista = $("#questoes ul"),
	questoesRespostas = $("#questoes ul li");

function limparTela(){
	areaQuestoes.empty().removeAttr("class");
}

function animacaoEntrada(){
	areaQuestoes.removeClass("bounceOutDown animated");
	areaQuestoes.addClass("bounceinUp animated");
}
function animacaoSaida(){
	areaQuestoes.removeClass("bounceinUp animated");
	areaQuestoes.addClass("bounceOutDown animated");
}

function fecharMensagem(){
	animacaoSaida();

	setTimeout(function(){
		limparTela();
	}, 1200	);

	startCountdown();
}

function bloquearRespondidas(){
	var pegaCategoriaRespondida = areaQuestoes.attr("name");
	$("#" + pegaCategoriaRespondida).addClass("bloqueado").append("<div class='animated bounceInDown'></div>");
}

function verificaSeAcertou(){
	var pegaCategoriaRespondida = areaQuestoes.attr("name");
	$("#" + pegaCategoriaRespondida).attr("marca-certa","acertou").find("div").addClass("acertou-questao");
}

function fecharJanela(){
	areaQuestoes.append("<span class='fechar' onclick='fecharMensagem();'><span class='icone'></span>Fechar</span>");
}


function selecionarQuestao(){
	$("#questoes ul li").on("click", function(){
		$("#questoes ul li").removeClass("selecionado");
		$(this).addClass("selecionado");
	});
}
function contarRepostasCertas(){
	var valorAtual = Number ($("#placar .respostas-certas").text()),
		novoValor = valorAtual + 1;

		$("#placar .respostas-certas").html(novoValor);
}


function pegaResultadoFinal(){
	var tempo = $(".tempo-gasto").text(),
		respostasCorretas = $("#placar .respostas-certas").text(),
		pegaTotalDeRespondidos = $("section.categorias-quiz ul.categorias li.bloqueado").length;

		console.log("total respondidos: " + pegaTotalDeRespondidos);
		console.log("Respostas certas: " + respostasCorretas);
		console.log("tempo total: " + tempo);

		if(pegaTotalDeRespondidos == 8){
			$(".tempo-gasto").removeAttr("class").addClass("tempo-final").text(tempo);
			$("body").append("<a href='index.html' class='botao-final'>Finalizar</a>");
		}


}

function validarQuestao(){
	var respostaCertaSelecionada = $("#questoes ul li.resposta-certa.selecionado");
	var respostaSelecionada = $("#questoes ul li.selecionado")

	if( respostaSelecionada.length == 1  && respostaCertaSelecionada.length == 1 ) {
		areaQuestoes.find(".mensagem").show();
		$("#questoes .mensagem p span.icone").addClass("icone-acertou");
		$("#questoes .mensagem p:first-child").append("<span class='mensagem-titulo'>Opa, você acertou!</span>");
		contarRepostasCertas();
		bloquearRespondidas();
		verificaSeAcertou();
		pauseCountdown();
		pegaResultadoFinal();
	}
	else if( respostaSelecionada.length == 1  && respostaCertaSelecionada.length == 0 ) {
		areaQuestoes.find(".mensagem").show();
		$("#questoes .mensagem p span.icone").addClass("icone-errou");
		$("#questoes .mensagem p:first-child").append("<span class='mensagem-titulo'>Que pena, você errou!</span>");
		bloquearRespondidas();
		pauseCountdown();
		pegaResultadoFinal();
	}
	else if ( respostaSelecionada.length != 1  && respostaCertaSelecionada.length != 1 ){
		areaQuestoes.append("<div class='mensagem-de-validacao fadeInDownBig animated'>Caaaaaraaaaaa!!! Você é louco!!! Seleciona uma opção aí!!!</div>");
	}
	else{
		alert("tá di boa");
	}

}