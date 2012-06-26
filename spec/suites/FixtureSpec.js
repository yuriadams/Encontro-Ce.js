describe("testing html fixtures inside jasmine", function(){
	beforeEach(function() {
        window.location = 'spec/fixtures/fixture.html';
    });
    
    it("should be works", function(){
        var fixtureText =  $("#id_fixture").text();
        
        expect(fixtureText).toEqual("Segundo Encontro Ce.Js");
    });
});
