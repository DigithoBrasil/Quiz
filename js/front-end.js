function montarQuestoesFrontEnd(){
	var questoes = new Array( 
		["Qual o resultado da expressão '1' + 1 em JavaScript?", "'11'", "2", "'2'", "0"],
		["Qual o resultado da comparação 20 == '20' em JavaScript?", "True", "False", "null", "Undefined"],
		["Qual das opções não é um método de um Array em JavaScript?", ".remove()", ".push()", ".map()", ".splice()"],
		["Qual das opções não é uma característica do JavaScript?", "Fortemente tipada", "Baseada em prototype", "Dinâmica", "Linguagem interpretada"],
		["Qual das opções abaixo representa uma forma correta de criar uma função em JavaScript?", "var fn = function() { }", "function = fn() { }", "function void fn() { }", "function() { }"]
	);
	var mensagemCerta = "A coleta de dados para o processamento das regras de negócio é etapa fundamental da solução. E na DígithoBrasil esse assunto é prioritário!", 
		mensagemErrada = "Tá rodando legal, mas o visual da solução... tem que ver issae!";

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
				"<p style='display:none;' class='mensagem-certa'>" + mensagemCerta +"</p>" +
				"<p style='display:none;' class='mensagem-errada'>" + mensagemErrada +"</p>" +
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


$("#temaFrontEnd").on("click", function(){ 
	var pegaAtributoName = $(this).attr("name");
	var pegaAtributoId = $(this).attr("id");

	if($(this).attr("class") == "bloqueado"){
	}
	else {
		limparTela();
		areaQuestoes.attr("name", pegaAtributoId);
		areaQuestoes.addClass("animated bounceInUp exibir " + pegaAtributoName); 
		montarQuestoesFrontEnd(); 
		selecionarQuestao();
	}
});
