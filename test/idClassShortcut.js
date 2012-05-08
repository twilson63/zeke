(function() {
  var cc;

  cc = require('../');

  describe('ID/class shortcut (ID only)', function() {
    return describe("div '#myid', 'foo'", function() {
      return it('should render <div id="myid">foo</div>', function() {
        var t;
        t = function() {
          return div('#myid', 'foo');
        };
        return cc.render(t).should.equal('<div id="myid">foo</div>');
      });
    });
  });

  describe('ID/class shortcut (one class only)', function() {
    return describe("div '.myclass', 'foo'", function() {
      return it('should render <div class="myclass">foo</div>', function() {
        var t;
        t = function() {
          return div('.myclass', 'foo');
        };
        return cc.render(t).should.equal('<div class="myclass">foo</div>');
      });
    });
  });

  describe('ID/class shortcut (multiple classes)', function() {
    return describe("div '.myclass.myclass2.myclass3', 'foo'", function() {
      return it('should render <div class="myclass myclass2 myclass3">foo</div>', function() {
        var t;
        t = function() {
          return div('.myclass.myclass2.myclass3', 'foo');
        };
        return cc.render(t).should.equal('<div class="myclass myclass2 myclass3">foo</div>');
      });
    });
  });

  describe('ID/class shortcut (no string contents)', function() {
    return describe("img '#myid.myclass', src: '/pic.png'", function() {
      return it('should render <img id="myid" class="myclass" src="/pic.png" />', function() {
        var t;
        t = function() {
          return img('#myid.myclass', {
            src: '/pic.png'
          });
        };
        return cc.render(t).should.equal('<img id="myid" class="myclass" src="/pic.png" />');
      });
    });
  });

  describe('ID/class shortcut (ID only) optimized', function() {
    return describe("div '#myid', 'foo'", function() {
      return it('should render <div id="myid">foo</div>', function() {
        var t;
        t = function() {
          return div('#myid', 'foo');
        };
        return cc.render(t, {
          optimized: true,
          cache: true
        }).should.equal('<div id="myid">foo</div>');
      });
    });
  });

}).call(this);
