(function() {
  var cc;

  cc = require('../');

  describe('Escaping', function() {
    return describe("h1 h(\"<script>alert('\"owned\" by c&a &copy;')</script>)", function() {
      return it("should render <h1>&lt;script&gt;alert('&quot;owned&quot; by c&amp;a &amp;copy;')&lt;/script&gt;</h1>", function() {
        var t;
        t = function() {
          return h1(h("<script>alert('\"owned\" by c&a &copy;')</script>"));
        };
        return cc.render(t).should.equal("<h1>&lt;script&gt;alert('&quot;owned&quot; by c&amp;a &amp;copy;')&lt;/script&gt;</h1>");
      });
    });
  });

  describe('AutoEscaping', function() {
    return describe("h1 <script>alert('\"owned\" by c&a &copy;')</script>", function() {
      return it("should render <h1>&lt;script&gt;alert('&quot;owned&quot; by c&amp;a &amp;copy;')&lt;/script&gt;</h1>", function() {
        var t;
        t = function() {
          return h1("<script>alert('\"owned\" by c&a &copy;')</script>");
        };
        return cc.render(t, {
          autoescape: true
        }).should.equal("<h1>&lt;script&gt;alert('&quot;owned&quot; by c&amp;a &amp;copy;')&lt;/script&gt;</h1>");
      });
    });
  });

}).call(this);
