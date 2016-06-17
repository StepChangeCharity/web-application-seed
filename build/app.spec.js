"use strict";
var testing_1 = require('@angular/core/testing');
var app_component_1 = require('./app.component');
testing_1.describe('AppComponent', function () {
    var appComponent;
    testing_1.beforeEach(function () {
        appComponent = new app_component_1.AppComponent();
    });
    testing_1.describe('AppComponent', function () {
        testing_1.it('has a name property', function () {
            testing_1.expect(appComponent.name).toBe('My First Angular 2 App');
        });
    });
});
//# sourceMappingURL=app.spec.js.map