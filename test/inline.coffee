cc = require '../'

describe 'Inline', ->
  describe '#inline(name, attr)', ->
    it 'should render', ->
      t = -> p "This text could use #{inline -> strong -> a href: '/', 'a link'}."
      cc.render(t).should.equal '<p>This text could use <strong><a href="/">a link</a></strong>.</p>'
