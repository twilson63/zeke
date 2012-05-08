(function() {
  var cc;

  cc = require('../');

  describe('literal', function() {
    return describe('#text(value)', function() {
      return it('should render just plain text', function() {
        var t;
        t = function() {
          return text('foobar');
        };
        return cc.render(t).should.equal('foobar');
      });
    });
  });

}).call(this);
