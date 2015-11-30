var floPoke = function($) {
    var pokeTimeout = null;
    return {
        finger1: function () {
            var that = this;
            return {
                animation: function() {
                    $poke = $('.poke').eq(0);
                    $poke.addClass('finger1_wrap');
                    $poke.append('<img src="images/finger1.png" class="finger1" />');
                },
                start: function() {
                    that.start(5000);
                    this.animation();
                },
                stop: function() {
                    that.stop();
                }
            };
        },
        start: function(timeout) {
            this.stop();
            var that = this;
            pokeTimeout = setTimeout(function() {
                that.stop();
            }, timeout);
        },
        stop: function() {
            if (pokeTimeout != null) {
                clearTimeout(pokeTimeout);
                pokeTimeout = null;
            }
            $poke = $('.poke').eq(0);
            $poke.removeClass();
            $poke.empty();
            $poke.addClass('poke');
        }
    };
}

module.exports = floPoke;