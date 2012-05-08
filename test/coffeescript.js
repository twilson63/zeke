(function() {
  var cc;

  cc = require('../');

  describe('coffeescript helper', function() {
    describe('#coffeescript()', function() {
      return it('function should render', function() {
        var t;
        t = function() {
          return coffeescript(function() {
            return alert('hi');
          });
        };
        return cc.render(t).should.equal("<script>var __slice = Array.prototype.slice;var __hasProp = Object.prototype.hasOwnProperty;var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };var __extends = function(child, parent) {  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }  function ctor() { this.constructor = child; }  ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype;  return child; };var __indexOf = Array.prototype.indexOf || function(item) {  for (var i = 0, l = this.length; i < l; i++) {    if (this[i] === item) return i;  } return -1; };(function () {\n            return alert('hi');\n          }).call(this);</script>");
      });
    });
    it('string should render', function() {
      var t;
      t = function() {
        return coffeescript("alert 'hi'");
      };
      return cc.render(t).should.equal("<script type=\"text/coffeescript\">alert 'hi'</script>");
    });
    return it('object should render', function() {
      var t;
      t = function() {
        return coffeescript({
          src: 'script.coffee'
        });
      };
      return cc.render(t).should.equal("<script src=\"script.coffee\" type=\"text/coffeescript\"></script>");
    });
  });

}).call(this);
