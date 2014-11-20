var areaQuestoes = $("#questoes"),
	questoesLista = $("#questoes ul"),
	questoesRespostas = $("#questoes ul li");

function limparTela() {
	areaQuestoes.empty().removeAttr("class");
}

function animacaoEntrada() {
	areaQuestoes.removeClass("bounceOutDown animated");
	areaQuestoes.addClass("bounceinUp animated");
}

function animacaoSaida() {
	areaQuestoes.removeClass("bounceinUp animated");
	areaQuestoes.addClass("bounceOutDown animated");
}

function fecharMensagem() {
	animacaoSaida();

	setTimeout(function() {
		limparTela();
	}, 1200);

	startCountdown();
}

function bloquearRespondidas() {
	var pegaCategoriaRespondida = areaQuestoes.attr("name");
	$("#" + pegaCategoriaRespondida).addClass("bloqueado").append("<div class='animated bounceInDown'></div>");
}

function verificaSeAcertou() {
	var pegaCategoriaRespondida = areaQuestoes.attr("name");
	$("#" + pegaCategoriaRespondida).attr("marca-certa", "acertou").find("div").addClass("acertou-questao");
}

function fecharJanela() {
	areaQuestoes.append("<span class='fechar' onclick='fecharMensagem();'><span class='icone'></span>Fechar</span>");
}


function selecionarQuestao() {
	$("#questoes ul li").on("click", function() {
		$("#questoes ul li").removeClass("selecionado");
		$(this).addClass("selecionado");
	});
}

function contarRepostasCertas() {
	var valorAtual = Number($("#placar .respostas-certas").text()),
		novoValor = valorAtual + 1;

	$("#placar .respostas-certas").html(novoValor);
}


function pegaResultadoFinal() {
	var tempo = $(".tempo-gasto").text(),
		respostasCorretas = $("#placar .respostas-certas").text(),
		pegaTotalDeRespondidos = $("section.categorias-quiz ul.categorias li.bloqueado").length;

	console.log("total respondidos: " + pegaTotalDeRespondidos);
	console.log("Respostas certas: " + respostasCorretas);
	console.log("tempo total: " + tempo);

	if (pegaTotalDeRespondidos == 8) {
		$(".tempo-gasto").removeAttr("class").addClass("tempo-final").text(tempo);
		$("body")
			.append("<input id='nome' type='text' placeholder='Nome' />")
			.append("<input id='email' type='text' placeholder='Email' />")
			.append("<a href='/' onclick='finalizar(); return false;' class='botao-final'>Finalizar</a>");
	}
}

function finalizar() {
	var nome = $("body #nome").val().trim();
	var email = $("body #email").val().trim();

	if (!validarInformacoes(nome, email)) return;

	localStorage.setItem(email, nome);

	window.location = "index.html";
}

function validarInformacoes(nome, email) {
	if (nome == "") {
		alert("Nome deve ser informado");
		return false;
	}

	if (email == "") {
		alert("E-mail deve ser informado");
		return false;
	}

	if (!validarEmail(email)) {
		alert("E-mail inválido");
		return false;
	}

	if (emailJaRespondeu(email)) {
		alert("Este email já respondeu o questionário");
		return false;
	}

	return true;
}

function validarEmail(email) {
	var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(email);
}

function emailJaRespondeu(email) {
	return localStorage.getItem(email) != null;
}

function validarQuestao() {
	var respostaCertaSelecionada = $("#questoes ul li.resposta-certa.selecionado");
	var respostaSelecionada = $("#questoes ul li.selecionado")

	if (respostaSelecionada.length == 1 && respostaCertaSelecionada.length == 1) {
		areaQuestoes.find(".mensagem").show();
		$("#questoes .mensagem p span.icone").addClass("icone-acertou");
		$("#questoes .mensagem p:first-child").append("<span class='mensagem-titulo'>Opa, você acertou!</span>");
		contarRepostasCertas();
		bloquearRespondidas();
		verificaSeAcertou();
		pauseCountdown();
		pegaResultadoFinal();
	} else if (respostaSelecionada.length == 1 && respostaCertaSelecionada.length == 0) {
		areaQuestoes.find(".mensagem").show();
		$("#questoes .mensagem p span.icone").addClass("icone-errou");
		$("#questoes .mensagem p:first-child").append("<span class='mensagem-titulo'>Que pena, você errou!</span>");
		bloquearRespondidas();
		pauseCountdown();
		pegaResultadoFinal();
	} else if (respostaSelecionada.length != 1 && respostaCertaSelecionada.length != 1) {
		areaQuestoes.append("<div class='mensagem-de-validacao fadeInDownBig animated'>Caaaaaraaaaaa!!! Você é louco!!! Seleciona uma opção aí!!!</div>");
	} else {
		alert("tá di boa");
	}

}