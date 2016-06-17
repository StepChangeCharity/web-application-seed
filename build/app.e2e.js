"use strict";
describe('AppComponent', function () {
    beforeEach(function () {
        browser.get('/');
    });
    it('should have a title', function () {
        var subject = browser.getTitle();
        var result = 'StepChange Angular2 Application Seed';
        expect(subject).toEqual(result);
    });
});
//# sourceMappingURL=app.e2e.js.map