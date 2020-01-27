describe('All capture Demo', function() {

    function Add(a,b){
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
    }

    it('This should capture all elements', function() {
        browser.get('https://juliemr.github.io/protractor-demo/');

        Add(1,2);
        Add(10,20);
        Add(100,200);

        element.all(by.repeater("result in memory")).count().then((text)=>{
            console.log(`count: ${text}`);
        });

        expect(element.all(by.repeater("result in memory")).count()).toEqual(3);
    });

    it('This should capture all results', function() {
        browser.get('https://juliemr.github.io/protractor-demo/');

        Add(1,2);
        Add(10,20);
        Add(100,200);

        element.all(by.repeater("result in memory")).each((item)=> {
            item.element(by.css("td:nth-child(3)")).getText().then((text)=>{
                console.log(`total: ${text}`);
            })
        });

        expect(element.all(by.repeater("result in memory")).get(0).element(by.css("td:nth-child(3)")).getText()).toEqual("300");
        expect(element.all(by.repeater("result in memory")).get(1).element(by.css("td:nth-child(3)")).getText()).toEqual("30");
        expect(element.all(by.repeater("result in memory")).get(2).element(by.css("td:nth-child(3)")).getText()).toEqual("3");
    });

});
