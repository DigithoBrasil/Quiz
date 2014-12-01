describe("Será que funciona?", function() {

	it("então deve falhar ao comparar true com false", function() {
		expect(true).toBe(false);
	});

	it("então deve passar ao comparar true com true", function() {
		expect(true).toBe(true);
	});

});