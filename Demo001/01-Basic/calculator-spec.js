describe('this is an calculator', function() {
    it('This app will add two numbers', function() {
        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('8');
        element(by.model('second')).sendKeys('6');

         element(by.id('gobutton')).click();

         console.log("---------------");
        element(by.css("h2[class='ng-binding']")).getText().then((text)=>{
            console.log(text);
        });

        expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual("14");
    });


    it('This app will add two numbers2', function() {
        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('8');
        element(by.model('second')).sendKeys('6');

        element(by.id('gobutton')).click();

        console.log("---------------");
        element(by.css("h2[class='ng-binding']")).getText().then((text)=>{
            console.log(text);
        });

        expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual("14");
    });

});