# Zeke

A plug-able coffee-script template engine.

Zeke is Fork from [https://github.com/mauricemach/coffeekup](https://github.com/mauricemach/coffeekup)

It reduces the features to a base html template generator, with a broadway plug-in system.

``` coffeescript
#plugin
plugin = 
  attach: (options) ->
    @helpers['css'] = (content) ->
      text "<style type='text/css'>#{content}</style>"

zeke = require 'zeke'
zeke.use plugin
zeke.init()

# markup
zeke.render -> 
  doctype 5
  html ->
    head ->
      css '''
        body: { color: green; }
      '''
    body ->
      h1 'FooBar'
```

## Install

``` sh
npm install zeke
```

## About

Zeke uses `broadway` to create a plug-in system for `coffeekup` template parser.
 