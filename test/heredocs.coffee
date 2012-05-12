cc = require '../'
cc.init() unless cc.initialized

describe 'HereDocs', ->
  describe '''
     script """
        $(document).ready(function(){
          alert('test');
        });
      """
  ''', ->
    it 'should render <script>$(document).ready(function(){\n  alert(\'test\');\n});</script>', ->
      h = -> script """
        $(document).ready(function(){
          alert('test');
        });
      """
      cc.render(h).should.equal '<script>$(document).ready(function(){\n  alert(\'test\');\n});</script>'
