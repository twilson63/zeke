(function() {
  var cc;

  cc = require('../');

  describe('Inline', function() {
    return describe('#inline(name, attr)', function() {
      return it('should render', function() {
        var t;
        t = function() {
          return p("This text could use " + (inline(function() {
            return strong(function() {
              return a({
                href: '/'
              }, 'a link');
            });
          })) + ".");
        };
        return cc.render(t).should.equal('<p>This text could use <strong><a href="/">a link</a></strong>.</p>');
      });
    });
  });

}).call(this);
