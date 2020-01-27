describe('chainLocatorDemo', function() {
    it('Thisapp should use *', function() {
        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('8');
        element(by.model('second')).sendKeys('6');

        element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
        element(by.id('gobutton')).click();

        console.log("---------------");

        element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then((text)=>{
            console.log(text);
        })

        expect(element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText()).toEqual("48");
    });
});
