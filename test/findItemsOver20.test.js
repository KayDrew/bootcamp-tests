describe("Test for findItemsOver20",function(){

    it("return whether the list of items have a quantity that's  above 20.",function(){

assert.equal(JSON.stringify([{name:'bananas', qty:23},{name:'apples', qty:37}]),JSON.stringify(findItemsOver20([{name:'pears', qty:20},{name:'bananas', qty:23},{name:'apples', qty:37}])
));


assert.equal(JSON.stringify([{name:'pears', qty:60},{name:'bananas',qty:23},{name:'apples', qty:37}]),JSON.stringify(findItemsOver20([{name:'pears', qty:60},{name:'bananas', qty:23},{name:'apples', qty:37}])
));

assert.equal(JSON.stringify([]),JSON.stringify(findItemsOver20([{name:'pears', qty:20},{name:'bananas', qty:12},{name:'apples', qty:7}])
));

assert.equal(JSON.stringify([]),JSON.stringify(findItemsOver20()
));




    }
    );

}
);
