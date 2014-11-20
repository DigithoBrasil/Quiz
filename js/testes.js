function montarQuestoesTestes(){
	var questoes = new Array( 
		["Segundo Mike Cohn, a pirâmide de testes automatizados é formada por quais tipos começando pela base?", "Unidade, Serviço, UI", "Unidade, Integração, UI", "Unidade, Sistema, UI", "Sistema, Integração, UI"],
		["Qual é o maior benefício proporcionado pelo uso de testes automatizados?", "Feedback rápido", "Redução de erros", "Melhoria do código", "Arquitetura evolutiva"],
		["Em TDD, como ocorre o ciclo de desenvolvimento?", "Vermelho -> verde -> refatorar", "Verde -> vermelho -> refatorar", "Refatorar -> vermelho -> verde", "Refatorar -> verde -> vermelho"],
		["O TDD é um acrónimo de? ", "Test Driven Development", "Teste Depois do Desenvolvimento", "Test Definitely Done", "Test Driven Documentation"],
		["Qual tipo de teste NÃO pode ser automatizado?", "Exploratório", "Fumaça", "Desempenho", "Unidade"],
		["O que é cobertura de código (code coverage)?", "Percentual de código que foi exercitado por testes automatizados", "Número de desenvolvedores que entendem como o código funciona?", "Percentual de código do controle de versão incuído na build", "Um puxadinho construído para proteger o código do Sereno"],
		["O que é um teste de unidade?", "Um teste que isola e verifica uma pequena parte de uma funcionalidade", "Uma forma do time garantir que o software satisfaz os requisites dos usuários", "Uma forma de garantir que os desenvolvedores trabalhem de forma unida", "Uma técnica que garante que cada unidade de um cluster de computadores realize as operações do código corretamente"],
		["Qual alternativa não representa um lado do quadrante do teste ágil?", "Foco no desempenho", "Crítica ao produto", "Foco em tecnologia", "Suporte ao time"],
		["Dentre as ferramentas abaixo, qual não é utilizada diretamente na automação de testes?", "TestLink", "JMeter", "CasperJs", "NUnit"]
		
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