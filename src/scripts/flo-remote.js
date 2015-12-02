var floRemote = function($, socket, floPoke) {
  return function(deck) {

      function makeid() {
          var text = "";
          var possible = "abcdefghijklmnopqrstuvwxyz";

          for( var i=0; i < 5; i++ )
              text += possible.charAt(Math.floor(Math.random() * possible.length));

          return text;
      }

      function getNote() {
          var note = $('.bespoke-active').eq(0).find('.flonote').eq(0).text();
          if (note != '' && typeof(note) !== 'undefined') {
              return note;
          }
      }

      function emitNote(token) {
          var note = getNote();
          objNote = {
              token: token,
              note: note
          };
          socket.emit('flopoke-note', objNote);
      }

      var token = makeid();
      var $section = document.getElementsByTagName('section')[0];
      $section.innerHTML += '<div class="tokenid-remote">token: '+token+'</div>';

      socket.emit('setTokenBp', token);

      socket.on('client-bespoke-action', function(action) {
          if (action == 'prev') {
              deck.prev();
          } else if (action == 'next') {
              deck.next();
          } else if (action == 'flopoke-finger1-start') {
              floPoke.finger1().start();
          }
      });

      deck.on('activate', function(e) {
          emitNote(token);
      });

  };
};

module.exports = floRemote;
