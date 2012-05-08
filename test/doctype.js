(function() {
  var cc;

  cc = require('../');

  describe('doctype', function() {
    it('default should render html5 doctype', function() {
      var expected, template;
      template = "doctype()";
      expected = '<!DOCTYPE html>';
      return cc.render(template).should.equal(expected);
    });
    it('xml should render xml header', function() {
      var expected, template;
      template = "doctype 'xml'";
      expected = '<?xml version="1.0" encoding="utf-8" ?>';
      return cc.render(template).should.equal(expected);
    });
    it('5 should render html 5 doctype', function() {
      var expected, template;
      template = "doctype 5";
      expected = '<!DOCTYPE html>';
      return cc.render(template).should.equal(expected);
    });
    return it('transitional should render transitional doctype', function() {
      var expected, template;
      template = "doctype 'transitional'";
      expected = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
      return cc.render(template).should.equal(expected);
    });
  });

}).call(this);
