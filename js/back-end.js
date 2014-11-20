function montarQuestoesBackEnd(){
	var questoes = new Array(
		["Qual é o melhor design pattern para se utilizar quando se deseja definir um algoritmo geral que estabelece uma série de passos para cumprir um requisito da aplicação?", "Template Method ", "Decorator", "Chain Of Responsibility", "Flyweight"],
		["Qual é o objetivo do padrão do design pattern Null Object.", "Evitar verificações repetitivas se o objeto é nulo em toda a aplicação", "Evitar exceções de NullPointerException", "Evitar o retorno de valores nulos pelos métodos", "Evitar exceções de NullObject"],
		["Qual das opções abaixo não é um modificador de acesso?", "abstract", "private", "protected", "public"],
		["Qual padrão de projeto que pode estar mais próximo de ser considerado uma opção ao uso de herança?", "Decorator", "Chain of Responsability", "Observer", "FlyWeight"],
		["Em padrões de projeto o que significa o acrônimo MVC?", "Model View Controller", "Model Visitor Controller", "Modeling View Concurrency", "Management View Controller"],
		["Quando um método é responsável por realizar muitas tarefas ele é considerado um método com:", "Baixa coesão", "Alta ligação", "Superfaturamento", "Alto acoplamento"],
		["O que é um objeto imutável?", "É um objeto no qual seu estado não pode ser modificado após ser criado", "É um objeto que não teve o código da sua classe alterado nos últimos dias", "É um objeto que foi instanciado apenas uma vez", "É um objeto que tem apenas um atributo"],
		["Qual é o benefício dos padrões de nomenclaturas do código fonte?", "Tornar o código mais legível", "Deixar mais visível o nome do desenvolvedor que trabalhou no código", "Facilitar a distinção entre diferentes produtos de software", "Garantir que “métodos órfãos” não sejam criados"]

	);
	var mensagem = "Esta é a mensagem da DígithoBrasil sobre Back-End depois da resposta.";

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


$("#temaBackEnd").on("click", function(){ 
	var pegaAtributoName = $(this).attr("name");
	var pegaAtributoId = $(this).attr("id");

	if($(this).attr("class") == "bloqueado"){
	}
	else {
		limparTela();
		areaQuestoes.attr("name", pegaAtributoId);
		areaQuestoes.addClass("animated bounceInUp exibir " + pegaAtributoName); 
		montarQuestoesBackEnd(); 
		selecionarQuestao();
	}
});