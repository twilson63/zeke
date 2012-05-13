exports.attach = ->
  @helpers['cssLink'] = (href, rel='stylesheet') ->
    link {href,rel}
  @helpers['scriptLink'] = (src) ->
    src = src + '.js' unless src.split('.')[1] == 'js'
    script {src}