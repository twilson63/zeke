cc = require '../'
cc.init() unless cc.initialized

describe 'better errors', ->
  it 'errors should be clear', ->
    result = cc.render -> foobar "foo"
    result.should.equal('<link href="/foo" rel="foo" />')
