var floRemote = function(socket, $) {
  return function(deck) {

      function makeid()
      {
          var text = "";
          var possible = "abcdefghijklmnopqrstuvwxyz";

          for( var i=0; i < 5; i++ )
              text += possible.charAt(Math.floor(Math.random() * possible.length));

          return text;
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
          }
      });

  };
};

module.exports = floRemote;
