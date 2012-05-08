(function() {
  var cc;

  cc = require('../');

  describe('Common tag', function() {
    return describe("p 'foo'", function() {
      return it('should render foo in <p> tag', function() {
        var p;
        p = function() {
          return p('foo');
        };
        return cc.render(p).should.equal('<p>foo</p>');
      });
    });
  });

  describe('Common tag optimized', function() {
    return describe("p 'foo'", function() {
      return it('should render foo in <p> tag', function() {
        var p;
        p = function() {
          return p('foo');
        };
        return cc.render(p, {
          optimized: true,
          cache: true
        }).should.equal('<p>foo</p>');
      });
    });
  });

}).call(this);
