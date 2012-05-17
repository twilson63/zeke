# Zeke

A plug-able coffee-script template engine.


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
x = zeke.render -> 
  doctype 5
  html ->
    head ->
      css '''
        body: { color: green; }
      '''
    body ->
      h1 'FooBar'

console.log x
```

Zeke is Fork from of [CoffeeKup](https://github.com/mauricemach/coffeekup)

It reduces the features to a base html template generator, with a broadway plug-in system.

There are already two plugins in development:

* [zeke-markdown](https://github.com/twilson63/zeke-markdown)
* [zeke-bootstrap](https://github.com/twilson63/zeke-bootstrap)

Thinking about a third

* [zeke-handlebars](https://github.com/twilson63/zeke-bootstrap)

## Why

I <3 `CoffeeKup`, its just `CoffeeScript`, which is just `Javascript`, etc.  But Zeke adds some awesome `broadway` plugin sugar to keep the core super simple and enables anyone to create plugin to `optimize` the compiler, or add `stylus` or anything you want, and every one gets the bet of both worlds.  It is super simple to add your own plug-in.  Just see one of the examples above.

The goal of this project is to maintain a super simple core `CoffeeKup` template engine and add a rich plugin system so it can work for everyone.

## What is CoffeeKup?

[CoffeeKup](http://coffeekup.org/) is a markup dsl that was created by [Maurice Machado](https://github.com/mauricemach) and now is currently maintained by [Kris Windham](https://github.com/gradus).  It is a great markup and was inspired by `_why` and created on `_why` day.  You get find out more about the template language here:  [A Beginners Intro](https://github.com/mark-hahn/coffeekup-intro) 

## Install

``` sh
npm install zeke
```
## Api

### zeke.use

Adds a plugin to zeke

### zeke.init

Inits zeke and confirms all plugins have been loaded

### zeke.compile

Compiles `CoffeeKup` markup to a function.

### zeke.render

Generates and returns html from `CoffeeKup`

## Tests

``` sh
npm test
``` 

## License

MIT/X11.

## contribute

everyone is welcome to contribute with patches, bugfixes and new features

1. create an [issue](https://github.com/twilson63/zeke/issues) on github so the community can comment on your idea
2. fork `zeke` in github
3. create a new branch `git checkout -b my_branch`
4. create tests for the changes you made
5. make sure you pass both existing and newly inserted tests
6. commit your changes
7. push to your branch `git push origin my_branch`
8. create a pull request