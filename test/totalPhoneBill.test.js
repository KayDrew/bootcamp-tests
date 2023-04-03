describe("Test for totalPhoneBill",function(){

    it("return the total cost of the phone bill.",function(){

assert.equal("R6.15",totalPhoneBill("sms, call, call"));

assert.equal("R0.65",totalPhoneBill("sms"));

assert.equal("R2.75",totalPhoneBill("call"));

assert.equal("R0.00",totalPhoneBill(""));


    });
});