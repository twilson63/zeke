
exports.attach = function(options) {
  return this.helpers['foo'] = function() {
    return text('foobar');
  };
};

exports.init = function(done) {
  return done();
};
