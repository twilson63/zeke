cc = require '../'
cc.init() unless cc.initialized

describe 'script link', ->
  it 'cssLink should render <link rel="foo" href="/foo" />', ->
    result = cc.render -> cssLink "/foo", "foo"
    result.should.equal('<link href="/foo" rel="foo" />')
  it 'scriptLink should render <script src="/foo.js"></script>', ->
    result = cc.render -> scriptLink "/foo"
    result.should.equal('<script src="/foo.js"></script>')