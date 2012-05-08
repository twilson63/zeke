(function() {
  var cc;

  cc = require('../');

  describe('HereDocs', function() {
    return describe('script """\n   $(document).ready(function(){\n     alert(\'test\');\n   });\n """', function() {
      return it('should render <script>$(document).ready(function(){\n  alert(\'test\');\n});</script>', function() {
        var h;
        h = function() {
          return script("$(document).ready(function(){\n  alert('test');\n});");
        };
        return cc.render(h).should.equal('<script>$(document).ready(function(){\n  alert(\'test\');\n});</script>');
      });
    });
  });

}).call(this);
