
describe('greet test' , function(){

    it('Return greeting plus the user input ' , function(){

        assert.equal("Hello, Kabelo",greet("Kabelo"));

        assert.equal("Hello, undefined",greet());

        assert.equal("Hello, ",greet(""));

        
    });

});