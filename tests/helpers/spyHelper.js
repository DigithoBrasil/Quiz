Object.prototype.argumentoDaChamada = function(index) {
	return this.calls.argsFor(0)[index];
};