var myStepDefinitionsWrapper = function () {
    this.Given(/^I am on the index page$/, function (callback) {
        this.visit(this.indexUrl, callback);
    });

    this.When(/^I sort the numbers "([^"]*)"$/, function (numbers, callback) {
        this.browser
            .fill('numbers', numbers)
            .pressButton('Sort', callback);
    });

    this.Then(/^I should see "([^"]*)" as the result$/, function (expectedResult, callback) {
        this.browser.assert.text('.result', expectedResult);
        callback();
    });
};
module.exports = myStepDefinitionsWrapper;