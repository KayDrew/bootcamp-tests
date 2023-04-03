
describe('countRegNumber test' , function(){

    it('Return the number of registration numbers passed in the argument' , function(){

        assert.equal(3,countRegNumber("CA 182736,CY 523519,CJ 812328"));
   
        assert.equal(undefined,countRegNumber());

        assert.equal(1,countRegNumber('CA 182736'));

    

        
    });

});





