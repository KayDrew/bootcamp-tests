describe("Test for countAllFromTown",function(){

    it("return the number of cars from the specific town specified on the second perimeter",function(){

assert.equal(2,countAllFromTown("CJ 123, GP 321, CD 678, CJ 666","CJ"));

assert.equal(0,countAllFromTown("CA 123, GP 321, CD 678, CA 666","MP"));

assert.equal(0,countAllFromTown("CA 564,GP 123",));

assert.equal(0,countAllFromTown("","CA"));


    });
});