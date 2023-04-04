describe("test for transportFee", function (){

    it("return the fee cost according to shift",function(){

assert.equal("R20",transportFee("morning"));

assert.equal("R10",transportFee("afternoon"));

assert.equal("free",transportFee("nightshift"));

assert.equal("not a valid entry",transportFee("evening"));

assert.equal("not a valid entry",transportFee());



    });
});
