foo = require '../examples/app'

describe 'Foo', ->
  describe 'text "foobar"', ->
    it 'should render foobar', ->
      foo().should.equal 'foobar'
