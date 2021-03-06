// HTTP mocks for protractor tests.
//
// Adds mocks library located at lib/angular/angular-mocks.js into the DOM
// using jQuery.getScript. This then allows the creation of a mock module
// defining HTTP mocks using Angular's $httpBackend service.
//
// See http://docs.angularjs.org/api/ngMockE2E/service/$httpBackend.
//
// Note: Mocked requests act as interceptors and won't reach the browser.
//
// Usage example:
// ```
// var mocks = require('./mocks');
//
// describe('something with HTTP mocks', function () {
//   beforeEach(function () {
//     browser.addMockModule('httpBackendMock', mocks.httpBackendMock);
//   });
// });
// ```

exports.BlacklistCreationSuccessMock = function () {
    $.getScript('lib/angular/angular-mocks.js', function () {
        angular.module('httpBackendMock', ['ngMockE2E'])
        .run(function ($httpBackend) {

            $httpBackend.whenPOST('/blacklist').respond(200);

            $httpBackend.whenGET(/.*/).passThrough();
        });
    });
};

exports.BlacklistCreationErrorMock = function () {
    $.getScript('lib/angular/angular-mocks.js', function () {
        angular.module('httpBackendMock', ['ngMockE2E'])
        .run(function ($httpBackend) {

            $httpBackend.whenPOST('/blacklist').respond(500);

            $httpBackend.whenGET(/.*/).passThrough();
        });
    });
};
