(function(self) {

	var _callback;

	self.iniciar = function(callback, intervaloDeTempo) {
		validar(callback, intervaloDeTempo);

		_callback = callback;

		setTimeout(disparar, intervaloDeTempo);
	};

	function validar(callback, intervaloDeTempo) {
		if (callback === undefined || callback === null)
			throw new Error("Callback deve ser informado");

		if (intervaloDeTempo === null)
			throw new Error("Intervalo de tempo deve ser informado");

		if (intervaloDeTempo <= 0)
			throw new Error("Intervalo de tempo deve ser maior que 0 (zero)");
	}

	function disparar() {
		_callback.apply(this, []);
	}

})(window.cronometro = {});