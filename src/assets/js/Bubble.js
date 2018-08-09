export default function (win, doc, total, radius) {
    'use strict';

    var TOTAL = total,
        RADIUS = radius;


    /**
     * @class Bubble
     * @constructor
     * @param {HTMLCanvasElement}
     */
    function Bubble(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.base = {};

        this._init();
    }

    Bubble.prototype._init = function () {

        this.ctx.fillStyle = 'rgba(150, 200, 255, .5)';
        this.x = this.base.x = Math.random() * (this.ctx.canvas.width - RADIUS);
        this.y = this.base.y = Math.random() * (this.ctx.canvas.height - RADIUS);
        this.radius = Math.random() * RADIUS;
        this.posX = Math.random() * 10;

        this.draw();
    };

    Bubble.prototype.draw = function () {
        this.ctx.save();

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.fill();

        this.ctx.restore();
    };

    Bubble.prototype.render = function () {
        this.x = (Math.sin(this.posX += 0.4) * this.radius * 0.2 + 8) + this.base.x;
        this.y -= this.radius * 0.35;
        if (this.y <= -100) {
            this.y = this.ctx.canvas.height + RADIUS;
        }
        this.draw();
    };


    /**
     * @class Bubbles
     * @constructor
     * @param {HTMLCanvasElement}
     */
    function Bubbles(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.child = [];
    }

    Bubbles.prototype.add = function (bubble) {
        this.child.push(bubble);
    };

    Bubbles.prototype.remove = function (i) {
        this.child.shift();
    };

    Bubbles.prototype.update = function () {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        for (var i = 0, l = this.child.length; i < l; i++) {
            this.child[i].render();
        }
    };


    /**
     * DOMContentLoaded
     */
    doc.addEventListener('DOMContentLoaded', function () {

        var canvas = doc.getElementById('bg_bubble');

        var bubbles = new Bubbles(canvas);
        for (var i = 0, l = TOTAL; i < l; i++) {
            var bubble = new Bubble(canvas);
            bubbles.add(bubble);
        }

        tick();

        function tick() {
            bubbles.update();
            requestAnimationFrame(tick);
            // setTimeout(tick, 1000 / 35);
        }

    }, false);

}