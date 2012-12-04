/**
 * Occupied.js
 * @author Gabor Zsoter (zsitro@gmail.com)
 * @todo a lot e.g: comments
 * @link http://zsitro.com
 * @todo a lot e.g: comments
 */

(function (w, $) {

    "use strict";

    var o = {

        container: $('<div>').addClass('lePreloader'),
        messages: []

    };

    var prepare = function () {
		o.container.appendTo("body").hide();
        w.onbeforeunload = function () {
            o.occupy();
        };
    };


    o.add = function (message, delay) {
        this.messages.length === 0 && prepare();
        this.messages.push([message, delay]);
    };

    o.render = function (index) {
        this.container.html(this.messages[index][0]).show();
    };

    o.occupy = function () {
        $.each(this.messages, function (i, v) {
            w.setTimeout(function () {
                i === 0 && o.container.show();
                o.render(i);
            }, v[1]);
        });
    };

    w.occupied = o;

})(window, $);