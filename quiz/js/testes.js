function montarQuestoesTestes(){
	var questoes = new Array( 
		["Questão Testes 01?", "01 Resposta Testes 01 Certa", "01 Resposta Testes Errada 02", "01 Resposta Testes Errada 03", "01 Resposta Testes Errada 04"],
		["Questão Testes 02?", "02 Resposta Testes 01 Certa", "02 Resposta Testes Errada 02", "02 Resposta Testes Errada 03", "02 Resposta Testes Errada 04"],
		["Questão Testes 03?", "03 Resposta Testes 01 Certa", "03 Resposta Testes Errada 02", "03 Resposta Testes Errada 03", "03 Resposta Testes Errada 04"],
		["Questão Testes 04?", "04 Resposta Testes 01 Certa", "04 Resposta Testes Errada 02", "04 Resposta Testes Errada 03", "04 Resposta Testes Errada 04"]
	);
	var mensagem = "Esta é a mensagem da DígithoBrasil sobre Testes depois da resposta.";

	var pegaAleatorio = Math.floor(Math.random() * questoes.length);

	var pergunta = questoes[pegaAleatorio][0],
		respostaCerta = questoes[pegaAleatorio][1],
		respostaErrada01 = questoes[pegaAleatorio][2],
		respostaErrada02 = questoes[pegaAleatorio][3],
		respostaErrada03 = questoes[pegaAleatorio][4];


		fecharJanela();
		areaQuestoes.append("<h2>" + pergunta + "</h2>");

		areaQuestoes.append(
			"<ul>" +
				"<li class='resposta-certa'>" + respostaCerta + "</li>" +
				"<li>" + respostaErrada01 + "</li>" +
				"<li>" + respostaErrada02 + "</li>" +
				"<li>" + respostaErrada03 + "</li>" +
			"</ul>" +
			"<button type='button' onclick='validarQuestao();'>Vai</button>" +
			"<div class='mensagem'>" +
				"<p><span class='icone'></span></p>" +
				"<p class='exibe-resposta-certa'>A resposta certa é '<span>" + respostaCerta + "'</span></p>" +
				"<p>" + mensagem +"</p>" +
				"<button type='button' class='fechar-mensagem' onclick='fecharMensagem();'>OK</button>" + 
			"</div>"
		);


		var ul = $("#questoes ul");
		var lis = $.makeArray(ul.children().detach());
		for ( var i = 0 ; i < lis.length ; i++ ) {
		    var proxima = Math.floor(Math.random()*(lis.length - i) + i);
		    ul.append(lis[proxima]);
		    lis[proxima] = lis[i];
		}
}


$("#temaTestes").on("click", function(){ 
	var pegaAtributoName = $(this).attr("name");
	var pegaAtributoId = $(this).attr("id");

	if($(this).attr("class") == "bloqueado"){
	}
	else {
		limparTela();
		areaQuestoes.attr("name", pegaAtributoId);
		areaQuestoes.addClass("animated bounceInUp exibir " + pegaAtributoName); 
		montarQuestoesTestes(); 
		selecionarQuestao();
	}
});