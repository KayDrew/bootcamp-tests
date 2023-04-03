describe("Test for findItemsOver",function(){

    it("return whether the list of items above the threshold specified in the second argument are exactly equal the first argument in the assert method",function(){

assert.equal(JSON.stringify([{name:'apples', qty:37}]),JSON.stringify(findItemsOver([{name:'pears', qty:20},{name:'bananas', qty:23},{name:'apples', qty:37}],30)
));


assert.equal(false,JSON.stringify([{name:'apples', qty:37},{name:'pears', qty:20}])==JSON.stringify(findItemsOver([{name:'pears', qty:20},{name:'bananas', qty:23},{name:'apples', qty:37}],30)
));

assert.equal(false,JSON.stringify([{name:'apples', qty:37},{name:'pears', qty:20}])==JSON.stringify(findItemsOver([{name:'pears', qty:20},{name:'bananas', qty:23},{name:'apples', qty:37}],30)
));

    }
    );

}
);
