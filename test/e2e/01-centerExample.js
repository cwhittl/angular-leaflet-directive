'use strict';

describe('Loading center-example.html', function() {

    var ptor, driver;
    beforeEach(function() {
        ptor = protractor.getInstance();
        ptor.get('/center-example.html');
        driver = ptor.driver;
    }, 30000);

    it('should update the zoom value in the input if clicked the zoom control', function() {
        driver.findElement(protractor.By.className('leaflet-control-zoom-in')).click();
        // Wait for zoom animation
        ptor.sleep(300);
        driver.findElement(protractor.By.xpath('/html/body/form/input[3]')).getAttribute("value").then(function(zoom) {
            expect(zoom).toBe('5');
        });
    });

    xit('should update the zoom value if the map is dragged', function() {
        driver.findElement(protractor.By.xpath('/html/body/form/input[3]')).sendKeys("2");
        ptor.sleep(3000);
    });

});
