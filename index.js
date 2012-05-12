var app, broadway;

broadway = require('broadway');

module.exports = app = new broadway.App();

app.use(require('./core'));
