
exports.attach = function() {
  this.helpers['cssLink'] = function(href, rel) {
    if (rel == null) rel = 'stylesheet';
    return link({
      href: href,
      rel: rel
    });
  };
  return this.helpers['scriptLink'] = function(src) {
    if (src.split('.')[1] !== 'js') src = src + '.js';
    return script({
      src: src
    });
  };
};
