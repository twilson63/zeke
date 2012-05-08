(function() {
  var cc;

  cc = require('../');

  describe('IE conditionals', function() {
    return describe(" ie 'gte IE8', -> link href: 'ie.css', rel: 'stylesheet'", function() {
      return it('should render <!--[if gte IE8]><link href="ie.css" rel="stylesheet" /><![endif]-->', function() {
        var h;
        h = function() {
          return ie('gte IE8', function() {
            return link({
              href: 'ie.css',
              rel: 'stylesheet'
            });
          });
        };
        return cc.render(h).should.equal('<!--[if gte IE8]><link href="ie.css" rel="stylesheet" /><![endif]-->');
      });
    });
  });

}).call(this);
