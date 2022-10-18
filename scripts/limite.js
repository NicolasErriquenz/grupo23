function Limite(x, y, w, h,a, f) {

    var f = f;

    var options = {
        isStatic: true,
        friction: 0.5,
        restitution: 0.6,
        angle: a,
    };

    this.body = Bodies.rectangle(x, y, w, h, options);

    this.h = h;
    this.w = w;
    this.color = 255;

    World.add(world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        f.fill(this.color);

        f.push();
        f.translate(pos.x, pos.y);
        f.rotate(angle);
        f.rectMode(fis.CENTER);
        f.rect(0, 0, this.w, this.h);
        f.noStroke();
        f.pop();

        
    }
}

function Bolita(x, y, r, f) {

    var f = f;

    var options = {
        isStatic: true,
        friction: 0,
        restitution: 0.8,
    };

    this.body = Bodies.circle(x, y, r, options);

    this.r = r;
    this.color = 255;

    World.add(world, this.body);

    this.show = function () {
        var pos = this.body.position;

        f.fill(this.color);

        f.push();
        f.translate(pos.x, pos.y);
        f.ellipse(0, 0, this.r);
        f.noStroke();
        f.pop();

        
    }
}