// Require Node modules in the browser thanks to Browserify: http://browserify.org
var presentation = require('./presentation')();
window.presentation = presentation;
// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
//

require('prism');

