function montarQuestoesCulturaAgil(){
	var questoes = new Array( 
		["Qual o fator ou fatores são essenciais para entregar valor ao cliente?", "Maximizar os benefícios e reduzir os custos", "A qualidade da análise de negócio", "Prazo, custo e escopo", "Novas tecnologias"],
		["Quantos princípios existem no manifesto ágil?","12","10","15","Existem vários que são criados diariamente"],
		["Baseado no manifesto ágil, como se dá a entrega de soluções ao cliente?", "Frequentemente, de semanas a poucos meses. O que puder ser feito primeiro", "Tudo de uma vez, quando a solução estiver concluída", "Quando o cliente exige, no prazo estipulado", "Quando o time definir"],
		["Qual é a melhor forma de transmitir informação entre os indíviduos?", "Conversa face a face", "Por email", "Por telefone", "Por recado"],
		["Quando se fala em agilidade, qual é a maior prioridade?", "Satisfazer o cliente através da entrega contínua e adiantada da solução com valor agregado", "Satisfazer o cliente fazendo tudo o que ele deseja, quando ele deseja", "Satisfazer o time, dando ao time todas as condições de trabalho desejadas", "Não é necessário fazer ninguém, o importante mesmo é entregar."],
		["Dos itens abaixo, qual deles NÃO se encaixa na cultura ágil?", "Análise e documentação, mais que arriscar e errar", "Indivíduos e interações, mais que processos e ferramentas", "Colaboração com o cliente, mais que negociação de contratos", "Responder a mudanças, mais que seguir um plano"]
	);
	var mensagemCerta = "A DígithoBrasil vive a agilidade há um tempo e pode afirmar: o resultado aparece e permanece!",
		mensagemErrada = "Vale a pena atualizar seu conhecimento sobre agilidade e colocar em prática já. Ainda dá tempo!";

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


$("#temaCulturaAgil").on("click", function(){
	var pegaAtributoName = $(this).attr("name");
	var pegaAtributoId = $(this).attr("id");

	if($(this).attr("class") == "bloqueado"){
	}
	else {
		limparTela();
		areaQuestoes.attr("name", pegaAtributoId);
		areaQuestoes.addClass("animated bounceInUp exibir " + pegaAtributoName); 
		montarQuestoesCulturaAgil(); 
		selecionarQuestao();
	}
});