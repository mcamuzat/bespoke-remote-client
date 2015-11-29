var floPoke = function($) {
    return {
        finger1: function () {
            var that = this;
            return {
                start: function() {
                    var that = this;
                    $poke = $('.poke').eq(0);
                    $poke.addClass('finger1_wrap');
                    $poke.append('<img src="images/finger1.png" class="finger1" />');

                    setTimeout(function() {
                       that.stop();
                    }, 5000);
                },
                stop: function() {
                    that.stop();
                }
            };
        },
        stop: function() {
            $poke = $('.poke').eq(0);
            $poke.removeClass();
            $poke.empty();
            $poke.addClass('poke');
        }
    };
}

module.exports = floPoke;