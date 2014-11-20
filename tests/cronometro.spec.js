describe("Cronômetro", function() {

	var cronometro = window.cronometro;

	window.callbackDoCronometro = function() {};

	it("deve configurar o setTimeout para um determinado intervalo de tempo", function() {
		spyOn(window, "setTimeout");
		var intervaloDeTempo = 2000;

		cronometro.iniciar(callbackDoCronometro, intervaloDeTempo);

		expect(window.setTimeout.argumentoDaChamada(0).toString()).toContain("_callback.apply");
		expect(window.setTimeout.argumentoDaChamada(1)).toBe(intervaloDeTempo);
	});

	it("deve informar o callback", function() {
		var funcao = function() {
			cronometro.iniciar(null, null);
		};

		expect(funcao).toThrow(new Error("Callback deve ser informado"));
	});

	it("deve informar um intervalo de tempo", function() {
		var funcao = function() {
			cronometro.iniciar(callbackDoCronometro, null);
		};

		expect(funcao).toThrow(new Error("Intervalo de tempo deve ser informado"));
	});

	it("deve informar um intervalo de tempo maior que 0 (zero)", function() {
		var funcao = function() {
			cronometro.iniciar(callbackDoCronometro, 0);
		};

		expect(funcao).toThrow(new Error("Intervalo de tempo deve ser maior que 0 (zero)"));
	});
});