(function() {
  var cc;

  cc = require('../');

  describe('Attributes', function() {
    return describe("a href: '/', title: 'Home'", function() {
      return it('should render <a href="/" title="Home"></a>', function() {
        var a;
        a = function() {
          return a({
            href: '/',
            title: 'Home'
          });
        };
        return cc.render(a).should.equal('<a href="/" title="Home"></a>');
      });
    });
  });

  describe('Attribute values', function() {
    return describe("br vrai: yes, faux: no, undef: @foo, nil: null, str: 'str', num: 42, arr: [1, 2, 3], obj: {foo: 'bar'}, func: ->", function() {
      return it('should render <br vrai="vrai" str="str" num="42" arr="1,2,3" obj-foo="bar" func="(function () {}).call(this);" />', function() {
        var a;
        a = function() {
          return br({
            vrai: true,
            faux: false,
            undef: this.foo,
            nil: null,
            str: 'str',
            num: 42,
            arr: [1, 2, 3],
            obj: {
              foo: 'bar'
            },
            func: function() {}
          });
        };
        return cc.render(a).should.equal('<br vrai="vrai" str="str" num="42" arr="1,2,3" obj-foo="bar" func="(function () {}).call(this);" />');
      });
    });
  });

}).call(this);
