var myStepDefinitionsWrapper = function () {
    this.Given(/^I am on the index page$/, function (callback) {
        this.visit(this.indexUrl, callback);
    });

    this.When(/^I sort the numbers "([^"]*)"$/, function (numbers, callback) {
        this.browser
            .fill('numbers', numbers)
            .pressButton('.sort', callback);
    });

    this.Then(/^I should see "([^"]*)" as the result$/, function (expectedResult, callback) {
        this.browser.assert.text('.result', expectedResult);
        callback();
    });

    this.Given(/^I turn on feature "([^"]*)"$/, function (featureName, callback) {
        var browser = this.browser;
        browser.visit("/api/toggle-features-on", function() {
            browser.visit("/index.html", callback);
        })
    });

    this.Given(/^I turn off feature "([^"]*)"$/, function (featureName, callback) {
        var browser = this.browser;
        browser.visit("/api/toggle-features-off", function() {
            browser.visit("/index.html", callback);
        })
    });
};
module.exports = myStepDefinitionsWrapper;