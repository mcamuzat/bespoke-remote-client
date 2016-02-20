var presentation = function() {
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress');
  bullets = require('bespoke-bullets');
  $ = require('jquery');
  socket = require('socket.io-client')('http://localhost:8000');
  floRmote = require('./flo-remote.js');
  floPoke = require('./flo-poke.js')($);
  function launch_presentation() {
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
          floRmote($, socket, floPoke)
      ]);
  }
return {
    launch_presentation: launch_presentation
};
};
module.exports = presentation;
