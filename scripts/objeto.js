var palabraCirculo = "PHYTON";
var palabraCuadrado = "CODO A CODO";
var abcCirculo = fis.split(palabraCirculo, "");
var abcCuadrado = fis.split(palabraCuadrado, "");

function Cuadrado(x, y, w, h, red, blue, green, index) {
    var options = {
        friction: 0.5,
        restitution: 0.3,
        density: 0.5
    };

    this.body = Bodies.rectangle(x, y, w, h, options);

    this.h = h;
    this.w = w;
    this.red = red;
    this.blue = blue;
    this.green = green;

    World.add(world, this.body);

    this.index = 0;
    if (index % abcCuadrado.length == 0)
        this.index = 0;
    else
        this.index = index % abcCuadrado.length;    

    this.letra = abcCuadrado[this.index];

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        fis.fill(this.red, this.blue, this.green);
        fis.push();
        fis.translate(pos.x, pos.y);
        fis.rotate(angle);
        fis.rectMode(fis.CENTER);
        fis.rect(0, 0, this.w, this.h);

        fis.strokeWeight(1);
        fis.stroke(2);
        fis.textSize(this.w);
        fis.fill(255);
        fis.text(this.letra, -this.w / 3, this.h / 3);

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

function Circulo(x, y, r, red, blue, green, index) {
    var options = {
        friction: 0.5,
        restitution: 0.3
    };

    this.body = Bodies.circle(x, y, r, options);

    this.r = r;
    this.red = red;
    this.blue = blue;
    this.green = green;

    World.add(world, this.body);

    this.index = 0;
    if (index % abcCirculo.length == 0)
        this.index = 0;
    else
        this.index = index % abcCirculo.length;    

    this.letra = abcCirculo[this.index];

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        fis.fill(this.red, this.blue, this.green);

        fis.push();
        fis.translate(pos.x, pos.y);
        fis.rotate(angle);
        fis.rectMode(fis.CENTER);
        fis.ellipse(0, 0, this.r * 2);

        fis.strokeWeight(1);
        fis.stroke(2);
        fis.textSize(this.r);
        fis.fill(0);
        fis.text(this.letra, -this.r / 3, this.r / 3);

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