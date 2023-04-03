describe("Test for years ago",function(){

    it("return the number of years between current year and the entered year. ",function(){

        assert.equal(3,yearsAgo(2020));

        assert.equal(0,yearsAgo(2023));

        assert.deepEqual(NaN,yearsAgo());

    });
});