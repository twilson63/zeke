(function() {
  var cc;

  cc = require('../');

  describe('custom', function() {
    return describe('#tag(name, attr)', function() {
      it('should render', function() {
        var t;
        t = function() {
          return tag('custom');
        };
        return cc.render(t).should.equal('<custom></custom>');
      });
      it('should render with attributes', function() {
        var t;
        t = function() {
          return tag('custom', {
            foo: 'bar',
            ping: 'pong'
          });
        };
        return cc.render(t).should.equal('<custom foo="bar" ping="pong"></custom>');
      });
      return it('should render with attributes and inner attributes', function() {
        var t;
        t = function() {
          return tag('custom', {
            foo: 'bar',
            ping: 'pong'
          }, function() {
            return 'zag';
          });
        };
        return cc.render(t).should.equal('<custom foo="bar" ping="pong">zag</custom>');
      });
    });
  });

}).call(this);
