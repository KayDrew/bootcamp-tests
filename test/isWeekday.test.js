describe('Test for isWeekday' , function(){

    it('Return true if it is a weekday' , function(){

        assert.equal(true,isWeekday("Friday"));

        assert.deepEqual(false,isWeekday("Saturday"));

        assert.equal(false,isWeekday(''));

        assert.equal(true,isWeekday("Tuesday"));

        assert.deepEqual(false,isWeekday());

        
    });

});