(function() {
  var cc;

  cc = require('../');

  describe('CoffeeScript helper (function)', function() {
    return describe("coffeescript -> alert 'hi'", function() {
      var coffeescript_helper;
      coffeescript_helper = "var __slice = Array.prototype.slice;\nvar __hasProp = Object.prototype.hasOwnProperty;\nvar __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };\nvar __extends = function(child, parent) {\n  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }\n  function ctor() { this.constructor = child; }\n  ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype;\n  return child; };\nvar __indexOf = Array.prototype.indexOf || function(item) {\n  for (var i = 0, l = this.length; i < l; i++) {\n    if (this[i] === item) return i;\n  } return -1; };".replace(/\n/g, '');
      return it("should render <script>" + coffeescript_helper + "(function () {\n return alert('hi');\n }).call(this);</script>", function() {
        var h;
        h = function() {
          return coffeescript(function() {
            return alert('hi');
          });
        };
        return cc.render(h).should.equal("<script>" + coffeescript_helper + "(function () {\n            return alert('hi');\n          }).call(this);</script>");
      });
    });
  });

  describe('CoffeeScript helper (string)', function() {
    return describe('coffeescript "alert \'hi\'\"', function() {
      return it('should render <script type="text/coffeescript">alert \'hi\'</script>', function() {
        var h;
        h = function() {
          return coffeescript("alert 'hi'");
        };
        return cc.render(h).should.equal('<script type="text/coffeescript">alert \'hi\'</script>');
      });
    });
  });

  describe('CoffeeScript helper (object)', function() {
    return describe("coffeescript src: 'script.coffee'", function() {
      return it('should render <script src="script.coffee" type="text/coffeescript"></script>', function() {
        var h;
        h = function() {
          return coffeescript({
            src: 'script.coffee'
          });
        };
        return cc.render(h).should.equal('<script src="script.coffee" type="text/coffeescript"></script>');
      });
    });
  });

}).call(this);
