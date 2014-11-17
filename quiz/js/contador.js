var cronometro;
var tempo = new Number();
tempo = 0;

function startCountdown(){


	var min = parseInt(tempo/60);
	var seg = tempo%60;

	if(min < 10){
		min = "0"+min;
		min = min.substr(0, 2);
	}
	if(seg <=9){
		seg = "0"+seg;
	}

	horaImprimivel = min + ':' + seg;
	$(".tempo-gasto").html(horaImprimivel);

	cronometro = setTimeout('startCountdown()',1000);

	tempo++;

}

function pauseCountdown() {
	clearTimeout(cronometro);
}

startCountdown();

