exports.attach = (options) ->
  @helpers['foo'] = -> text 'foobar'

exports.init = (done) -> done()
