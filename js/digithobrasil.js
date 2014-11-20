function montarQuestoesDigithoBrasil(){
	var questoes = new Array( 
		["Há quanto tempo a DígithoBrasil está no mercado de TI?", "13 anos", "10 anos", "08 anos", "02 anos"],
		["Em qual bairro de Campo Grande a DígithoBrasil está situada?", "TV Morena", "Centro", "São Bento", "Jardim Paulista"],
		["Qual destes é uma solução criada pela DígithoBrasil?", "Nexxus", "On Track", "Dataged", "Gerente Escolar"],
		["Qual destes não é uma solução criada pela DígithoBrasil?", "Cigam", "Horus", "Cheff Escolar", "Saiems"],
		["Além do desenvolvimento de software, qual o outro negócio principal da DígithoBrasil?", "Prestação de serviços em TI", "Venda de equipamentos de informática", "Assistência Técnica", "Criação de sites"],
		["Dentre os valores abaixo, aponte aquele que é praticado pela DígithoBrasil:", "Inquietude", "Irreverência", "Solidariedade", "Justiça"],
		["Em qual (is) Estado (s) a DígithoBrasil conta com funcionários prestadores de serviço?", "Somente MS", "MS e MT", "Todo o Brasil", "MS, MT e DF"],
		["O símbolo na logomarca da DígithoBrasil é inspirado em qual figura?", "Um asterisco", "Uma flor", "Um cata-vento", "Um laço"],
		["Quantos gerentes de projeto existem na DígithoBrasil? DICA: “se você conversou com um desenvolvedore da DígithoBrasil fica fácil”", "Não há gerentes de projeto na DígithoBrasil", "Sete", "Três", "Apenas um"],
		["A DígithoBrasil orienta suas atividades, práticas e postura de acordo com qual filosofia?", "Agilidade", "Tai-Chi-Chuan", "5s (cinco S)", "ISO 9001"]
	);
	var mensagemCerta = "Muito bem! Você mostrou que conhece a nossa empresa e os detalhes da nossa trajetória. Parabéns!",
		mensagemErrada = "Hummm... Parece que você não está tão familiarizado com a nossa história. Mas isso pode mudar! "

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

$("#temaDigithoBrasil").on("click", function(){ 
	var pegaAtributoName = $(this).attr("name");
	var pegaAtributoId = $(this).attr("id");

	if($(this).attr("class") == "bloqueado"){
	}
	else {
		limparTela();
		areaQuestoes.attr("name", pegaAtributoId);
		areaQuestoes.addClass("animated bounceInUp exibir " + pegaAtributoName); 
		montarQuestoesDigithoBrasil(); 
		selecionarQuestao();
	}
});