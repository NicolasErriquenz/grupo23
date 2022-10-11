
var fis = new p5(sketch_fisica, 'canvas_matter');

var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
var engine;
var world;

function sketch_fisica(p) {

    let ancho = 800;
    let alto = 600;

    p.fondo;
    var objetos = new Array();
    var limites = new Array();

    p.setup = function () {
        p.createCanvas(ancho, alto);
        engine = Engine.create();
        world = engine.world;

        limites.push(new Limite(p.width/2, p.height - 100, p.width, 10, 0.3, p));
        limites.push(new Limite(p.width-100, p.height / 2, 200, 10, -0.4, p));
    }

    p.draw = function () {
        p.background(51);
        Engine.update(engine);
        for (let i = 0; i < objetos.length; i++) {
            objetos[i].show();
            if(objetos[i].fueraDePantalla()){
                objetos[i].quitarDelMundo();
                objetos.splice(i,1);
                i--;
            }
        }        
        for (let i = 0; i < limites.length; i++) {
            limites[i].show();
        }
    }

    p.mousePressed = function () {
        objetos.push(new Cuadrado(p.mouseX, p.mouseY, p.random(10,40), p.random(10,40)));
        objetos.push(new Circulo(p.mouseX, p.mouseY, p.random(10,40)));
    }

}