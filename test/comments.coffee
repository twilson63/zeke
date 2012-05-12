cc = require '../'
cc.init() unless cc.initialized
describe 'Comments', ->
  describe 'comment "Comment"', ->
    it 'should render <!--Comment-->', ->
      c = -> comment "Comment"
      cc.render(c).should.equal '<!--Comment-->'
