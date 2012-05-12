# zeke
# a plugable coffeescript template engine
broadway = require 'broadway'

module.exports = app = new broadway.App()
app.use require './core'
