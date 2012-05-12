zeke = require '../'
zeke.use require './foo'

zeke.init() unless zeke.initialized

module.exports = ->
  zeke.render -> foo 'blah'