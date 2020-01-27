describe('Forms Angular Demo', function () {
    xit('Should work with forms', function () {

        browser.get('https://qaclickacademy.github.io/protocommerce/');

        element(by.name("name")).sendKeys("Marcelo");
        element(by.css("input[name='email']")).sendKeys("marcelo_0614@hotmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("Password1");
        element(by.css("input[type='checkbox']")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Male")).click();
        element.all(by.name("inlineRadioOptions")).first().click();
        element(by.name("bday")).sendKeys("111112000");

        element(by.buttonText("Submit")).click().then(function () {
            element(by.css("div[class*='success']")).getText().then((text) => {
                browser.sleep(5000);
                expect(text).toContain("Success");
            })
        });
    });

    it('Should verify the error message when just one letter is set in name field', function () {

        browser.get('https://qaclickacademy.github.io/protocommerce/');

        element(by.name("name")).sendKeys("M");

        element(by.buttonText("Submit")).click().then(function () {
            element(by.css("div[class*='alert alert-danger']")).getText().then((text) => {
                browser.sleep(5000);
                expect(text).toContain("Name should be at least 2 characters");
            })
        });
    });
});