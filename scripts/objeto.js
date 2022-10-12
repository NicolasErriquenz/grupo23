function Cuadrado(x, y, w, h, red, blue, green) {
    var options = {
        friction: 0.2,
        restitution: 0.6,
        density: 0.5
    };

    this.body = Bodies.rectangle(x, y, w, h, options);

    this.h = h;
    this.w = w;
    this.red = red;
    this.blue = blue;
    this.green = green;

    this.hue = fis.random(360);
    World.add(world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        fis.fill(this.hue, this.blue, this.green);
        fis.push();
        fis.translate(pos.x, pos.y);
        fis.rotate(angle);
        fis.rectMode(fis.CENTER);
        fis.rect(0, 0, this.w, this.h);
        fis.pop();

        //fis.strokeWeight(1);
        //fis.stroke(this.red, this.blue, this.green);
        
    }

    this.fueraDePantalla = function () {
        var pos = this.body.position;
        return pos.y > fis.height;
    }

    this.quitarDelMundo = function () {
        World.remove(world, this.body);
    }
}

function Circulo(x, y, r, red, blue, green) {
    var options = {
        friction: 0.2,
        restitution: 0.6
    };

    this.body = Bodies.circle(x, y, r, options);

    this.r = r;
    this.red = red;
    this.blue = blue;
    this.green = green;
    this.hue = fis.random(360);

    World.add(world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        fis.fill(this.hue, this.blue, this.green);

        fis.push();
        fis.translate(pos.x, pos.y);
        fis.rotate(angle);
        fis.rectMode(fis.CENTER);
        fis.ellipse(0, 0, this.r * 2);
        
        fis.pop();

        fis.push();
        fis.textAlign(fis.CENTER, fis.CENTER);
        fis.strokeWeight(1);
        fis.stroke(0);
        fis.textSize(32);
        fis.text('word', pos.x, pos.y);        
        fis.pop();

        
    }

    this.fueraDePantalla = function () {
        var pos = this.body.position;
        return pos.y > fis.height;
    }

    this.quitarDelMundo = function () {
        World.remove(world, this.body);
    }
}