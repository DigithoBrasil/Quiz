function montarQuestoesUX(){
	var questoes = new Array( 
		["O que são PERSONAS?", "Personagens fictícios criados para representar os diferentes tipos de usuário dentro de um alvo demográfico, atitude e/ou comportamento definido", "Marca de shampoo", "O próprio cliente, que é utilizado para representar o usuário no levantamento de requisitos", "Representa o time de desenvolvimento que está trabalhando na criação da solução para o cliente"],
		["Qual dos itens abaixo NÃO é um entregável de UX?", "Questionário sócio-cultural", "Wireframe", "Ecossistema", "Teste de usabilidade"],
		["Qual a função do Teste de Usabilidade?", "Verificar a facilidade que o software/produto/site possui de ser claramente compreendido e manipulado pelo usuário.", "Verificar se o software/produto/site possui erros", "Verificar se o software/produto/site é desejado pelos usuários", "Nenhuma das anteriores, Teste de usabilidade não é uma atribuição do UX"],
		["“Um detalhamento de cada tarefa que o usuário deseja cumprir ao interagir com o produto”, isso é característica de qual entregável de UX?", "User Stories", "Persona", "Benchmarking", "Roadmap"],
		["“Um diagrama que explora os múltiplos (e algumas vezes invisíveis) passos tomados pelo consumidor à medida em que eles se engajam com o serviço”, é uma característica de qual entregável de UX?", "Consumer Journey Map ", "Blueprint", "Mapa Conceitual", "Moodboard"],
		["“O processo coletivo de geração de ideias, sem restrições, que respondem a determinado brief criativo”, é característica de qual entregável de UX?", "Brainstorm", "Pesquisa de usuário", "Benchmarking", "Pesquisa de mercado"],
		["“Uma visualização em mapa das propriedades digitais da marca, das conexões entre elas e de sua função na estratégia de marketing”, é uma característica de qual entregável de UX?", "Ecossistema", "Análise competitiva", "Proposição de valor", "Entrevista com stakeholders"],
		["“Uma espécie de história em quadrinhos da série de ações que os consumidores tomarão enquanto estão usando o produto”, é uma característica de qual entregável de UX? ", "Storyboard", "Wireframe", "Lean", "Protótipos"],
		["“Uma representação visual do fluxo do usuário para completar tarefas dentro do produto”, é uma característica de qual entregável de UX?", "Fluxo do usuário", "Fluxo do produto", "Fluxo do mercado", "Fluxo do fluxo"]

	);
	var mensagemCerta = "Aliando práticas de UX, as soluções da DígithoBrasil vão além da funcionalidade: criam uma experiência de interação com o usuário. ",
		mensagemErrada = "A Experiência do Usuário ainda é um tema subaproveitado nas discussões e nos projetos. Mas você pode mudar isso!";

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

$("#temaUX").on("click", function(){ 
	var pegaAtributoName = $(this).attr("name");
	var pegaAtributoId = $(this).attr("id");

	if($(this).attr("class") == "bloqueado"){
	}
	else {
		limparTela();
		areaQuestoes.attr("name", pegaAtributoId);
		areaQuestoes.addClass("animated bounceInUp exibir " + pegaAtributoName); 
		montarQuestoesUX(); 
		selecionarQuestao();
	}
});