md = 
  attach: ->
    @addModule 'markdown', 'github-flavored-markdown'
    @helpers['markdown'] = (s) -> 
      text data.markdown.parse(s)

cc = require '../'
cc.use md
cc.init() unless cc.initialized

describe 'addModule', ->
  it 'should assert', ->
    result = cc.render -> markdown '# bar'
    result.should.equal('<h1>bar</h1>')