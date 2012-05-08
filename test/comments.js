(function() {
  var cc;

  cc = require('../');

  describe('Comments', function() {
    return describe('comment "Comment"', function() {
      return it('should render <!--Comment-->', function() {
        var c;
        c = function() {
          return comment("Comment");
        };
        return cc.render(c).should.equal('<!--Comment-->');
      });
    });
  });

  describe('Comments optimized', function() {
    return describe('comment "Comment"', function() {
      return it('should render <!--Comment-->', function() {
        var c;
        c = function() {
          return comment("Comment");
        };
        return cc.render(c, {
          optimized: true,
          cache: true
        }).should.equal('<!--Comment-->');
      });
    });
  });

}).call(this);
