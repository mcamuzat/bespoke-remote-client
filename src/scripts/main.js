// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress');
  bullets = require('bespoke-bullets');
  socket = require('socket.io-client')('http://localhost:8000');
  floRmote = require('./flo-remote.js');

// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  backdrop(),
  scale(),
  hash(),
  bullets('.bullet'),
  progress(),
  floRmote(socket)
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');
