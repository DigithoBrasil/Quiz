function montarQuestoesDesenvolvimentoAgil(){
	var questoes = new Array( 
		["Considerando os princípios e os métodos ágeis, responda o que Kellan Elliott quis dizer com a frase 'A gente não otimiza para estar certo. A gente otimiza para descobrir rapidamente quando estamos errados'.", "Precisamos de feedback rápido", "Não é necessário refatorar código", "O feedback não importa", "Precisamos melhorar o código, independente do que aconteça"],
		["Com qual frequência uma build deve ser executada? Selecione a melhor resposta.", "Quando código novo ou alterado é enviado ao controle de versão", "Pelo menos uma vez por dia", "Quando a equipe de QA não tem certeza se o software está funcionando", "No final da iteração"],
		["Qual é o principal benefício do TDD (Test Driven Development)?", "Promove bom design e separação de responsabilidades", "Melhora qualidade e reduz bugs", "Força você a construir testes automatizados", "Deixa o desenvolvimento mais rápido"],
		["Qual é o benefício da Integração Contínua?", "Promove maior transparência e feedback rápido ao time de desenvolvimento", "Melhora a qualidade, uma vez que esse processo integra o feedback dos usuários ao código fonte", "Ajuda na criação de branches e realização de merges", "Elimina completamente os bugs"],
		["Quem é responsável pela arquitetura de um software sendo desenvolvido usando Scrum?", "O time de desenvolvimento", "O gerente de projeto", "O arquiteto de software", "Um arquiteto escolhido pelo time de desenvolvimento"],
		["Builds automatizadas são importantes pois:", "Fornece um rápido feedback quando um bug é introduzido ou ocorre algum problema no ambiente de publicação", "Faz parte da DoD (Definition of Done)", "Sem ele, você não pode submeter seu código para o controle de versão", "Refatora o código fonte automaticamente"],
		["Quem escreve testes em um time Scrum?", "O time de desenvolvimento", "O Scrum Master", "O time de QA", "O tester"],
		["Quando uma build de integração continua falha, idealmente, quem deve garantir que a falha seja corrigida?", "O desenvolvedor que quebrou a build ", "A pessoa do time escolhida para ser o gerente de build", "O tester responsável pela validação das builds", "O próximo desenvolvedor que necessite que a build seja executada com sucesso"],
		["Quando uma arquitetura de um software é decidida?", "No decorrer do projeto, quando o conhecimento emerge e o time de desenvolvimento aprende mais sobre o negócio", "No início do projeto", "No momento em que o arquiteto puder trabalhar com o time de desenvolvimento", "É criado juntamente com a visão do produto, antes de escrever s primeira linha de código"],
		["O que é débito técnico?", "Um termo que representa eventuais consequências de escolhas técnicas ruins", "O dinheiro que a empresa deve aos fornecedores de hardware e software que o time de desenvolvimento utiliza", "Código que não foi comentado ou documentado", "O valor que o time de desenvolvimento gasta na correção de bugs"],
		["O que é DevOps?", "Um movimento criado para melhorar o relacionamento e a colaboração entre desenvolvedores e o pessoal de operações (infra) visando a entrega mais rápida e frequente de software", "O casamento entre um desenvolvedor e uma pessoa de operações", "É um papel desempenhado por uma pessoa dentro de um time ágil", "Uma técnica de pareamento entre um desenvolvedor e uma pessoa de operações"],
		["Em um time ágil, quem faz o levantamento de requisitos?", "O time de desenvolvimento", "O gerente de projeto", "O líder técnico", "A célula de analistas"],
		["Considerando o framework Scrum, o que acontece na Sprint 0?", "Não existe Sprint 0", "Planejamento detalhado do projeto, criação da arquitetura básica do sistema, configuração do controle de versão e integração contínua", "Definição da arquitetura base e design do sistema", "Levantamento de requisitos, configuração do controle de versão e integração contínua"],
		["Na criação do Scrum alguns modelos de cerimonias foram influenciadas pelo time de um projeto desenvolvido na Borland em 1994, qual o nome do projeto:", "Quattro Pro for Windows", "Borland c++ Builder for Windows", "Delphi 7", "Borland Database Engine"]
	);
	var mensagemCerta = "Estamos sem comentário para resposta certa!", 
		mensagemErrada = "Estamos sem comentário para resposta errada!";

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


$("#temaDesenvolvimentoAgil").on("click", function(){
	var pegaAtributoName = $(this).attr("name");
	var pegaAtributoId = $(this).attr("id");

	if($(this).attr("class") == "bloqueado"){
	}
	else {
		limparTela();
		areaQuestoes.attr("name", pegaAtributoId);
		areaQuestoes.addClass("animated bounceInUp exibir " + pegaAtributoName); 
		montarQuestoesDesenvolvimentoAgil(); 
		selecionarQuestao();
	}
});