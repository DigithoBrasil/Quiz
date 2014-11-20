function montarQuestoesCulturaNerd(){
	var questoes = new Array( 
			["Qual game detém o título de mais caro para ser produzido na história?", "GTA", "Super Mario", "Assassin’s Creed", "Final Fantasy"],
			["Qual o famoso jogo de videogame que chegou a ser proibido no Brasil nos anos 1990 por incitar crimes de trânsito? ", "Carmageddon", "Need for Speed", "Donkey Kong", "Top Gear"],
			["A saudação vulcana na série Jornada nas Estrelas era característica de qual personagem?", "Spock", "James Tiberius Kirk", "MacCoy", "Hikaru"],
			["Em média, quantas vezes o personagem Sheldon, do seriado The Big Bang Theory, repete o processo de bater na porta chamando por uma pessoa?", "3", "1", "5", "7"],
			["Quantas e quais são as famílias que mais se destacam no universo criado por George R.R. Martin nos livros “As Crônicas de Gelo e Fogo”, que inspiraram a série “Game of Thrones”?", "4 – Stark, Targaryen, Lannister e Baratheon", "2 – Stark e Lannister", "3 – Lannister, Tyrrell e Stark", "5 – Stark, Targaryen, Lannister, Baratheon e Martell"],
			["O personagem de Arnold Schwarzenegger no filme 'O Exterminador do Futuro' diz uma frase clássica. Qual é ela?", "'Hasta la vista, baby'", "'Eu sou o rei do mundo' ('I’m king of the world')", "'Que a força esteja com você' ('May the force be with you')", "'Sigam-me os bons'"],
			["A expressão artística (ou hobby) de vestir-se como personagens de quadrinhos, games e desenhos animados é chamada de:", "Cosplay", "Halloween", "Playground", "RPG"],
			["No anime Cavaleiros do Zodíaco, qual a saga na qual os cavaleiros de bronze (Seiya, Hyoga, Shiryu, Shun e Ikki) enfrentam os Cavaleiros de Ouro:", "Saga das 12 Casas", "Saga de Hades", "Saga de Asgard", "Saga de Poseidon"],
			["Quantas temporadas tem o seriado The Walking Dead?", "5", "12", "2", "7"]
	);
	var mensagem = "Esta é a mensagem da DígithoBrasil sobre Cultura Nerd depois da resposta.";

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

$("#temaCulturaNerd").on("click", function(){ 
	var pegaAtributoName = $(this).attr("name");
	var pegaAtributoId = $(this).attr("id");

	if($(this).attr("class") == "bloqueado"){
	}
	else {
		limparTela();
		areaQuestoes.attr("name", pegaAtributoId);
		areaQuestoes.addClass("animated bounceInUp exibir " + pegaAtributoName); 
		montarQuestoesCulturaNerd(); 
		selecionarQuestao();
	}
});