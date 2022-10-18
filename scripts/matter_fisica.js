
var fis = new p5(sketch_fisica, 'canvas_matter');

var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
var engine;
var world;

var timeIndex = 0;

function sketch_fisica(p) {

    let ancho = 800;
    let alto = 800;

    p.fondo;

    var objetos = new Array();
    var limites = new Array();

    var cols = 8;
    var rows = 4;


    p.setup = function () {
        p.createCanvas(ancho, alto);
        engine = Engine.create();
        world = engine.world;

        limites.push(new Limite(p.width / 2, p.height, p.width, 20, 0, p));

        var espacio = ancho / cols;

        for (let j = 0; j < rows; j++) {
            for (let i = 0; i < cols; i++) {
                var x = espacio * i;
                if (j % 2 == 0)
                    x += espacio / 2;

                var y = espacio + j * espacio + 30;
                limites.push(new Bolita(x, y, 10, p));
            }
        }

        for (let i = 0; i < 4; i++) {
            let x = i * (espacio + 165);
            let h = 100;
            let w = 10;
            let y = p.height - h / 2;

            limites.push(new Limite(x, y, w, h, 0, p));
        }
    }

    p.draw = function () {
        p.background(51);
        Engine.update(engine);
        for (let i = 0; i < objetos.length; i++) {
            objetos[i].show();
            if (objetos[i].fueraDePantalla()) {
                objetos[i].quitarDelMundo();
                objetos.splice(i, 1);
                i--;
            }
        }
        for (let i = 0; i < limites.length; i++) {
            limites[i].show();
        }
    }

    p.mousePressed = function () {
        let red = p.random(255);
        let blue = p.random(255);
        let green = p.random(255);

        var tipo = $('input[name=tipo]:checked').val();
        if (tipo == "rectangulos")
            objetos.push(new Cuadrado(p.mouseX, p.mouseY, p.random(30, 50), p.random(40, 50), red, blue, green, timeIndex));
        else
            objetos.push(new Circulo(p.mouseX, p.mouseY, p.random(10, 40), red, blue, green, timeIndex));

        timeIndex++;
    }

}