(function() {
  var cc;

  cc = require('../');

  describe('Context vars', function() {
    return describe('h1 @foo', function() {
      return it('should render <h1>bar</h1>', function() {
        var v;
        v = function() {
          return h1(this.foo);
        };
        return cc.render(v, {
          foo: 'bar'
        }).should.equal('<h1>bar</h1>');
      });
    });
  });

  describe('Local vars, hardcoded', function() {
    return describe('h1 "harcoded: " + obj.foo', function() {
      return it('should render <h1>harcoded: bar</h1>', function() {
        var compiled, expected, obj, result, v;
        obj = {
          foo: 'bar'
        };
        v = function() {
          return h1("harcoded: " + obj.foo);
        };
        expected = '<h1>harcoded: bar</h1>';
        compiled = cc.compile(v, {
          hardcode: {
            obj: obj
          }
        });
        result = compiled();
        result.should.equal(expected);
        obj.foo = 'baz';
        result = compiled();
        return result.should.equal(expected);
      });
    });
  });

}).call(this);
