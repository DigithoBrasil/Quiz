describe("Cronômetro após timeout", function() {

	var cronometro = window.cronometro;

	window.callbackDoCronometro = function() {};

	beforeEach(function(done){
		spyOn(window, "callbackDoCronometro");
		cronometro.iniciar(callbackDoCronometro, 1);

		setTimeout(function() {
			done();
		}, 100);
	});

	it("deve executar o callback configurado ao disparar o evento", function(done) {
		expect(window.callbackDoCronometro).toHaveBeenCalled();
		done();
	});
});