cc = require '../'
cc.init() unless cc.initialized

describe 'literal', ->
  describe '#text(value)', ->
    it 'should render just plain text', ->
      t = -> text 'foobar'
      cc.render(t).should.equal 'foobar'
