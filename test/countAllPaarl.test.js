describe("Test for countAllPaarl",function(){

    it("return how many cars are from Paarl",function(){

assert.equal(3,countAllPaarl("CJ 123, CJ 321, CD 678, CJ 666"));

assert.equal(0,countAllPaarl("CA 123, CA 321, CD 876, CN 333"));

assert.deepEqual(undefined,countAllPaarl());



    });
});