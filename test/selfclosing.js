(function() {
  var cc;

  cc = require('../');

  describe('Self Closing Tags', function() {
    describe('#img(name, attr)', function() {
      it('should render', function() {
        var t;
        t = function() {
          return img();
        };
        return cc.render(t).should.equal('<img />');
      });
      return it('should render with attributes', function() {
        var t;
        t = function() {
          return img({
            src: 'http://foo.jpg.to'
          });
        };
        return cc.render(t).should.equal('<img src="http://foo.jpg.to" />');
      });
    });
    describe('#br()', function() {
      return it('should render', function() {
        var t;
        t = function() {
          return br();
        };
        return cc.render(t).should.equal('<br />');
      });
    });
    return describe('#link()', function() {
      return it('should render with attributes', function() {
        var t;
        t = function() {
          return link({
            href: '/foo.css',
            rel: 'stylesheet'
          });
        };
        return cc.render(t).should.equal('<link href="/foo.css" rel="stylesheet" />');
      });
    });
  });

}).call(this);
