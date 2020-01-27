describe('All capture Operation Demo', function() {

    function operator(firstNumber,secondNumber,operation){
        element(by.model('first')).sendKeys(firstNumber);
        element(by.model('second')).sendKeys(secondNumber);

        element.all(by.tagName("option")).each((item)=>{
            item.getAttribute("value").then((value)=>{
                if(value === operation){
                    item.click();
                }
            })
        });

        element(by.id('gobutton')).click();
    }

    it('This should test operations', function() {
        browser.get('https://juliemr.github.io/protractor-demo/');

        operator(4,2,"MULTIPLICATION");
        operator(60,20,"ADDITION");
        operator(1000,200,"SUBTRACTION");


        element.all(by.repeater("result in memory")).each((item)=> {
            item.element(by.css("td:nth-child(3)")).getText().then((text)=>{
                console.log(`total: ${text}`);
            })
        });

        expect(element.all(by.repeater("result in memory")).get(0).element(by.css("td:nth-child(3)")).getText()).toEqual("800");
        expect(element.all(by.repeater("result in memory")).get(1).element(by.css("td:nth-child(3)")).getText()).toEqual("80");
        expect(element.all(by.repeater("result in memory")).get(2).element(by.css("td:nth-child(3)")).getText()).toEqual("8");
    });

});
