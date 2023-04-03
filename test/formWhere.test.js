describe("Test for fromWhere",function(){

    it("return the name of the town the car is from",function(){

assert.equal("Cape Town",fromWhere("CA"));

assert.equal("Bellville",fromWhere("CY"));

assert.equal("Paarl",fromWhere("CJ"));

assert.equal("Some other place!",fromWhere("MP"));

assert.equal(undefined,fromWhere());

assert.equal("Some other place!",fromWhere(""));

    });
});