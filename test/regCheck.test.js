describe('regCheck test' , function(){
    
    it('Return true when the two arguments exactly match' , function(){

        assert.equal(true,regCheck('EC','EC'));

        assert.deepEqual(false,regCheck('EC','ec'));

        assert.deepEqual(false,regCheck('MP','GP'));

        assert.deepEqual(true,regCheck('MP','MP'));

        assert.equal(false,regCheck('EC'));

        
    });

});