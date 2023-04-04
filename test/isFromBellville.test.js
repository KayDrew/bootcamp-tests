describe('isFromBellville test' , function(){
    it('Return true if registration number starts with "CY".Return false if it does not' , function(){

        assert.equal(true,isFromBellville('CY 123'));

assert.equal(true,isFromBellville('CY 879'));

assert.equal(true,isFromBellville('CY 100'));

        assert.equal(false,isFromBellville('CA 453'));

        assert.deepEqual(undefined,isFromBellville());

        assert.equal(false,isFromBellville('Cy 123'));
        

        
    });

});
