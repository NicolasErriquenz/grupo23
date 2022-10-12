function Limite(x, y, w, h,a, f) {

    var f = f;

    var options = {
        isStatic: true,
        friction: 0,
        restitution: 0.6,
        angle: a,
    };

    this.body = Bodies.rectangle(x, y, w, h, options);

    this.h = h;
    this.w = w;
    this.color = 0;

    World.add(world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        f.fill(this.color, 0, 0);

        f.push();
        f.translate(pos.x, pos.y);
        f.rotate(angle);
        f.rectMode(fis.CENTER);
        f.rect(0, 0, this.w, this.h);
        f.noStroke();
        f.pop();

        
    }
}