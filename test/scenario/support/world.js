module.exports = function() {
    var zombie = require('zombie');
    zombie.localhost('localhost', 8080);

    this.World = function World(callback) {
        this.indexUrl = '/src/index.html';
        this.browser = new zombie(); // this.browser will be available in step definitions

        this.visit = function(url, callback) {
            this.browser.visit(url, callback);
        };

        callback(); // tell Cucumber we're finished and to use 'this' as the world instance
    };
};