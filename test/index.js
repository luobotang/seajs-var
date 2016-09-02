define(function (require) {
  var foo = require('foo')
  document.getElementById('message').innerHTML = foo.hi('luobo')
})