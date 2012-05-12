cc = require '../'
cc.init() unless cc.initialized

describe 'Common tag', ->
  describe "p 'foo'", ->
    it 'should render foo in <p> tag', ->
      p = -> p 'foo'
      cc.render(p).should.equal '<p>foo</p>'