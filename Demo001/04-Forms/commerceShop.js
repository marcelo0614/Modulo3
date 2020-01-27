describe('Shop Demo', function () {

    function selectItem(itemText){
        element.all(by.tagName("app-card")).each(function (item) {
            item.element(by.css("h4 a")).getText().then(function (text) {
                if(text==itemText){
                     item.element(By.css("button[class*='btn-info']")).click();
                }
            })
        })
    }

    it('Should Verify if the user has selected 2 products', function () {

        browser.get('https://qaclickacademy.github.io/protocommerce/shop');

        selectItem("iphone X");
        selectItem("Samsung Note 8");
        element(by.partialLinkText("Checkout")).getText().then((text) => {
                expect(text).toContain("2");
            })
        });

    it('Should Verify if the user has checkout 2 products', function () {

        browser.get('https://qaclickacademy.github.io/protocommerce/shop');
        var count=0;
        selectItem("iphone X");
        selectItem("Samsung Note 8");
        element(by.partialLinkText("Checkout")).click();

        element.all(by.repeater("result in Memory")).each((item)=>{
            item.element(by.css("h4[class*='media-heading']")).getText().then((text)=>{
                console.log(`device: ${text}`);
                count++;
            })
        })

       expect(count===2);

        })
    });
